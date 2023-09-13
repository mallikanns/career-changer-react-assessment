import { useState } from "react"

function Form() {
    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [position,setPosition] = useState('');

    return (
        <div>
            <h2>Create User Here</h2><br />
            <form>
                <input type="text" placeholder="Name" value={name} className="text" onChange={(ev)=>setName(ev.target.value)}  />
                <input type="text" placeholder="Last Name" value={lastname} className="text" onChange={(ev)=>setLastname(ev.target.value)}  />
                <input type="text" placeholder="Position" value={position} className="text" onChange={(ev)=>setPosition(ev.target.value)}  />
                <button type="submit" className="save">Save</button>
            </form>
        </div>
    )
}

export default Form