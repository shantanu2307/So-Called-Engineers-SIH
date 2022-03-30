import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [phone,setPhone] = useState('');

    const loginUser = async () => {
        console.log('Login');
        console.log(phone);
        navigate('/otpverify');
    }
  return (
    <div>
        <div className="login-container">
            <div className="login-header">
                Login
            </div>
            <div className="login-form">
                <Box className='login-form-item' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    
                    <TextField id="phone" name="phone" label="Phone" variant="standard" value={phone} 
                    onChange={e => setPhone(e.target.value)}/>
                  </Box>

                  <Box className='login-form-item' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Button variant="contained" sx={{ mr: 1, my: 0.5 }} onClick={loginUser}>Login</Button>
                  </Box>
            </div>
        </div>
    </div>
  )
}

export default Login