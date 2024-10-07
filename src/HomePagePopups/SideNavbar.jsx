import {List,ListItem,ListItemText} from '@mui/material';



const SideNavbar=()=>
    (
    <List style={{border:'1px solid black'}}>
        {['OverView','Orders & Return','Coupon&Credits','WishList','Profile Setting','Saved Address','Payment Method'].map((text)=>
        (
            <ListItem button key={text}>
                <ListItemText primary={text}/>
            </ListItem>
        ))}
    </List>
    )

export default SideNavbar