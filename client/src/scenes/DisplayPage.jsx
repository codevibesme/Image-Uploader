import React from 'react';
import { Box, Card, CardContent, Typography, LinearProgress, Icon, Button } from '@mui/material';
import { useState } from 'react';
import { useSelector} from 'react-redux';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import copy from "copy-to-clipboard";
const DisplayPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState("Copy");
  const [isClicked, setIsClicked] = useState(false);
  setTimeout(()=>{
    setIsLoading(false);
  },2000);
  const picturePath = useSelector((state)=>state.picturePath);
  const copyLink = () => {
    if(picturePath){
        copy(`https://iusoham.onrender.com/assets/${picturePath}`);
        setIsCopied("Copied!");
        setIsClicked(true);
    }
  }
  return (
    <div>
        {isLoading && (
            <Box sx={{
                margin:"200px auto",
                width:"400.36px",
                height:"143.57px",
                borderRadius:"12px",
                padding:"5%"
            }}
            >
                <div style={{margin:"20px", height:"100%", width:"100%"}}>
                    <Typography sx={{height:"27px"}}>
                        Uploading...
                    </Typography>
                    <LinearProgress sx={{height:"6px", width:"340.71px"}}/>
                </div>
            </Box>
        )}
        {!isLoading && (
            <Box sx={{
                width:"400.4px",
                height:"454.96px",
                margin:"200px auto",
                borderRadius:"12px",
                
              }}>
                <Card sx={{width:"100%", height:"100%", borderRadius:"12px"}}>
                    
                    <CardContent sx={{alignContent:"center"}}>
                        <Icon sx={{width:"100%", height:"100%"}}>
                            <CheckCircleIcon sx={{color:"#219653", height:"35px", width:"35px"}} />
                        </Icon>
                        <Typography variant="h3" sx={{fontSize:"18px", textAlign:"center"}} gutterBottom>
                            Uploaded Successfully!
                        </Typography>
                        <Box sx={{margin:"10% auto", height:"224px", width:"338px"}}>
                            <img src={`https://iusoham.onrender.com/assets/${picturePath}`} alt='none' style={{width:"100%", height:"100%",borderRadius:"12px"}} />
                        </Box>
                        <Box sx={{margin:"20px auto", height:"34px", width:"338px", backgroundColor:"#F6F8FB", zIndex:"1", borderRadius:"8px", display:"flex",  justifyContent:"flex-end", flexDirection:"row"}}>
                            <input style={{height:"34px", width:"240px", fontSize:"12px", border:"0", textAlign:"start"}} disabled value={`https://iusoham.onrender.com/assets/${picturePath}`} />
                            <Button disabled={isClicked} variant="contained" sx={{height:"30px", width:"74px", borderRadius:"8px", fontSize:"12px", textAlign:"center"}} onClick={copyLink}>
                                {isCopied}
                            </Button>
                            
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        )}

    </div>
  )
}

export default DisplayPage