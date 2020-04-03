import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Typography } from '@material-ui/core'
export default function Websites() {
    return (
        <div style={{ height: 'calc(100vh-42px', paddingTop: "80px", }}>
            <Typography>
                Test
        </Typography>
            <ScrollAnimation
                delay={1000}
                offset={1000}
                animateIn='bounceInLeft'
                children={<Content />}
            />
        </div>
    )
}

function Content() {
    return (
        <h1>
            scrollableParentSelector
        </h1>
    )
}
