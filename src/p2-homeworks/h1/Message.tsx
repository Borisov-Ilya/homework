import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.messageItem}>
            <div><img className={style.avatar} src={props.avatar} alt=''/></div>
            <div className={style.arrow}/>
            <div className={style.item}>
                <div className={style.name}> {props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.data}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
