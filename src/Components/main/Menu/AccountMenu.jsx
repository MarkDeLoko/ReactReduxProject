import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function AccountMenu() {
  const menu = 'Menu'
  const [state, setState] = React.useState({
    menu: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const list = (anchor) => (
    <Box
      // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Login', 'Sign Up'].map((text) => (
          <ListItem button key={text}>
            <ListItemText sx={{marginLeft: '10px'}} primary={text}/>
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        {['Log out'].map((text) => (
          <ListItem button key={text}>
            <ListItemText sx={{marginLeft: '10px'}} primary={text}/>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(menu, true)}>{menu}</Button>
        <Drawer
          open={state[menu]}
          onClose={toggleDrawer(menu, false)}
        >
          {list(menu)}
        </Drawer>
      </React.Fragment>

    </div>
  );
}
