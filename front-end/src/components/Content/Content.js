import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function Content() {
    const [backEnd, setBackEnd] = useState({
        data: [],
        loading: true
    });
    var { data, loading } = backEnd;

    async function showEmployees() {
        await fetch('http://localhost:8080/getEmployees', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(response => {
                const body = response;
                setBackEnd({
                    data: body,
                    loading: false
                });
            })
    }

    async function handleDelete(e) {
        const parent = e.target.parentNode;
        const ID = parent.parentNode.id;
        await fetch('http://localhost:8080/delete/' + ID, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        showEmployees();
        console.log(parent.parentNode.text);
    }



    return (
        <div>
            <div style={{ "margin": "2rem auto", "textAlign": "center" }}>
                <a href='/add-employee'><button style={{ "marginRight": "4rem" }} type="button" class="btn btn-outline-success">Add Employee</button></a>
                <button onClick={showEmployees} type="button" class="btn btn-outline-primary">Show List</button>
            </div>
            {
                !loading &&
                <div style={{ "width": "70%", "textAlign": "center", "justifyContent": "center", "alignItems": "center", "margin": "4rem auto" }}>
                    <h5 style={{ "marginBottom": "1rem" }}>List of Employees</h5>
                    <table class="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(element => {
                                    return (
                                        <tr id={element.id}>
                                            <td>{JSON.stringify(element.firstName)}</td>
                                            <td>{JSON.stringify(element.lastName)}</td>
                                            <td>{JSON.stringify(element.email)}</td>
                                            <td>
                                                <button onClick={handleDelete} type="button" class="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>

                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>

            }

        </div>
    );
}

export default Content;