import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SpotifyIcon from '../../resources/icons/SpotifyIcon';
import SoundCloudIcon from '../../resources/icons/SoundcloudIcon.jsx'
import SpotifyTab from './SpotifyTab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        height: "40px"
    },
    tabBar:  {

    }
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar elevation={0} className={classes.tabBar} position="static" color="inherit">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    elevation={0}
                >
                    <Tab icon={<SpotifyIcon/>} label="Spotify" {...a11yProps(0)} />
                    <Tab icon={<SoundCloudIcon/>} label="Soundcloud" {...a11yProps(1)} />
                    <Tab label="YouTube" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <SpotifyTab/>
        </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Soundcloud
        </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    YouTube
        </TabPanel>
            </SwipeableViews>
        </div >
    );
}
