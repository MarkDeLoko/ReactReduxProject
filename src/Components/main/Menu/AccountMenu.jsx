import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function AccountMenu() {
  const [state, setState] = React.useState({
    'Меню': false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        {['Home', 'Login', 'Sign Up'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText sx={{marginLeft: '10px'}} primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Log out'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText  sx={{marginLeft: '10px'}} primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer('Меню', true)}>Меню</Button>
          <Drawer
            open={state['Меню']}
            onClose={toggleDrawer('Меню', false)}
          >
            {list('Меню')}
          </Drawer>
        </React.Fragment>

    </div>
  );
}
