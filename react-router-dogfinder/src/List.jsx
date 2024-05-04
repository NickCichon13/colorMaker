import React from "react";
import { Link } from "react-router-dom";


// destructering Dog to import information from db.json.
function List({ Dog }) {
    reutrn (
        <div className="List">
            <div className="row mt-4">
                <div className="col">
                    <h2 className="text-center">
                        Click on A dog and find information on them!
                    </h2>
                </div>
            </div>
            <div className="row">
                {dogs.map(d => (
                    <div className="col-3 text-center" key={d.name}>
                        <img src={`/${d.src}.jpg`} alt={d.name} />
                        <h3 className="mt-3">
                            <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                        </h3>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default List;