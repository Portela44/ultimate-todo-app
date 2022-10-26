import React from 'react'

export default function TaskCard(props) {
    const {task: {name, image, useful_link, urgency, description, done}, onDelete, onDone} = props;
    return (
        <div className="taskCard" style={{borderImage: 'url("https://www.onlygfx.com/wp-content/uploads/2022/04/chalk-frame-2.png") 450'}}>
            <input type="checkbox" value="done" onChange={() => onDone(props.task, done)} />
            <img src={image} alt={name} />
            <div className="taskInfo">
                <h2>{name}</h2>
                <h5>{description}</h5>
                <h5>{useful_link}</h5>
            </div>
            <h1 className="urgency">{urgency}</h1>
            <button className="delete-btn" onClick={() => onDelete(name)}>Delete</button>
        </div>
    )
}
