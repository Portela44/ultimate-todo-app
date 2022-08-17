import React from 'react'

export default function TaskCard(props) {
    const {task: {name, image, useful_link, urgency, description, done}} = props;
    return (
        <div className="taskCard">
            <h1 className="urgency">{urgency}</h1>
            <img src={image} alt={name} />
            <div className="taskInfo">
                <h3>{name}</h3>
                <h5>{description}</h5>
                <h5>{useful_link}</h5>
            </div>
            <input type="checkbox" value="done" />
        </div>
    )
}
