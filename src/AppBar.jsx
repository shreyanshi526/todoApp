import { Button, Typography } from '@mui/material'
import React from 'react'

const AppBar = () => {
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10
            }}>
                <div>
                    <Typography variant='h6'> TodoApp </Typography>
                </div>
                <div>
                    <Button
                        variant='outlined' style={{ marginRight: 10 }}
                        onClick={() => {
                            window.location = "/SignUp"
                        }}>
                        SignUp</Button>

                    <Button variant='outlined'
                        style={{ marginRight: 6 }}
                        onClick={() => {
                            window.location = "/Login"
                        }}>
                        SignIn</Button>
                </div>
            </div>
        </>
    )
}

export default AppBar
