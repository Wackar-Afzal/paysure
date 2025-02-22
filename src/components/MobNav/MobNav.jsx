'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { icons, NavbarIcon } from '../../assets/icons';
import Link from 'next/link';
import { ArrowDropDown } from '@mui/icons-material';

const MobNav = () => {
  const [state, setState] = React.useState({ left: false });
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ left: open });
    if (!open) setIsServicesOpen(false); // Close services dropdown when closing navbar
  };

  const closeDrawer = () => {
    setState({ left: false });
    setIsServicesOpen(false);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>{NavbarIcon.burger}</Button>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <div className="w-full flex items-center h-[40px] pr-[20px] justify-end">
            <button onClick={closeDrawer}>{icons.cross}</button>
          </div>

          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={closeDrawer}>
                <Link className="w-full text-grey text-[0.9rem] font-semibold" href="/">
                  Home
                </Link>
              </ListItemButton>
            </ListItem>

            {/* Services Dropdown */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setIsServicesOpen(!isServicesOpen)}>
                <span className="text-grey text-[0.9rem] font-semibold flex items-center justify-between w-full ">
                  Services <ArrowDropDown />
                </span>
              </ListItemButton>
            </ListItem>

            {isServicesOpen && (
              <Box sx={{ pl: 3 }}>
                {[
                  { title: 'Medical Billing Services', link: '/services/medical-billing-services' },
                  { title: 'Medical Coding Service', link: '/services/medical-coding-service' },
                  { title: 'Medical Credentialing Service', link: '/services/medical-credentialing-service' },
                  { title: 'RCM', link: '/services/rcm' },
                  { title: 'Healthcare SEO', link: '/services/healthcare-seo' }
                ].map((service, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton onClick={closeDrawer}>
                      <Link className="w-full text-grey text-[0.9rem] font-semibold" href={service.link}>
                        {service.title}
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
              </Box>
            )}

            <ListItem disablePadding>
              <ListItemButton onClick={closeDrawer}>
                <Link className="w-full text-grey text-[0.9rem] font-semibold" href="/about">
                  About
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={closeDrawer}>
                <Link className="w-full text-grey text-[0.9rem] font-semibold" href="/#contact">
                  Contact
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={closeDrawer}>
                <Link className="w-full text-grey text-[0.9rem] font-semibold" href="/#faqs">
                  FAQ
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default MobNav;
