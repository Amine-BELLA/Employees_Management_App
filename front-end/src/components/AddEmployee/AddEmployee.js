import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./AddEmployee.css";

function AddEmployee() {
    const [insertedInfos, setInsertedInfos] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

 
    function handleChange(e) {
        const { name, value } = e.target;
        setInsertedInfos(previousVlue => {
            return (
                {
                    ...previousVlue,
                    [name]: value
                }
            );
        });
    }
    async function handleAddClick() {
        await fetch('http://localhost:8080//addEmployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(insertedInfos)
        })
    }
    return (
        <div>
            <Header />
            <div className="form-container">
                <h4 style={{ "marginBottom": "3rem" }}>Add Employee</h4>
                <form>
                    <input name="firstName" onChange={handleChange} placeholder="First Name" type="text" /> <br />
                    <input name="lastName" onChange={handleChange} placeholder=" Last Name" type="text" /> <br />
                    <input name="email" onChange={handleChange} placeholder="Email" type="email" /> <br />
                    <a href='/'><button onClick={handleAddClick} style={{ "marginRight": "2rem" }} type="button" class="btn btn-success">Add</button></a>
                    <a href='/'><button type="button" class="btn btn-primary">Cancel</button></a>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default AddEmployee;