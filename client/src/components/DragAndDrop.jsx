import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updatePicturePath } from "../state/ImageSlice";
import { useRef } from "react";

const DragAndDrop = () => {
    const navigate = useNavigate();
    const picturePath = useSelector((state)=>state.picturePath);
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const onFilesDrop = async (acceptedFiles) => {
        const form = new FormData();
        form.append("picture", acceptedFiles[0]);
        form.append("picturePath", acceptedFiles[0].name);
        const response = await fetch("https://iusoham.onrender.com", {
                method:"POST",
                body: form
            },
        );
        const picUploaded = await response.json();
        if(picUploaded){
            dispatch(updatePicturePath({picturePath: picUploaded.picturePath}));
            navigate("/display");
        }
    }
    const onClick = () => {
        inputRef.current.click();
    }
    const handleFileChange = async (e) => {
        const form = new FormData();
        if(e.target.files && e.target.files[0]){
            form.append("picture", e.target.files[0]);
            form.append("picturePath", (e.target.files[0]).name);
        } else{
            console.log("NO FILE!");
            return;
        }
        const response = await fetch("https://iusoham.onrender.com", {
                method:"POST",
                body: form
            },
        );
        const picUploaded = await response.json();
        if(picUploaded){
            dispatch(updatePicturePath({picturePath: picUploaded.picturePath}));
            navigate("/display");
        }

    }
    return ( 
        <div style={{margin:"auto"}}>
            {!picturePath && (
                <>
                    <Dropzone 
                        acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        onDrop={onFilesDrop}
                    >
                        {({getRootProps, getInputProps}) => (
                            <section >
                                <div {...getRootProps()} style={{padding:"8%", display:"flex", flexDirection:"column", border:"1px dashed grey"}}>
                                    <div><input  {...getInputProps()} /> </div>
                                    <div style={{alignSelf:"center"}}><img src="assets/addImg.png" alt ="pic" style={{width:"114.13px", height:"88.24px", margin:"0 auto"}}/></div>
                                    <div style={{alignSelf:"flex-end"}}><p style={{color: "#BDBDBD", fontSize:"12px", textAlign:"center"}}>Drag 'n' drop some files here, or click to select files</p></div>
                                </div>
                                <p style={{color:"#BDBDBD", fontSize:"14px", textAlign:"center"}}>
                                    Or
                                </p>
                                <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                                    <input
                                        style={{display: 'none'}}
                                        ref={inputRef}
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                    <button style={{
                                        width:"110px",
                                        height:"31.98px",
                                        borderRadius:"8px",
                                        fontSize:"12px",
                                        margin:"0 auto",
                                        fontWeight:"bold",
                                        border:"0",
                                        color:"#FFFFFF",
                                        backgroundColor:"#2F80ED"
                                    }}
                                        onClick={onClick}
                                    >
                                        Choose a file
                                    </button>
                                </div>
                                
                            </section>
                        )}
                    </Dropzone>
                    
                </>
            )}
            
        </div>
    )
}
export default DragAndDrop;