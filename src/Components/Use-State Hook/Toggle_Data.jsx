import React, { useState } from 'react'

const Toggle_Data = () => {
    const [name, setName] = useState("Tushar Prajapati")

    const handleChangeName = () => {
        let val = name;

        // Using if-else
        if (val === "Tushar Prajapati") {
            setName("Silver Oak University");
        } else {
            setName("Tushar Prajapati")
        }

        // Using Ternary Operator
        // (val === "Tushar Prajapati" ? setName("Mohan Prajapati") : setName("Tushar Prajapati"))
    }

    return (
        <>
            <div className="container">
                <div className="main">
                    <h2>{name}</h2>
                    <button className='btn' style={{ margin: "auto" }} onClick={handleChangeName}>
                        Click Me
                    </button>
                </div>
            </div>
        </>
    )
}

export default Toggle_Data