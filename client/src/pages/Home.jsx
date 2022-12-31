import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar'
import '../app.css';

const Home = () => {
  return (
    <div>
        <Typography variant='h4' style={{textAlign:'center'}}>Hello User</Typography>
        <div className='container' style={{display:'flex'}}>
            <Card sx={{ maxWidth: 345 }} style={{margin:'3px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} className='mycard'>
            <CardMedia
              sx={{ height: 340 }}
              image="https://png.pngtree.com/png-vector/20220217/ourmid/pngtree-boy-kid-jumping-rope-png-image_4396401.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                kid
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 345 }} style={{margin:'3px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} className='mycard'>
            <CardMedia
              sx={{ height: 340 }}
              image="https://png.pngtree.com/png-vector/20201224/ourmid/pngtree-hand-drawn-wind-tall-man-png-image_2618753.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Adult
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 345 }} style={{margin:'3px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} className='mycard'>
            <CardMedia
              sx={{ height: 340 }}
              image="https://png.pngtree.com/png-clipart/20220729/ourmid/pngtree-handsome-man-ir-soekarno-indonesian-hero-vector-illustration-png-image_6091679.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Senior Citizen
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
    </div>
  )
}

export default Home