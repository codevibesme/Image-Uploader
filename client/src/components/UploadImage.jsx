import { Typography, CardContent, CardActions} from "@mui/material";
import DragAndDrop from "./DragAndDrop";
const UploadImage = () => {
    return (
        <>
            <CardContent sx={{alignContent:"center"}}>
                <Typography variant="h3" sx={{fontSize:"18px", textAlign:"center"}} gutterBottom>
                    Upload your image
                </Typography>
                <Typography sx={{ color:"#828282", fontSize:"10px", textAlign:"center", margin:"20px auto"}}>
                    File should be Jpeg, Png...
                </Typography>
            </CardContent>
            <CardActions>
                <DragAndDrop />
            </CardActions>
        </>
    );
}
export default UploadImage;

