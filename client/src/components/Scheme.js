import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Scheme = () => {
    const navigate = useNavigate();
    const [enrolled,setEnrolled] = useState([]);
    const [explore,setExplore] = useState([]);

    const getEnrolled = async () => {
        console.log("getting enrolled");
        setEnrolled([{schemeid:1,name:'scheme1'},{schemeid:2,name:'scheme2'}]);
    }

    const getExplore = async () => {
        console.log("getting explore");
        setExplore([{schemeid:3,name:'scheme3'},{schemeid:4,name:'scheme4'}]);
    }

    useEffect(()=>{
        getEnrolled();
        getExplore();
    },[])


    const enroll = async(schemeid) => {
        console.log('enrolling');
        console.log(schemeid);
        navigate(`/schemes/`+schemeid);
    }

  return (
    <div>
        <div className="scheme-container">
            <div className="enrolled-container">
                <div className="enrolled-headers">
                    Enrolled Courses
                </div>
                <div className="enrolled-body">
                    {enrolled.map((cur) => (
                        <div>{cur.name}</div>
                    ))}
                </div>
            </div>
            
            <div className="explore-container">
                <div className="explore-headers">
                    Explore Courses
                </div>
                <div className="explore-body">
                    <div className="explore-item">
                        
                        {explore.map((cur) => (
                            <Paper elevation={3}>
                            <div>
                                <div>{cur.name}</div>
                                <Box className='explore-item-button' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <Button variant="contained" sx={{ mr: 1, my: 0.5 }} onClick={() => enroll(cur.schemeid)}>Enroll</Button>
                                </Box>
                            </div>
                            </Paper>
                        ))}
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Scheme
