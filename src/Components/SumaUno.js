import React, { useEffect, useState } from "react";

const SumaUno = (props) => {
    const { firstName, lastName, age, hairColor} = props;
    const [count, setCount] = useState(age);


    const Sumar = () =>{
        setCount(count + 1);

    }

    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {count}</p>
            <p>Hair color: {hairColor}</p>
            <button onClick={Sumar}>Sumar 1</button>
        </div>
    )
}

export default SumaUno;
