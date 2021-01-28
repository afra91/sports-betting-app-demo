import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 345,
      },
      flexShrink: 0,
      alignSelf: 'flex-start',
      margin: theme.spacing(2),
    },
    buttonContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    button: {
      marginBottom: theme.spacing(1),
    }
  }),
);

interface EventCardProps {
  loading?: boolean;
}

export default function EventCard(props: EventCardProps) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          loading ? (
            <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6 }} />
          ) : (
            'Real Madrid vs Barcelona'
          )
        }
      />
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} width="100%" />
            <Skeleton animation="wave" height={10} width="100%" />
            <Skeleton animation="wave" height={10} width="100%" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography variant="h6" color="textSecondary" component="h2">
            {
            "To win"
            }
            </Typography>
            <div className={classes.buttonContainer}>
              <Button className={classes.button} variant="contained">Default</Button>
              <Button className={classes.button} variant="contained">Default</Button>
              <Button className={classes.button} variant="contained">Default</Button>
              <Button className={classes.button} variant="contained">Default</Button>
              <Button className={classes.button} variant="contained">Default</Button>
            </div>
            <Typography variant="h6" color="textSecondary" component="h2">
            {
            "To win"
            }
            </Typography>
            <div className={classes.buttonContainer}>
              <Button className={classes.button} variant="contained">Default</Button>
              <Button className={classes.button} variant="contained">Default</Button>
              <Button className={classes.button} variant="contained">Default</Button>
              <Button className={classes.button} variant="contained">Default</Button>
              <Button className={classes.button} variant="contained">Default</Button>
            </div>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
}
