import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const BrandCard=()=> {
  const comics = ['Avengers', 'Spiderman','X-Men', 'Justice League','Batman','Flash','Slam Dunk','Demon Slayer'];
  return (
          <>
            <Container sx={{display:'flex', marginTop:5}}>
                  {comics.map((comic) => (
                      <Card key={comic}
                      sx={{ maxWidth: 400 , marginLeft:5}}>
                        <Link to={`/products/category/${comic}`}>
                            <CardActionArea sx={{display:'flex'}}>
                                <CardMedia
                                  component="img"
                                  height="100"
                                  image={`/cat/${comic}.png`}
                                  alt={comic}
                                />
                                <CardContent>
                                 <Typography gutterBottom variant="h5" component="div">
                                 {comic}
                                  </Typography>
                              </CardContent>
                            </CardActionArea>
                            </Link>
                      </Card>  
                    ))}
            </Container>
          </>
      );
    }

export default BrandCard;

