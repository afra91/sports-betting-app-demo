import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
            <Typography variant="body2" color="textSecondary" component="p">
            {
            "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
            </Typography>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
}
