import React from 'react';
import { Link } from 'react-router'
import Image from "../Image"
import styles from "./carousel.scss"

let CarouselItem = (props) => (
    <div className={styles.item+" "+(props.active ? styles.active : "")}>
        <Link to={props.link}><Image src={props.image}/></Link>
    </div>
)

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {current : 0}
    }

    componentWillMount () {
        this.timeout = setInterval(()=>{
            this.next();
        }, 10000)
    }

    next () {
        if(this.props.children.length === 0) return;
        this.setState({current:(this.state.current+1) % this.props.children.length})
    }

    render () {
        return (
            <div className={styles.Carousel}>
                {this.props.children.map((el, index)=>{
                    return React.cloneElement(el, {
                        active: this.state.current === index
                    });
                })}
            </div>
        )
    }
}

export {Carousel, CarouselItem} ;