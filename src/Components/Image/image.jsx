import React from 'react';

class Image extends React.Component{

    constructor(props){
        super(props);
        this.state = {isLoaded:false};
    }

    componentWillMount(){
        let img = document.createElement("img");
        img.onload = ()=> this.setState({isLoaded:true})
        img.src = this.props.src;
    }

    render(){
        return (
            this.state.isLoaded ? <img src={this.props.src} /> : <span>notload</span>
        )
    }
}

export default Image