import React from 'react'

export default function TaskCard(props) {
    const {task: {name, image, useful_link, urgency, description, done}, onDelete} = props;
    return (
        <div className="taskCard">
            <input type="checkbox" value="done" />
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
