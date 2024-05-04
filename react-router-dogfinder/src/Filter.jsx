import React from "react";
import { useParams } from "react-router-dom";
import DogInformation from "./DogInformation";


function Filter ({ dogs }) {
    const { name } = useParams();

    if (name){
        const currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLocaleLowerCase()
        );
        return <DogInformation dog={currentDog} />;
    }
    return null;
}

export default Filter;