import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const navigate = useNavigate();
    const [otp,setOtp] = useState('');

    const verifyOtp = async () => {
        console.log('Verify OTP');
        console.log(otp);
        navigate('/scheme');
    }
  return (
    <div>
        <div className="otp-container">
            <div className="otp-header">
                otp
            </div>
            <div className="otp-form">
                <Box className='otp-form-item' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    
                    <TextField id="otp" name="otp" label="OTP" variant="standard" value={otp} 
                    onChange={e => setOtp(e.target.value)}/>
                  </Box>

                  <Box className='otp-form-item' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Button variant="contained" sx={{ mr: 1, my: 0.5 }} onClick={verifyOtp}>Verify</Button>
                  </Box>
            </div>
        </div>
    </div>
  )
}

export default Otp