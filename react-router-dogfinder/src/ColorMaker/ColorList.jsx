import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function ColorList (){
    const [colors, setColors] = useState([
        {id: 1, name: 'Red', code: '#ff0000'},
        {id: 1, name: 'Red', code: '#00ff00'},
        {id: 1, name: 'Red', code: '#0000ff'},
    ]);

    useEffect(()=>{
    
    },[]);

    return (
        <div>
            <h2>View the beauty of your colors!</h2>
            <ul>
                {colors.map(color=>(
                    <li key={color.id}>
                        <Link to={`/colors/${color.id}`} style={{color: color.code}}>
                            {color.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/colors/new">Add New Color</Link>
        </div>
    )

}

export default ColorList;
       
