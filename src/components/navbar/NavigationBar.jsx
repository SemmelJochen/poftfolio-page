import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, MenuList, MenuItem, Button, Fade, Drawer, ClickAwayListener } from '@material-ui/core';
import { BrowserRouter, Link } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles';

const styles = theme => ({
    menuBar: {
        position: "static",
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
        color: "#000000", //override appbar text color
        height: "80px"
    },
    root: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row-reverse"
    },
    title: {
        flexGrow: 1,
    },
    menuList: {
        display: 'flex'
    },
});

class NavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileView: props.mobile,
            right: false,
        }
    }
    handleClose = (nav) => {
        window.location.href = nav;
    }

    menuList() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Link to='/'>
                    <MenuItem style={{ color: "classes.palette.accent1Color" }} onClick={() => this.handleClose("/")}>
                        Home
                </MenuItem>
                </Link>
                <MenuItem component={Link} to='/collections' onClick={() => this.handleClose("/collections")}>
                    Collections
                </MenuItem>
                <MenuItem component={Link} to='/music' onClick={() => this.handleClose("/music")}>
                    Music
                </MenuItem>
                <MenuItem component={Link} to='/photography' onClick={() => this.handleClose("/photography")}>
                    Photography
                </MenuItem>
                <MenuItem component={Link} to='/about' onClick={() => this.handleClose("/about")}>
                    About Me
                </MenuItem>
            </BrowserRouter>
        )
    }

    toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({ right: open });
    }

    render() {
        const { classes } = this.props;
        if (this.props.mobile) {
            return (
                <div className={classes.root} >
                    <AppBar className={classes.menuBar} style={{ background: 'transparent', boxShadow: 'none' }}>
                        <Toolbar>
                            <Typography variant="h3" className={classes.title}>
                                Josua Kupski
                        </Typography>
                            <ClickAwayListener onClickAway={this.toggleDrawer(false)}>
                                <Button aria-controls="mobile-view-menu" aria-haspopup="true" onClick={this.toggleDrawer(true)}>
                                    <Typography variant="button"> Menu</Typography>
                                </Button>
                            </ClickAwayListener>
                        </Toolbar>
                    </AppBar>


                    <Drawer id="mobile-view-menu" anchor="right" open={this.state.right} >
                        <Fade>
                            {this.menuList()}
                        </Fade>
                    </Drawer>

                </div>
            );
        } else {
            return (
                //should change view when width < 850px (mobile view)
                <div className={classes.root}>
                    <AppBar className={classes.menuBar} style={{ background: 'transparent', boxShadow: 'none' }}>
                        <Toolbar>
                            <Typography variant="h3" className={classes.title}>
                                Josua Kupski
                        </Typography>
                            <MenuList className={classes.menuList}>
                                {this.menuList()}
                            </MenuList>
                        </Toolbar>
                    </AppBar>
                </div>
            )
        }
    }
}

NavigationBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withTheme(withStyles(styles)(NavigationBar));