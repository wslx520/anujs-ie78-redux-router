import React from 'react';
import { Link } from 'react-router'
import {GetCourseCateList, GetPlateList, GetPlateCourses, GetCarouselList} from "../../Service/categories";
import {CourseCard, Carousel, CarouselItem} from "../../Components"
import style from "./index.scss";

let CateLink = (props) => (
    <Link class={style.categoryItem} to={"/Course?catId="+props.data.cateId}>
        <img src={props.data.pcPicUrl} />
        <h4>{props.data.cateName}</h4>
    </Link>
)

class Block0 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }

    async componentWillMount () {
        let data = await GetCarouselList();
        this.setState({"list": data});
    }

    render () {
        // console.log(this.state.list.map, [],[].map);
        return (
            <Carousel>
                {this.state.list.map((el)=><CarouselItem link={el.address} image={el.pic}/>)}
            </Carousel>
        )
    }
}

class Block1 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }

    async componentWillMount () {
        let data = await GetCourseCateList();
        this.setState({"list": data});
    }

    render () {
        return (
            <div className={style.block}>
                <div className="container">
                    <div className={style.category}>
                        {this.state.list.map((el)=>(
                            <CateLink data={el}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

class Plate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }

    async componentWillMount () {
        let data = await GetPlateCourses(this.props.data.plateId);
        this.setState({"list": data});
    }

    render () {
        return (
            <div className="container">
                <h1 className="_Heading1"><Link className={style.more} to="/Course">更多&gt;&gt;</Link>{this.props.data.plateName}</h1>
                <div style={{'margin-left':"-43.6px", 'margin-top':"30px"}}>
                    {this.state.list.map((item)=>(
                        <CourseCard data={item}/>
                    ))}
                </div>
            </div>
        )
    }
}


class Block2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            plates : []
        }
    }

    async componentWillMount () {
        let data = await GetPlateList();
        this.setState({"plates": data});
    }

    render () {
        return (
            <div className={style.block}>
                {this.state.plates.map((plate)=>(
                    <Plate data={plate} />
                ))}
            </div>
        )
    }
}

let PageIndex = () => (
    <div className="PageIndex">
        <Block0/>
        <Block1/>
        <Block2/> 
    </div>
)

export default PageIndex;