import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
   return (
    <Card sx={{ maxWidth: 345, mx:'auto', mt:{xs:4, md:0}, mb:{xs:0, md:6}, borderRadius:'15px' }}>
      <CardMedia
        sx={{ height: 146 }}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{mb:2}}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:'left'}}>
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
