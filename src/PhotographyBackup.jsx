import React, { Component, useCallback } from 'react'
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useTheme, Drawer, Paper, withStyles } from '@material-ui/core';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
    }
});

class Photography extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            viewerIsOpen: false,
            open: false,
        }
        this.photos = [
            {
                src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
                width: 4,
                height: 3
            },
            {
                src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
                width: 1,
                height: 1
            },
            {
                src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
                width: 3,
                height: 4
            },
            {
                src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
                width: 3,
                height: 4
            },
            {
                src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
                width: 3,
                height: 4
            },
            {
                src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
                width: 4,
                height: 3
            },
            {
                src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
                width: 3,
                height: 4
            },
            {
                src: "https://source.unsplash.com/PpOHJezOalU/800x599",
                width: 4,
                height: 3
            },
            {
                src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
                width: 4,
                height: 3
            }
        ];
    }
    handleDrawerOpen = () => {
        this.setState({ open: true });
    }

    handleDrawerClose = () => {
        this.setState({ open: false });
    }

    logout = () => {
        console.log("logout");
    }

    openLightbox = useCallback((event, { photo, index }) => {
        this.setState({
            viewerIsOpen: true,
            currentImage: index
        });
    }, []);

    closeLightbox = () => {
        this.setState({
            viewerIsOpen: false,
            currentImage: 0
        });
    };
    render() {
        const { classes } = this.props;
        const theme = useTheme();
        const { photos } = this.photos;
        return (
            <div>
                <div className={classes.root}>
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={this.state.open}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={() => this.handleDrawerClose()}>
                                {theme.direction === "ltr" ? (
                                    <ChevronLeftIcon />
                                ) : (
                                        <ChevronRightIcon />
                                    )}
                            </IconButton>
                        </div>
                        <Divider />
                    </Drawer>
                </div>

                <Paper className={classes.paper}>
                    <Gallery photos={this.photos} onClick={() => this.openLightbox()} />
                    <ModalGateway>
                        {this.state.viewerIsOpen ? (
                            <Modal onClose={() => this.closeLightbox()}>
                                <Carousel
                                    currentIndex={this.state.currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Photography);