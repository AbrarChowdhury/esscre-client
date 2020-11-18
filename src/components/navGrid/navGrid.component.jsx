import React from 'react'
import Grid from '@material-ui/core/Grid';
import './NavGrid.styles.scss'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 350,
    },
  });

function NavGrid() {
    return (
        <div className='NavGrid'>
        <Grid container  direction="row" justify="center" spacing={6}>
            <Grid item xs={12} md={4}>
                <GridItem 
                    image='https://images.unsplash.com/photo-1485518994577-6cd6324ade8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1244&q=80'
                    title='Buy Art'
                    route='/art'
                    note="Buy art from living artists. The dead ones don't need the money"
                />
                </Grid>
            <Grid item xs={12} md={4}>
                <GridItem 
                    image='https://www.godaddy.com/garage/wp-content/uploads/sell-art-online-min.jpg'
                    route='/sell'
                    title='Sell Art'
                    note="Buy art from living artists. The dead ones don't need the money"
                />
            </Grid>
            <Grid item xs={12} md={4}>
            <GridItem 
                    image='https://cdn.shopify.com/s/files/1/0070/7032/files/sell-art-online-hero.jpg?v=1485894205'
                    route='/custom'
                    title='Custom Art'
                    note="Buy art from living artists. The dead ones don't need the money"
            />
            </Grid>
        </Grid>
    
        </div>
    )
}
function GridItem(props){
    const classes = useStyles();
    return(
        <Link to={props.route}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.image}
                title={props.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.note}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
    )
}

export default NavGrid
