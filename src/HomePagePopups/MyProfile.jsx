import { Grid ,Box} from '@mui/material';
import SideNavbar from './SideNavbar';
import EditDetails from './EditDetails';
import { useSelector } from 'react-redux';

export const MyProfile = () => {
const name=useSelector((state)=>state.login.forgotPassword)
  return (
    <>
    <div style={{margin:'10px',alignItems:'Left'}}>
    <h2>Account</h2>
    <h6 >{name}</h6>
    </div>
     <Box sx={{ display: 'flex' }} style={{border:'1px solid black',padding:'20px'}}  >
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <SideNavbar />
      </Grid>
      <Grid item xs={9}>
        <EditDetails />
      </Grid>
    </Grid>
     </Box>
     </>
  );
};

export default MyProfile;
