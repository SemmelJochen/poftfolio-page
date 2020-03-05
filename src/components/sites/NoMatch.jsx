import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    div: {
        display: "flex",
        height: `calc(100vh - 80px)`,
        //direction: ltr;
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    }
})
export default function NoMatch(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.div}>
            <Typography variant="h5">
                This url is not valid
            </Typography>
        </div>
    )
}