import React, { useState } from 'react'
import OnBoading from '../components/OnBoading'
import { homeStyleContainer } from '.'
import { Grid ,Box,Button} from '@mui/material'
import { onboardButtonStyle, onoutlineButtonStyle } from '../components'
import OnBoadingProfile from '../components/OnBoadingProfile'
import PiTalking from '../components/PiTalking'
import UiButton from '../components/UiButton'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  const [dotColor,setDotColor]=useState(0)
  const onNextButton=()=>{
    if(dotColor>1){
      navigate("./chat")
    }else{
      setDotColor((prv)=>prv+1)
    }
  }
  return (
    <div style={homeStyleContainer} className='homeContainer'>
{dotColor==0?
      <OnBoading/>
      :dotColor==1?
     <OnBoadingProfile/>
     :<PiTalking/>
      }




<Grid container>
      <Grid item={12} md={12} sm={12} xs={12}>
    <Box style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
      <UiButton varient="contained" styledComponent={onboardButtonStyle}onButtonClick={onNextButton}  buttonText={dotColor===2?"Talk to Pi":'Next'}/>
     
    </Box>
   {dotColor===2&& <Box style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
      <UiButton varient="outlined" styledComponent={onoutlineButtonStyle}onButtonClick={()=>console.log("signup")}  buttonText={'Sign Up'}/>
     
    </Box>}
 </Grid>
 <Grid item={12} md={12} sm={12} xs={12}>
    <Box style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
    <div class="stepper">
  <div className="dot" style={{backgroundColor:dotColor===0?"green":"rgb(217, 202, 202)"}}></div>
  <div className="dot" style={{backgroundColor:dotColor===1?"green":"rgb(217, 202, 202)"}}></div>
  <div className="dot" style={{backgroundColor:dotColor===2?"green":"rgb(217, 202, 202)"}}></div>
</div>
    </Box>
 </Grid>
 </Grid>
    </div>
  )
}
