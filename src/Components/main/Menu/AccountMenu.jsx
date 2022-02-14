import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


export default function AccountMenu() {
  const menu = 'Menu'
  const isAuth = useSelector(state => {
    const {authReducer} = state
    return authReducer.accessToken
  })
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    menu: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const list = (anchor, pointsTop, pointsEnd) => (
      <Box
        // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {[...pointsTop].map((text) => (
            <ListItem
              onClick={() => text === 'Login' ? navigate('/') : navigate('/signup')}
              button key={text}>
              <ListItemText sx={{marginLeft: '30px', marginRight: '50px'}} primary={text}/>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {[...pointsEnd].map((text) => (
            <ListItem button key={text}>
              <ListItemText sx={{marginLeft: '30px', marginRight: '50px'}} primary={text}/>
            </ListItem>
          ))}
        </List>
      </Box>



  );

  return (
    <div className='menu'>
      <React.Fragment>
        <Button onClick={toggleDrawer(menu, true)}>{menu}</Button>
        <Drawer
          open={state[menu]}
          onClose={toggleDrawer(menu, false)}
        >
          {!isAuth
            ?
            list(menu, ['Login', 'Sign Up'], [])
            :
            list(menu, ['Change Password'], ['Logout'])
          }
        </Drawer>
      </React.Fragment>

    </div>
  );
}
