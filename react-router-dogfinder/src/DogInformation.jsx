import React from "react";
import { Link, Navigate } from "react-router-dom";

// destructing props as dogs to pull information from db.json
function DogInformation ({ dog }) {
// Every end point that is not listed will redirect the user to /dogs.
    if (!dog) return <Navigate to="/dogs" />

    return (
        <div className="row DogInformation">
            <div className="col d-flex flex-column align-items-center">
                <img src={`/${dog.src}.jpg`} alt={dog.name} />
                <h1>{dog.name}</h1>
                <h2>Years Old: {dog.age}</h2>
                <ul>
                    {dog.facts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                    ))}
                </ul>
                <Link to="/dogs">Go Back</Link>
            </div>
        </div>
    )
}

export default DogInformation;