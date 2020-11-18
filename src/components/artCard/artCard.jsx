import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './artCard.styles.scss'
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

function ArtCard({data}) {
  const classes = useStyles();
  let history = useHistory();

  const redirect = () => {
    setTimeout(1000)
    history.push(`/art/${data._id}`)
  }

  return (
    <div className='ArtCard'> 
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = {data.image}
          title = {data.title}
          onClick = {redirect}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body3" color="textSecondary" component="h3">
          Worth: {data.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          By: {data.artist  }
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>
  );
}

export default ArtCard
