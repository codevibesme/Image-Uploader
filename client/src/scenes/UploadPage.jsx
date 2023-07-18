import { Card, Box } from "@mui/material";
import UploadImage from "../components/UploadImage";
import { useSelector} from "react-redux";

const UploadPage = () => {
  const picturePath = useSelector((state) => state.picturePath);
  console.log(picturePath);
  return (
    <Box sx={{
        width:"402px",
        height:"469px",
        margin:"200px auto",
        borderRadius:"12px",
        padding:"1%"
      }}>
        <Card sx={{width:"337px", height:"397px", margin:"0 auto", padding:"20px 20px", borderRadius:"12px"}}>
          {!picturePath && (<UploadImage />)}          
        </Card>
      </Box>
  )
}

export default UploadPage