import React from 'react';
import { Container } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PrimaryAppBar from './components/PrimaryAppBar';
import EventCard from './components/EventCard';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  }),
);

function App() {
  const classes = useStyles();
  return (
      <React.Fragment>
        <PrimaryAppBar />
        <Container className={classes.container} fixed>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </Container>
      </React.Fragment>
  );
}

export default App;
