import React from 'react'
import { boardimage, imagesContainer, onBoadtext, onBocontainer } from '.'
import { Typography ,Box,Button, Grid} from '@mui/material'
import Phone from "../assets/phone1.jpg"
import NavigationIcon from '@mui/icons-material/Navigation';
import HousePhn from "../assets/phnhouse1.jpg"
import Fab from '@mui/material/Fab';
export default function OnBoadingProfile() {
    const calculatePosition = (index, totalImages) => {
        const angle = (index / (totalImages /2)) * Math.PI;
        const radius = 290; // Adjust radius as needed
        const x = Math.cos(angle) * radius-50;
        const y = Math.sin(angle) * radius-100;
        return { x, y };
      };
      const items = [
        { color: 'rgb(252, 227, 166)', source: Phone ,text:"Read a story"},
        { color: 'rgb(255, 228, 206)', source: HousePhn  ,text:"Just event"},
        { color: 'rgb(217, 242, 206)', source: Phone , text:"Learn something"},
        { color: 'rgb(217, 234, 252)', source: HousePhn , text:"Make plan"},
        { color: 'rgb(217, 242, 206)', source: Phone , text:"Read book"},
        { color: 'rgb(217, 234, 252)', source: HousePhn, text:"watch movie" },
      
      ];
    
  return (
    <Grid container padding={1} sx={{paddingTop:{md:"170px",sm:"100px",xs:"60px"}}} >
        
        <Grid item={12} sx={{display:{md:"flex",sm:"flex",xs:"none"}}}>
    <div className="container">
    <h1 style={{fontSize:"35px",fontWeight:"bold" ,color:"green"}}>Togather <br/> we'can</h1>
    <div className="images-container">
      {items.map((image, index) => {
        const { x, y } = calculatePosition(index,6); // Change '6' to the total number of images
        return (
            <div  style={{ transform: `translate(${x}px, ${y}px)` ,marginBottom:"100px",marginRight:"20px"}}>
          <img
            key={index}
            src={image?.source}
            alt={`Image ${index + 1}`}
            className="image"
           
          />
          <Fab variant="extended" style={{color:"black",fontSize:"10px",position:"absolute",borderRadius:"20px",top:130,left:120,textTransform:"capitalize",backgroundColor:image.color,width:130,height:"20px"}}>
  <NavigationIcon fontSize='10'  />
  {image.text}
</Fab>
          
          </div>
        );
      })}
    </div>
  </div>
  </Grid>
  <Grid item={12} sx={{display:{md:"none",sm:"none",xs:"flex"}}}>
    <Grid container>
        
        
            {items.map((image, index) => {
       console.log(index,"index")
        return (
            <Grid item xs={index==2?12:6}  style={{marginTop:index%2!=0?100:0 }}>
                
                <Box style={{marginLeft:index>2?"5px":index%2!=0?"10px":0}}>
          <img
            key={index}
            src={image?.source}
            alt={`Image ${index + 1}`}
          className='imageMobile'
           
          />
          <Fab variant="extended" style={{color:"black",
          fontSize:"10px",borderRadius:"20px",
          textTransform:"capitalize",
          position:"relative",
         zIndex:1,
         top:index==2?0:-20,
         left:index==2?-100:index%2!==0?-10:40,
          backgroundColor:image.color,
          width:130,height:"20px"}}>
  <NavigationIcon fontSize='10'  />
  {image.text}
</Fab>
</Box>

{index==2&&<Box style={{marginTop:10,marginBottom:10}}>
                     <h1 style={{fontSize:"35px",fontWeight:"bold" ,color:"green",textAlign:"center"}}>Togather <br/> we'can</h1>
                     </Box>}
          </Grid>
        );
      })}
          
        </Grid>
       
    
  </Grid>
  </Grid>

  )
}
