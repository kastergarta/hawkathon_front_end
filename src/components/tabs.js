import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Everyone is welcome!" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Quantity is fun, quality is key! " href="/trash" {...a11yProps(1)} />
          <LinkTab label="Short-term actions, long-term impact!" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="tabs-container">
          <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
          <div className="bottom-left">Hawkathon participants have represented 151 countries and thousands of unique skill sets. Our program welcomes everyone already in the open source software community – and anyone interested in diving in. </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <div className="tabs-container">
            <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
            <div className="bottom-left"> Participating in Hawkathon leads to personal growth, professional opportunities, and community building. And it all begins with meaningful contributions to open source technology. </div>
          </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="tabs-container">
        <img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" />
        <div className="bottom-left"> In the open source community, we stand on the shoulders of those who came before us. Your participation has a lasting effect on people and technology long after Hawkathon comes to an end. This is a voyage, not a race. </div>
      </div>
      </TabPanel>
    </div>
  );
}
