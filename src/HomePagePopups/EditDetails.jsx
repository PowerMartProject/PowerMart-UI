import { Container,TextField,Button } from "@mui/material"
import { useState } from "react"
 const EditDetails=()=>
{
 const [selected,SetSelected]=useState('')
const  handleGender=(value)=>{
    SetSelected(value)
 }
    return(     
    <Container style={{border:'1px solid black'}}>
        <h2>
            Edit Details
        </h2>
        <TextField label="First Name" fullWidth margin="normal"/>
        <TextField label="Last Name" fullWidth margin="normal"/>
        <Button variant="contained" style={{backgroundColor:"white",color:'black',width:'250px'}} onClick={()=>handleGender('Male')}>Male
        {selected==='Male'?<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><title>icons/controls/check/active</title><g id="icons/controls/check/active" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M16.7746405,8.22735801 C16.478929,7.91934842 16.0050049,7.92494859 15.716079,8.24015841 L10.3732719,14.0147382 C10.3368437,14.0543394 10.2772014,14.0547394 10.240416,14.0155382 L8.27793445,11.9086726 C7.98579433,11.5966629 7.51151306,11.5962629 7.21937294,11.9078726 C6.92687569,12.2194823 6.92687569,12.723498 7.21937294,13.0351077 L9.78399176,15.7767931 C9.92434758,15.9263977 10.1147029,16 10.3132725,16 L10.3175582,16 C10.5175563,16 10.7089831,15.9227976 10.8486246,15.7699928 L16.7867832,9.35379308 C17.0757091,9.03858326 17.070352,8.5353676 16.7746405,8.22735801" id="Fill-1" fill="#FF3F6C"></path></g></svg>:''}
        </Button>
        <Button variant="contained" style={{backgroundColor:"white",color:'black',width:'250px'}} onClick={()=>handleGender('Female')}>Female
        {selected==='Female'?<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><title>icons/controls/check/active</title><g id="icons/controls/check/active" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M16.7746405,8.22735801 C16.478929,7.91934842 16.0050049,7.92494859 15.716079,8.24015841 L10.3732719,14.0147382 C10.3368437,14.0543394 10.2772014,14.0547394 10.240416,14.0155382 L8.27793445,11.9086726 C7.98579433,11.5966629 7.51151306,11.5962629 7.21937294,11.9078726 C6.92687569,12.2194823 6.92687569,12.723498 7.21937294,13.0351077 L9.78399176,15.7767931 C9.92434758,15.9263977 10.1147029,16 10.3132725,16 L10.3175582,16 C10.5175563,16 10.7089831,15.9227976 10.8486246,15.7699928 L16.7867832,9.35379308 C17.0757091,9.03858326 17.070352,8.5353676 16.7746405,8.22735801" id="Fill-1" fill="#FF3F6C"></path></g></svg>:''}
        </Button>
        <TextField label="Mbile NUmber" fullWidth margin="normal"/>
        <TextField label="Email ID" fullWidth margin="normal"/>
        {/* <TextField label="Name" fullWidth margin="normal"/> */}
        <TextField label="Alternate MObileNumber" fullWidth margin="normal"/>
        <Button variant="contained" color="primary" style={{margin:'10px'}}>Save</Button>
    </Container>
 
    )
}
export default EditDetails