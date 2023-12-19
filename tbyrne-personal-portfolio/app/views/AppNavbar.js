import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '../components/Typography';

import '../globals.css'

const logo = {
  color: 'var(--font-color-secondary)',
  fontSize: 20,
  fontFamily: 'EB Garamond',
  textDecoration:'none'
};

const rightLink = {
  fontSize: 16,
  fontFamily: 'EB Garamond',
  color: 'var(--font-color-secondary)',
  ml: {md: 4, lg: 8},
  lineHeight:'38px',
  fontWeight:500,
  display:{xs: 'none', md: 'block'},
  '&:hover': {
    opacity:0.6,
    color: 'var(--font-color-primary)',
  }
};

const contactMe = {
  borderRadius: '20px',
  background: 'var(--font-color-secondary)',
  fontWeight:600,
  color: 'var(--font-color-primary)',
  padding: '6px 24px',
  lineHeight:'25px',
  '&:hover': {
    opacity:0.5,
  }
};

  
function AppNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const onMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const onMenuClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }}>
            <Typography
                variant="h5"                
                data-tag="logo"
                sx={{...logo}}
                aria-label="Tom Byrne Portfolio"
            >
                {'Tom Byrne Portfolio'}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }} role="menu" aria-label="Navigation Menu">
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/"
              sx={rightLink}
              /*role="menuitem" */
              aria-label="Home"
            >
              {'Home'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/#projects"
              sx={rightLink}
              role="menuitem"
              aria-label="Projects"
            >
              {'Projects'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/about-me"
              sx={rightLink}
              role="menuitem"
              aria-label="About Me"
            >
              {'About Me'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/about-me/#contact-me"
              sx={{ ...rightLink, ...contactMe }}
              role="menuitem"
              aria-label="Contact Me"
            >
              {'Contact Me'}
            </Link>

            <MenuIcon sx={{fontSize:'38px', cursor: 'pointer', display: {md:'none'} }}
              id="menu-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={onMenuClick}
              aria-label="Menu Icon"
            />

            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={onMenuClose}
              MenuListProps={{ 'aria-labelledby': 'menu-button', }}
              sx={{ width:400}}
            >
              <MenuItem onClick={onMenuClose} aria-label="Home">
                <Link underline="none" href="/">{'Home'}</Link>
              </MenuItem>
              <MenuItem onClick={onMenuClose} aria-label="Projects">
                <Link underline="none" href="/#projects">{'Projects'}</Link>
              </MenuItem>
              <MenuItem onClick={onMenuClose} aria-label="About Me">
                <Link underline="none" href="/about-me">{'About Me'}</Link>
              </MenuItem>
              <MenuItem onClick={onMenuClose} aria-label="Contact Me">
                  <Link underline="none" href="/about-me/#contact-me">{'Contact Me'}</Link>
              </MenuItem>
            </Menu>

          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppNavbar;
