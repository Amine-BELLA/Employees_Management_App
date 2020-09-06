import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "../AddEmployee/AddEmployee.css";

function ModifyEmployee() {

    return (
        <div>
            <Header />
            <div className="form-container">
                <h4 style={{ "marginBottom": "3rem" }}>Modify Employee</h4>
                <form>
                    <input name="firstName" placeholder="First Name" type="text" /> <br />
                    <input name="lastName" placeholder=" Last Name" type="text" /> <br />
                    <input name="email" placeholder="Email" type="email" /> <br />
                    <a href='/'><button style={{ "marginRight": "2rem" }} type="button" class="btn btn-success">Add</button></a>
                    <a href='/'><button type="button" class="btn btn-primary">Cancel</button></a>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default ModifyEmployee;