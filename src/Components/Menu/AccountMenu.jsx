import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from "react-router-dom";
import {useAuthSelector} from "../../Hooks/selectors/UseAuthSelector";
import {useDispatch} from "react-redux";
import {logout} from "../../Redux/actions/LogOutAction";


export default function AccountMenu() {
  const token = useAuthSelector()
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch()

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    // console.log(open)
    setMenu(open);
  };
  const listItemTextStyle = {marginLeft: '30px', marginRight: '50px'}

  function handleLogOut() {
    console.log('try logout')
    dispatch(logout(token))
    navigate('/login')
  }

  function handleChangePassword(){
    console.log('try change pass')
  }

  const list = (pointsTop, pointsEnd) => (
    <Box
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[...pointsTop].map((text) => (
          <ListItem
            onClick={() => text === 'Login'
              ? navigate('/login')
              : text === 'Change Password'
                ? handleChangePassword()
                : navigate('/signup')}
            button key={text}>
            <ListItemText sx={listItemTextStyle} primary={text}/>
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        {[...pointsEnd].map((text) => (
          <ListItem
            onClick={handleLogOut}
            button key={text}
          >
            <ListItemText sx={listItemTextStyle} primary={text}/>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='menu'>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer
        open={menu}
        onClose={toggleDrawer(false)}
      >
        {!token
          ?
          list(['Login', 'Sign Up'], [])
          :
          list(['Change Password'], ['Logout'])
        }
      </Drawer>


    </div>
  );
}
