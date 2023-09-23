import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Card } from '@mui/material';
import { borders } from '@mui/system';



export const AddTodo = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  return (
    <>

      <div style={{
        paddingTop: 40,
        paddingBottom: 30,
        display: "flex",
        justifyContent: "center"
      }}>
        <Typography variant='h4'>
          Your Todo App
        </Typography>
      </div>

      {/* card */}
      <div style={{
        display: "flex",
        justifyContent: "center",

      }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>


          <TextField
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            fullWidth={true}
            label="Title"
            variant="outlined"
          />

          <br /><br />

          <TextField
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            fullWidth={true}
            label="Description"
            variant="outlined"
          ></TextField>

          <br /><br />

          <Button size='large' variant='contained' style={{ backgroundColor: "#4CAF50" }}
            onClick={() => {
              function callback2(data) {
                console.log(data);
              }
              function callback1(res) {
                res.json().then(callback2);
              }
              fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                  title: title,
                  description: description
                 }),
                 headers: {
                  "Content-type": "application/json"
                }
              })
                .then(callback1)
            }}>Add</Button>

        </Card >
      </div>
      <center>
        <div>
          <Button variant='filled' size='large' style={{
            marginTop: 30,
            padding: 10,
            width: 300,
            fontSize: "20px",
            backgroundColor: "#eeeeee",
          }}
          sx={{ borderBottom: 2,
            borderColor: 'success.main',
            fontWeight: 'medium'
          }}
          onClick={()=>{
            window.location="/List"
          }}
          >View Your Todos</Button>
        </div>
      </center>
    </>
  )
}

export default AddTodo;