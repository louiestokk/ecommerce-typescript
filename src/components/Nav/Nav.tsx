import React from "react";
import { useStyles } from "./styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { BarChart } from "@material-ui/icons";
const Nav: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.nav}>
        <Typography variant="h5">Ecommerce</Typography>
        <BarChart className={classes.icon} />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
