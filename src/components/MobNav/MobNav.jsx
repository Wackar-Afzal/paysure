'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { icons, NavbarIcon } from '../../assets/icons';
import Link from 'next/link'

 const MobNav=()=> {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >   
    <div className='w-full flex items-center h-[40px] pr-[20px] justify-end'>
    {icons.cross}
    </div>
      <List>
        {[
            { title: 'Home', link: '/' },
            { title: 'Services', link: '/services' },
            { title: 'About', link: '/about' },
            { title: 'Contact', link: '/' },
            { title: 'FAQ', link: '/#faqs' },
            ].map((text, index) => (<ListItem key={index} disablePadding>
            <ListItemButton  sx={{ paddingX: 2 }}>
              <Link className='w-full text-grey text-[0.9rem] font-semibold' href={text.link}style={{width:"100%" , padding:"12px 20px", background:"#F5F6FA" ,border:"1px solid #F5F6FA", borderRadius:"16px"}}>
               {text.title}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{NavbarIcon.burger}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default MobNav