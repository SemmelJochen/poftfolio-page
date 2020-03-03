import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import { Typography, Card, CardMedia, Grid } from '@material-ui/core';
import OtherImage from './resources/photos/IMG10.jpg';
import { ParallaxBanner, withController } from 'react-scroll-parallax'

const styles = theme => ({
    media: {
        height: "200px",
        paddingTop: '56.25%', // 16:9
    },
    fillPanel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000000",//theme.palette.primary1Color,
        height: "100vh"
    },
})
class Home extends Component {

    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    }

    render() {

        const { classes } = this.props;
        return (
            <div style={{
                flex: 1,
                height: 'calc(100vh - 80px)',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
            }}>



                <ParallaxBanner
                    onLoad={() => this.handleLoad()}
                    layers={[
                        {
                            image: require("./resources/photos/IMG1-2.jpg"),
                            amount: 0.2,
                            
                        },

                        {
                            children: (<div style={{
                                marginTop: "15%",
                                marginLeft: "15%",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "80%",
                                
                            }}>
                                <Typography variant="h1">Welcome</Typography>
                                <Typography variant="h4">This is my portfolio Webpage</Typography>
                            </div>),
                            amount: 0.6,
                            expanded: false,
                        },
                    ]}
                    style={{
                        height: 'inherit',
                    }}
                    expanded={false}
                />
                
                {/*<div className={classes.fillPanel}></div>*/}
                <div style={{
                    height: "100vh",
                    width: "auto",
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: "flex"
                }}>
                    <Grid container style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        marginTop: "30px"
                    }}>
                        <Grid item style={{
                            flex: 1,
                            width: "50%",
                            marginRight: "15px",
                            marginLeft: "30px"
                        }} >
                            <Typography>
                                You can work and carry-on and put lots of little happy things in here. We might as well make some Almighty mountains today as well, what the heck. Don't fiddle with it all day. Nature is so fantastic, enjoy it. Let it make you happy. Now let's put some happy little clouds in here.
                                You gotta think like a tree. Just go back and put one little more happy tree in there. The only prerequisite is that it makes you happy. If it makes you happy then it's good. All you have to learn here is how to have fun. You don't have to spend all your time thinking about what you're doing, you just let it happen. If there's two big trees invariably sooner or later there's gonna be a little tree.
                                How to paint. That's easy. What to paint. That's much harder. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. You can do anything your heart can imagine. All those little son of a guns. Let your imagination just wonder around when you're doing these things.
                                There isn't a rule. You just practice and find out which way works best for you. All kinds of happy little splashes. What the devil. Those great big fluffy clouds. Just use the old one inch brush. We'll play with clouds today.
                                This is a happy place, little squirrels live here and play. Let's do it again then, what the heck. Nice little clouds playing around in the sky. Just let go - and fall like a little waterfall.
                                Everybody's different. Trees are different. Let them all be individuals. The little tiny Tim easels will let you down. Let's have a little bit of fun today. Just take out whatever you don't want. It'll change your entire perspective. I thought today we would make a happy little stream that's just running through the woods here.
                                Everything's not great in life, but we can still find beauty in it. Very easy to work these to death. Anytime you learn something your time and energy are not wasted. La- da- da- da- dah. Just be happy. No worries. No cares. Just float and wait for the wind to blow you around.
                            </Typography>
                        </Grid>
                        <Grid item style={{
                            flex: 1,
                            width: "50%",
                            marginLeft: "15px",
                            marginRight: "30px"
                        }}>
                            <Card>
                                <CardMedia className={classes.media} image={OtherImage} />
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
    parallaxController: PropTypes.object,
};
export default withController(withStyles(styles)(Home));