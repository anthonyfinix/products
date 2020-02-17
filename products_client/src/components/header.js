import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header() {
    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" gutterBottom>
                        PC Builder
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Header;