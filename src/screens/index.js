import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProfileImage from '../assets/images/profile.jpg';
import { getTranslate, changeLanguage } from '../localization/index';
import { CssBaseline } from '@material-ui/core';
import HomeScreen from './homeScreen';
import AboutScreen from './aboutScreen';
import ContactScreen from './contactScreen';
import PortfoliosScreen from './portfoliosScreen';
import ResumeScreen from './resumeScreen';
import { lang } from '../localization/index';
import './index.css';
//import listItem from './listItem';

const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  bottomDrawer: {
    padding: 15,
    borderTop: '1px solid #2e344e',
  },
  listStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileImage: {
    maxWidth: '100%',
    height: 200,
    width: 200,
    borderRadius: 1000,
    border: '7px solid #2e344e',
    overflow: 'hidden',
    verticalAlign: 'middle',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    width: 50,
    height: 50,
    backgroundColor: theme.palette.primary.backgroundColor,
    margin: theme.spacing(2),
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    marginLeft: 0,
    borderRadius: 0,
    border: '1px solid #2e344e',
    position: 'fixed',
    top: 20,
  },
  // necessary for content to be below app bar
  topDrawer: {
    padding: 20,
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #2e344e',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#191d2b',
    height: '100vh',
    borderRight: '1px solid #2e344e',
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    position: 'relative',
  },
}));

function ResponsiveDrawer(props) {
  const translate = getTranslate();
  const { window } = props;
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div className={classes.topDrawer}>
        <img
          src={ProfileImage}
          alt={translate.name}
          className={classes.profileImage}
        />
      </div>
      <List className={classes.listStyle}>
        {/* <listItem
          onClick={() => {
            setPage(0);
            setMobileOpen(false);
          }}
          className={page === 0 ? null : 'listItem'}
          style={{
            backgroundColor: page === 0 ? '#037fff' : 'transparent',
            paddingLeft: 0,
            paddingRight: 0,
          }}
          className2='listItemText'
          style2={{ color: page === 0 ? '#fff' : '#a4acc4' }}
          children={translate.home}
        /> */}
        <ListItem
          onClick={() => {
            setPage(0);
            setMobileOpen(false);
          }}
          className={page === 0 ? null : 'listItem'}
          button
          style={{
            backgroundColor: page === 0 ? '#037fff' : 'transparent',
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <ListItemText disableTypography={true}>
            {
              <Typography
                className='listItemText'
                style={{ color: page === 0 ? '#fff' : '#a4acc4' }}
                variant='body2'
              >
                {translate.home}
              </Typography>
            }
          </ListItemText>
          <div className='overlay' />
        </ListItem>
        <ListItem
          onClick={() => {
            setPage(1);
            setMobileOpen(false);
          }}
          className={page === 1 ? null : 'listItem'}
          button
          style={{
            backgroundColor: page === 1 ? '#037fff' : 'transparent',
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <ListItemText disableTypography={true}>
            {
              <Typography
                className='listItemText'
                style={{ color: page === 1 ? '#fff' : '#a4acc4' }}
                variant='body2'
              >
                {translate.about}
              </Typography>
            }
          </ListItemText>
          <div className='overlay' />
        </ListItem>

        <ListItem
          onClick={() => {
            setPage(2);
            setMobileOpen(false);
          }}
          className={page === 2 ? null : 'listItem'}
          style={{
            backgroundColor: page === 2 ? '#037fff' : 'transparent',
            paddingLeft: 0,
            paddingRight: 0,
          }}
          button
        >
          <ListItemText disableTypography={true}>
            {
              <Typography
                className='listItemText'
                style={{ color: page === 2 ? '#fff' : '#a4acc4' }}
                variant='body2'
              >
                {translate.resume}
              </Typography>
            }
          </ListItemText>{' '}
          <div className='overlay' />
        </ListItem>

        <ListItem
          onClick={() => {
            setPage(3);
            setMobileOpen(false);
          }}
          className={page === 3 ? null : 'listItem'}
          style={{
            backgroundColor: page === 3 ? '#037fff' : 'transparent',
            paddingLeft: 0,
            paddingRight: 0,
          }}
          button
        >
          <ListItemText disableTypography={true}>
            {
              <Typography
                className='listItemText'
                style={{ color: page === 3 ? '#fff' : '#a4acc4' }}
                variant='body2'
              >
                {translate.portfolios}
              </Typography>
            }
          </ListItemText>{' '}
          <div className='overlay' />
        </ListItem>

        <ListItem
          onClick={() => {
            setPage(4);
            setMobileOpen(false);
          }}
          className={page === 4 ? null : 'listItem'}
          style={{
            backgroundColor: page === 4 ? '#037fff' : 'transparent',
            paddingLeft: 0,
            paddingRight: 0,

            width: '100%',
          }}
          button
        >
          <ListItemText disableTypography={true}>
            {
              <Typography
                className='listItemText'
                style={{ color: page === 4 ? '#fff' : '#a4acc4' }}
                variant='body2'
              >
                {translate.contact}
              </Typography>
            }
          </ListItemText>{' '}
          <div className='overlay' />
        </ListItem>
      </List>
      <dispatchEvent className={classes.bottomDrawer}>
        <Button
          color={lang === 'fa' ? 'primary' : 'secondary'}
          onClick={() => changeLanguage('fa')}
        >
          فارسی
        </Button>
        {'/'}
        <Button
          color={lang === 'en' ? 'primary' : 'secondary'}
          onClick={() => changeLanguage('en')}
        >
          English
        </Button>
      </dispatchEvent>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const getPage = () => {
    switch (page) {
      case 0:
        return <HomeScreen />;
      case 1:
        return <AboutScreen />;
      case 2:
        return <ResumeScreen />;
      case 3:
        return <PortfoliosScreen />;
      case 4:
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>

      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <span className='line1' />
        <span className='line2' />
        <span className='line3' />
        <span className='line4' />

        {getPage()}
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
