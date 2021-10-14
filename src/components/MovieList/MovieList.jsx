import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// importing material-UI
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


function MovieList() {
    // setting up useDispatch, useHistory, redux store
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    // using useEffect to grab movies from DB
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // handle for for 'Add movie' button
    const handleButton = () => {
        // console.log('Clicked Add Movie button');
        // bring user to 'Add Movie' view
        history.push('/addMovie');
    }

    // handle for clicking on a movie, captures movie id and dispatches to rootSaga, 
    const handleImg = (id) => {
        // console.log('Clicked Image!!', id);
        dispatch({ type: 'GET_DETAILS', payload: id});
        // bring user to 'Movie Details' view
        history.push('/details')
    }

    // footer
    function Copyright() {
        return (
          <Typography variant="body2" color="textPrimary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              KarstensClassics.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
    
      // material ui theme
      const useStyles = makeStyles((theme) => ({
        heroContent: {
          backgroundColor: theme.palette.text.hint,
          padding: theme.spacing(2, 0, 4),

        },
        heroButtons: {
          marginTop: theme.spacing(4),
        },
        cardGrid: {
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8),
        },
        card: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
        },
        
        cardMedia: {
          paddingTop: '100%', // 16:9
        },
        cardContent: {
          flexGrow: 1,
        },
        footer: {
          backgroundColor: theme.palette.text.hint,
          padding: theme.spacing(6),
        },
      }));
      
    const classes = useStyles();

    // DOM render using .map and material ui
    return (

      <React.Fragment>
        <CssBaseline />
        <main>
          
          <div className={classes.heroContent}>
            <Container maxWidth="sm" >
              <Typography component="h1" variant="h2" align="center" color="#212121" gutterBottom>
                Karstens Classics
              </Typography>
              <Typography variant="h5" align="center" color="textPrimary" paragraph>
                Welcome!<br/>Kick back, relax, grab some popcorn.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary" onClick={handleButton}>
                        Add Movie
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>

          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {movies.map((movie) => (
                <Grid item key={movie} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={movie.poster}
                      title={movie.title}
                      onClick={() => handleImg(movie.id)}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {movie.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        
        <footer className={classes.footer}>
          <Typography variant="h5" align="center" gutterBottom>
            Cheers!
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Questions or Comments? kjepsen86@gmail.com
          </Typography>
          <Copyright />
        </footer>
       
      </React.Fragment>
    );
  }
  

export default MovieList;