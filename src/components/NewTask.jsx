import React, {useState} from 'react'

export default function NewTask(props) {
    const {newTask} = props;
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [useful_link, setUseful_link] = useState("");
    const [urgency, setUrgency] = useState("");
    const [description, setDescription] = useState("");
    const [done, setDone] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        const task = {
            name: name,
            image: image,
            useful_link: useful_link,
            urgency: parseInt(urgency),
            description: description,
            done: done
        }
        newTask(task);
    };

    return (
        <div>
            <form className="taskForm" onSubmit={handleForm}>
                <h2>New Task:</h2>
                <input type="text" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input type="text" placeholder="Image url" value={image} onChange={(e) => {setImage(e.target.value)}}/>
                <input type="text" placeholder="Useful Link" value={useful_link} onChange={(e) => {setUseful_link(e.target.value)}}/>
                <input type="number" placeholder="Urgency" value={urgency} onChange={(e) => {setUrgency(e.target.value)}}/>
                <input type="text" placeholder="Description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                <label><input type="checkbox" checked={done} onChange={(e) => {setDone(e.target.checked)}}/>Done?</label>
                <button className="menu-btn" type="submit">Create a new Task</button>
            </form>
        </div>
    )
}
