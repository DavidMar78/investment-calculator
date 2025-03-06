import React, {useState} from 'react';

const UserInput = () => {
    const [userInput,setUserInput] = useState({
        initInvest: 10000,
        annualInvest: 1200,
        expectReturn: 6,
        duration: 10
    });

    function handleChange(inputId, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputId]: newValue
            }
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input type="number" required={}/>
                </p>
                <p>
                    <label>Annual investment</label>
                    <input type="number" required={}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input type="number" required={}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required={}/>
                </p>
            </div>
        </section>
    );
};

export default UserInput;