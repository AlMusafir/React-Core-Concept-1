import { useState } from "react"

export default function Team(){

    
    const [team , setTeam] = useState(11);
    
    const addplayer = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    
    
    const removePlayer = () => {
        
        setTeam(team -1)
        
    }
    
    const teamStyle = {
        border: '6px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    
    return (
        <div style={teamStyle}>
            <h3>Players:{team}</h3>

            <button onClick={addplayer}>ey nao</button>

            <button onClick={removePlayer}>bad de</button>


        </div>
    )
}