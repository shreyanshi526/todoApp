import React from 'react';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Card } from '@mui/material';
import { borders } from '@mui/system';

const ListTodo = () => {
    const [todos, setTodos] = useState([])
    // fetch all todos from server
    React.useEffect(() => {
        fetch("http://localhost:3000/todos", {
            method: "GET"
        }).then((response) => {
            response.json().then((data) => {
                console.log(data);
                setTodos(data)
            })
        })
    })

    setInterval(() => {
        fetch("http://localhost:3000/todos", {
            method: "GET"
        }).then((response) => {
            response.json().then((data) => {
                console.log(data);
                setTodos(data)
            })
        })
    }, 1000)

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE"
        }).then((response) => {
            if (response.status === 200) {
                // Remove the deleted todo from the local state
                const updatedTodos = todos.filter(todo => todo.id !== id);
                setTodos(updatedTodos);
            }
        });
    };
    return (
        <>
            <div style={{backgroundColor: '#f0f0f0'}}>
                <center>
                    <Typography variant='h4'>Works To Be Done</Typography>
                </center>

                <div style={{
                    display : "flex",
                    flexWrap : "wrap",
                    justifyContent : "space-between"
                }}>
                    {todos.map((eachTodo) => {
                        return <div style={{
                            padding: 30,

                        }}>
                            <Card variant='outlined' style={{
                                width: 300,
                                padding: 30,

                            }}>
                                <TextField variant='standard' label="Title" defaultValue={eachTodo.title}></TextField>
                                <br/>
                                <TextField variant='standard' label="Description" fullWidth={true} defaultValue={eachTodo.description} multiline></TextField>
                                <br /><br />
                                <Button variant='contained' style={{ backgroundColor: "#4CAF50" }}
                                 onClick={() => handleDelete(eachTodo.id)}>Delete</Button>
                            </Card>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default ListTodo;