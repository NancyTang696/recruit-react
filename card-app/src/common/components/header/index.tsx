import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const headerTheme = createMuiTheme({
    palette: {
        secondary: {
            main: "#C8C8C8",
            contrastText: "#6a0dad "
        },
        text: {
            secondary: "#626262"
        }
    }
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            color: theme.palette.text.secondary
        },
    }),
);

export type HeaderProps = {
    title: string,
    children: JSX.Element | JSX.Element[]
}

export const Header = (props: HeaderProps): JSX.Element => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={headerTheme}>
            <AppBar position="static" color={"secondary"}>
                <Toolbar>
                    {props.children}
                    <Typography variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export const MenuIconButton = (): JSX.Element => {
    return (
        <Link to="/menu">
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon fontSize="large" style={{ fill: "grey" }}>
                </MenuIcon>
            </IconButton>
        </Link>
    )
}

export const ArrowBackIconButton = (): JSX.Element => {

    return (
        <Link to="/">
            <IconButton edge="start" color="inherit" aria-label="menu">
                <ArrowBackIcon fontSize="large" style={{ fill: "grey" }} />
            </IconButton>
        </Link>
    )
}