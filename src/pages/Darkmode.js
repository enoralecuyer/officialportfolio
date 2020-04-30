import React, { useState } from 'react';
import { Switch, Grid, Typography, Button, Paper, ThemeProvider, createMuiTheme } from "@material-ui/core";

function Darkmode() {

    const [darkMode, setDarkMode] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ height:"100vh" }}>
                <Grid container direction="column">
                    <Typography variant="h1">This is my app</Typography>
                    <Button variant="contained" color="primary">
                        This is a button
                    </Button>
                    <Button variant="contained" color="secondary">
                        This is a button
                    </Button>
                    <Switch checked={darkMode} onChange={ () => setDarkMode(!darkMode)}/>
                </Grid>
            </Paper>
        </ThemeProvider>
     );
}

export default Darkmode;