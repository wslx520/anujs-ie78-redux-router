import React from "react";
import { Link } from 'react-router'
import styles from "./navigation.scss"

class Navigation extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        return (
            <div className={styles.Navigation}>
                <div className="container">
                    <ul>
                        <li><Link to="/" activeClassName={styles.current} onlyActiveOnIndex={true}>首页</Link></li>
                        <li><Link to="/demo" activeClassName={styles.current}>Demo</Link></li>
                        <li><Link to="/inbox" activeClassName={styles.current}>Inbox</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation;