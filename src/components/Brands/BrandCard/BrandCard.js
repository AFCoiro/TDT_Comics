//importa de React/react-router-dom
import * as React from 'react';
import { Link } from 'react-router-dom';

//importa de MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container,Grid } from '@mui/material';

const BrandCard=()=> {
  //array cimple para redirigir cada card del home que corresponde a cada categoria de comics.
  const comics = ['Avengers', 'Spiderman','X-Men', 'Justice League','Batman','Flash','Slam Dunk','Demon Slayer'];
  return (
          <>
            <Container sx={{display:'flex'}} className='BrandClass'  > 
                  {comics.map((comic) => (
                      <Card className='BrandCardClass'
                          key={comic}
                          >
                          <Grid item md={3}>
                            <Link to={`/products/category/${comic}`}>
                              <CardActionArea className='contImgText'>
                                  <CardMedia
                                    className='cardImg'
                                    component="img"
                                    height="90"
                                    image={`/cat/${comic}.png`}
                                    alt={comic}
                                  />
                                  <CardContent>
                                  <Typography
                                  className='cardText'
                                  
                                   gutterBottom 
                                   variant="h5"
                                    component="div">
                                  {comic}
                                    </Typography>
                                </CardContent>
                              </CardActionArea>
                              </Link>
                          </Grid>
                      </Card>  
                    ))}
            </Container>
          </>
      );
    }

export default BrandCard;

