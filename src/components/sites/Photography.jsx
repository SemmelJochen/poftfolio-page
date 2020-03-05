import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";   
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IMG1 from '../../resources/photos/IMG1.jpg'
import IMG2 from '../../resources/photos/IMG2.jpg'
import IMG3 from '../../resources/photos/IMG3.jpg'
import IMG4 from '../../resources/photos/IMG4.jpg'
import IMG5 from '../../resources/photos/IMG5.jpg'
import IMG6 from '../../resources/photos/IMG6.jpg'
import IMG7 from '../../resources/photos/IMG7.jpg'
import IMG8 from '../../resources/photos/IMG8.jpg'
import IMG9 from '../../resources/photos/IMG9.jpg'
import IMG10 from '../../resources/photos/IMG10.jpg'
import IMG11 from '../../resources/photos/IMG11.jpg'
import IMG12 from '../../resources/photos/IMG12.jpg'
import IMG13 from '../../resources/photos/IMG13.jpg'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        //zIndex: 2
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: "none"
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
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
    }
}));
const photos = [
    {
        src: IMG1,
        width: 6000,
        height: 4000
    },
    {
        src: IMG2,
        width: 6000,
        height: 4000
    },
    {
        src: IMG3,
        width: 6000,
        height: 4000
    },
    {
        src: IMG4,
        width: 6000,
        height: 4000
    },
    {
        src: IMG5,
        width: 6000,
        height: 4000
    },
    {
        src: IMG6,
        width: 6000,
        height: 4000
    },
    {
        src: IMG7,
        width: 6000,
        height: 4000
    },
    {
        src: IMG8,
        width: 6000,
        height: 4000
    },
    {
        src: IMG9,
        width: 6000,
        height: 4000
    },
    {
        src: IMG10,
        width: 6000,
        height: 4000
    },
    {
        src: IMG11,
        width: 6000,
        height: 4000
    },
    {
        src: IMG12,
        width: 6000,
        height: 4000
    },
    {
        src: IMG13,
        width: 6000,
        height: 4000
    },
    
];

function Photography() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();
    const theme = useTheme();

    function handleDrawerClose() {
        setOpen(false);
    }

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
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
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
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
    );
}
export default Photography;
