import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    makeStyles,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';

const data = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/contact', label: 'Contact' },
]

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#060b26'
    },
    drawerPaper:{
        width:'250px'
    }
}))

const Navbar = () => {
    const classes = useStyles()

    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <AppBar position="sticky" className={classes.navbar}>
                <Toolbar>
                    <div className="container flex items-center">
                        <div>Mytecnic</div>

                        <div className="flex flex-1 justify-end">
                            <Hidden smDown>
                                <List>
                                    <li className=" flex gap-6">
                                        {data.map((item, i) => (
                                            <Button component={NavLink} to={item.link} key={i} color="inherit">
                                                {item.label}
                                            </Button>
                                        ))}
                                    </li>
                                </List>
                            </Hidden>
                        </div>

                        <div>
                            <Hidden mdUp>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                        </div>
                    </div>

                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={'left'}
                        open={click}
                        onClose={handleClick}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <List>
                            <li className=" flex flex-col gap-6">
                                {data.map((item, i) => (
                                    <Button component={NavLink} to={item.link} key={i} color="inherit" onClick={handleClick}>
                                        {item.label}
                                    </Button>
                                ))}
                            </li>
                        </List>
                    </Drawer>
                </Hidden>
            </nav>
        </>
    )
}

export default Navbar
