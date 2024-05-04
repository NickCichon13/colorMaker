import React, {useState, UseParams} from "react";

function ColorForm () {
    const [colorName, setColorName] = useState('');
    const [colorCode, setColorCode] = useState('');


    handelSubmit = (e) => {
        setColorName(e.target.value);
        push('/colors');
    };

    return (
        <div>
            <h2>Add A New Color To Your List!</h2>
                <form onSubmit={handelSubmit}>
                    <div>
                        <label htmlFor="colorName">Color Name:</label>
                        <input
                            type="text"
                            id="colorName"
                            value={colorName}
                            onChange={(e) => setColorName(e.target.value)}
                        />
                    <div>
                        <label htmlFor="colorCode">Color Code: </label>
                        <input 
                            type="color"
                            id="colorCode"
                            value={colorCode}
                            onChange={(e) => setColorCode(e.target.value)}
                        />
                    </div>
                    </div>
                </form>
        </div>
    );
}

export default ColorForm;