import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

// import { ToggleForm, ToggleDM} from './components/Toggles/Toggles';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="xl">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2"><i class="fas fa-dove"></i> スズメ</Typography>
        {/* <img className={classes.image} src={import IMG from './IMG} alt="icon" height="60" /> */}
      </AppBar>
      <Grow in>
        <Container maxWidth="xl">
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={1}>
            <Grid item xs={12} sm={7} lg={5}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;