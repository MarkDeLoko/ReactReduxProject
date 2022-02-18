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
import {setModalActive} from "../../Redux/actions/ModalAction";
import {CHANGE_PASSWORD, LOGIN, LOGOUT, SIGNUP} from "./Consts"

export default function AccountMenu() {
  const {accessToken} = useAuthSelector()
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch()
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenu(open);
  };
  const listItemTextStyle = {marginLeft: '30px', marginRight: '50px'}

  function handleLogOut() {
    // console.log('try logout')
    dispatch(logout(accessToken))
    navigate('/login')
  }

  function handleChangePassword(){
    dispatch(setModalActive(true))
  }


  const list = (pointsTop, pointsEnd) => (
    <Box
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[...pointsTop].map((text) => (
          <ListItem
            onClick={() => text === LOGIN
              ? navigate('/login')
              : text === CHANGE_PASSWORD
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
      <Button style={{zIndex:1000}} onClick={toggleDrawer(true)}>Меню</Button>
      <Drawer
        open={menu}
        onClose={toggleDrawer(false)}
      >
        {!accessToken
          ?
          list([LOGIN, SIGNUP], [])
          :
          list([CHANGE_PASSWORD], [LOGOUT])
        }
      </Drawer>
    </div>
  );
}
