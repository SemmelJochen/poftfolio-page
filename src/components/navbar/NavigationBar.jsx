import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, MenuList, Button, Fade, Drawer, ClickAwayListener } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles';
import JKLogo from '../../resources/photos/logo/JKlogo.png';
const styles = theme => ({
    menuBar: {
        position: "fixed",
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
        color: "#000000", //override appbar text color
        height: "80px",
        display: "flex",
        flexDirection: "row",
    },
    button: {
        textTransform: "none",
        fontSize: "medium"
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
        alignItems: 'flex-end',
        marginLeft: theme.spacing(2),
    },
    logo: {
        alignItems: 'flex-start',
        marginRight: theme.spacing(2),
    },
});

class NavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileView: props.mobile,
            right: false,
            isFlushed: false,
        }
    }
    handleClose = () => {
        window.location.reload();
    }

    menuList() {
        const { classes } = this.props;
        return (
            <div>
                <Button className={classes.button} component={Link} to='/'>
                    Home
                </Button>
                <Button className={classes.button} component={Link} to='/websites'>
                    Websites
                </Button>
                <Button className={classes.button} component={Link} to='/music'>
                    Music
                </Button>
                <Button className={classes.button} component={Link} to='/photography'>
                    Photography
                </Button>
                <Button className={classes.button} component={Link} to='/about'>
                    About Me
                </Button>
            </div>
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
                            <img
                                className={classes.logo}
                                src={JKLogo}
                                alt="logo"
                                width="120px" height="auto"
                            />
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
                            <img
                                className={classes.logo}
                                src={JKLogo}
                                alt="logo"
                                width="120px" height="auto"
                            />
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