import React, { Component, Fragment } from 'react'
import albums from './resources/jsonFiles/albums.json'
import { Card, CardContent, Typography, CardMedia, Link, Tooltip, Zoom, Dialog } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    cover: {
        width: "320px",
        height: "320px"
    },
    flexContainer: {
        display: "flex",
        flex: "0 1 auto",
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "flex-start",
    },
    card: {
        width: "320px",
        height: "460px",
        margin: "15px"
    }
});
class Music extends Component {
    constructor(props) {
        super(props)

        this.state = {
            elements: undefined,
        };
        console.log(albums.items)
    }
    handleClick = () => {
        //alert("click")
    }
    render() {
        const albumItems = albums.items;
        const { classes } = this.props;
        return (
            <div className={classes.flexContainer}>
                {albumItems.map((album) => (
                    <Fragment key={album.id}>
                        <Link onClick={() => this.handleClick()} underline="none">
                            <Tooltip enterDelay={500} transitionCompontnet={Zoom} title={"Listen to " + album.name} arrow>
                                <Card raised className={classes.card} >
                                    <CardMedia
                                        className={classes.cover}
                                        image={album.images[0].url}
                                    />
                                    <CardContent>
                                        <Typography>
                                            {album.name}
                                        </Typography>
                                        <Typography>
                                            {/*album.artists.map(artist => artist.name).join(', ')*/}
                                            {album.artists[0].name}
                                        </Typography>
                                        {/*TODO Player mit uri zum "test" hören*/}
                                    </CardContent>
                                </Card>
                            </Tooltip>
                        </Link>
                    </Fragment>
                ))}
            </div>
        )
    }
}
Music.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Music);
