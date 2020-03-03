import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Card, CardContent, CardMedia, CardActionArea, Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import IMG1 from './resources/photos/IMG1.jpg'

const styles = theme => ({
    card: {
        display: 'flex',
        height: '400px',
        width: '40%',
        marginBottom: '1rem'
    },
    content: {
        flex: '1 0 auto',
    },
    grid: {
        flexGrow: 1,
    }
});


class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.images = [
            require("./resources/photos/IMG1.jpg"),
            require("./resources/photos/IMG2.jpg"),
            require("./resources/photos/IMG3.jpg"),
            require("./resources/photos/IMG4.jpg"),
            require("./resources/photos/IMG5.jpg"),
            require("./resources/photos/IMG6.jpg"),
            require("./resources/photos/IMG7.jpg"),
            require("./resources/photos/IMG8.jpg"),
            require("./resources/photos/IMG9.jpg"),
            require("./resources/photos/IMG10.jpg"),
            require("./resources/photos/IMG11.jpg"),
            require("./resources/photos/IMG12.jpg"),
            require("./resources/photos/IMG13.jpg")
        ]
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.grid} spacing={2}>
                {this.images.map(image => {
                    /**
                     * 500px card height - 16px padding top and bottom
                     */
                    var height = '368px';
                    return (
                        <Grid item xs={12}>
                            <Card
                                className={classes.card}

                            >
                                <CardContent className={classes.content}>
                                    <CardMedia
                                        style={{ height: height }}
                                        image={image}
                                        title='Foto'
                                        onMouseOver={height = '100%'}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
}
Cards.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Cards)