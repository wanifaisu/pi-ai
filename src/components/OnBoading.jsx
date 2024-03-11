import React from 'react'
import Phone from "../assets/phone1.jpg"
import HousePhn from "../assets/phnhouse1.jpg"
import Pi from "../assets/pi.jpeg"
import Personal from "../assets/personal.webp"
import { Grid,Box, Typography, Button } from '@mui/material'
import { onboardButtonStyle } from '.'
export default function OnBoading() {
  return (
<div style={{ paddingTop:150}}>
<Grid container spacing={2}>
  <Grid item xs={12}  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Box sx={{display:{md:"flex",sm:"flex",xs:"column"}}}>
             <div>
                   <Typography sx={{display:{md:"flex",sm:"flex",xs:"none"},fontWeight:"bold",color:"green",fontSize:"50px",fontFamily:"monospace"}}>I'm</Typography>
                    <img style={{width:220,height:150,borderRadius:"10px"}} src={Phone} />
                    <Typography sx={{ display:{md:"none",sm:"none",xs:"display"},fontWeight:"bold",color:"green",fontSize:"50px",fontFamily:"monospace"}}>I'm</Typography>
              </div>
                 <div>
                  <h1 style={{fontWeight:"bold",fontSize:"150px",marginTop:"35px",marginLeft:"20px",color:"green"}}>Pi </h1>
      
                 </div>
    </Box>
  </Grid>
  <Grid item xs={12}  sx={{display:{md:"flex",sm:"flex",xs:"none"},justifyContent:"center",alignItems:"center"}}>
    <Box style={{display:"flex",alignItems:"center"}}>
    <div style={{marginRight:"20px",width:"200px"}}>
           <h1 style={{fontSize:"37px",textAlign:"right",color:"green"}} >Your </h1>
            <h1 style={{fontSize:"37px",textAlign:"right",color:"green"}}>personal </h1>
            <h1 style={{fontSize:"37px",textAlign:"right",color:"green"}}>AI. </h1>
         </div>
          <div>
           
            <img style={{width:200,height:180,borderRadius:"10px"}}  src={HousePhn}/>
          </div>
    </Box>
  </Grid>

</Grid>
   
    </div>
  )
}
