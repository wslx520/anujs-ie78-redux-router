import React from "react";
import { Link } from 'react-router'
import * as News from "../../Service/news";

const PageInboxMessage = (props) => (
    <h3>Message {props.params.id}</h3>
)

class PageInbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {list:[]}
    }

    async componentWillMount () {
        let data = await News.GetNewsList();
        this.setState({"list": data});
    }

    render() {
        return (
            <div>
                <h2>Inbox</h2>
                <ul>
                    {this.state.list.map((el, index)=>(
                        <li><Link to={"/inbox/messages/"+index} dangerouslySetInnerHTML={{__html: el.note}}></Link></li>
                    ))}
                </ul>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
}

export {PageInbox, PageInboxMessage} ;