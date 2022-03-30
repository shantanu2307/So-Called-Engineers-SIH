import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SchemeId = () => {
  const {schemeid} = useParams();
  const [scheme,setScheme] = useState({});

  const getScheme = async() => {
    //get scheme details using scheme id

    setScheme({schemeid:schemeid,name:'Scheme3',details:['Name','DOB','Address','Gender']});
  }
  useEffect(() => {
    getScheme();
  },[])

  return (
    <div>
      {/* SchemeID {schemeid} */}
      <div className="schemeid-container">
        <div className="schemeid-header">
          {scheme.name}
        </div>
        <div className="schemeid-body">
        <FormGroup>
          {scheme.details.map((cur) => (
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label= {cur} />
              </div>
            ))}
       </FormGroup>
          
        </div>
      </div>

    </div>
    
  )
}

export default SchemeId