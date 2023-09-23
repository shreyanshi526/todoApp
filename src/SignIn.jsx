import React from 'react';
import { Button, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Card } from '@mui/material';

const SignIn = () => {
    return (
        <>
            <div style={{
                paddingTop: 40,
                paddingBottom: 30,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant='h4'>
                    Welcome Back!
                </Typography>
            </div>

            {/* card */}
            <div style={{
                display: "flex",
                justifyContent: "center",

            }}>
                <Card variant="outlined" style={{ width: 400, padding: 20 }}>

                    <br /><br />
                    <TextField fullWidth={true} label="Username" variant="outlined"></TextField>
                    <br /><br />
                    <TextField fullWidth={true} label="Password" variant="outlined"></TextField>
                    <br /><br />

                    <Button size='large' variant='contained' style={{ backgroundColor: "#4CAF50" }}
                        onClick={() => {
                            window.location = "/"
                        }}
                    >Log In</Button>

                </Card >
            </div>
        </>
    )
}

export default SignIn;