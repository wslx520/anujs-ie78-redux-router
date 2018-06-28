import React from 'react';
import { Link } from 'react-router'
import {Image, Money} from "../"
import styles from "./coursecard.scss"

let CourseCard = (props) => (
    <div className={styles.CourseCard}>
        <Link to={"/CourseDetail?courseId="+props.data.courseId}>
            <div className={styles.img}>
                <Image src={props.data.picUrl}/>
            </div>
            <h1 className={styles.title}>{props.data.courseName}</h1>
            <p className={styles.info}>{props.data.timeLength}&nbsp;&nbsp;|&nbsp;&nbsp;{props.data.buyNum}人已学</p>
            <p className={styles.price}><Money value={props.data.offPrice}/></p>
        </Link>
    </div>
)

export default CourseCard