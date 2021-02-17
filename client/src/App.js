import React, { useState, useEffect } from 'react';
import { Container, AppBar, Toolbar, IconButton, Button, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import './index.css';
import events from './images/Morphie.JPG';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="xl">
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar>
              <img className={classes.image} src={events} alt="icon" height="50" /><span style={{fontSize: '1em', marginLeft: '-1em'}}>Morpheus</span>
              <Typography className={classes.heading} variant="h4" align="center"> <span style={{marginLeft: '6.7em'}}>Class Bulletin Board</span></Typography>
        </Toolbar>
      </AppBar>
      <Grow in>
        <Container maxWidth="xl">
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4} xl={2}>
              <Form className={classes.form} currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={8} spacing={3}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
