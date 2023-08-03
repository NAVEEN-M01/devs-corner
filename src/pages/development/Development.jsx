import React from 'react'
import './Development.css'
import Navbar2 from '../navbar2/Navbar2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Development = () => {
  return (
    <div>
      <div className="developmet-index-container">
        <Navbar2/>
        <div className="development-main-content">
          <div className="development-text-content">
            <p className="text-title">Development</p>
            <p className="title-text">This is junction where u choose u r path.. Do it wisely..</p>
          </div>
          <div className="development-content">
            <div className="row1">
              <Card sx={{ maxWidth: 345 , marginLeft:8, width:300}}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                      Web Development
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 345, marginLeft:8, width:300 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                      App Development
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 345, marginLeft:8, width:300 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                      Cloud Computing
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            <div className="row2">
            <Card sx={{ maxWidth: 345, marginLeft:8, width:300 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                      Blockchain
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 345, marginLeft:8, width:300 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                      Artificial Intelligence
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 345, marginLeft:8, width:300 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                      Data Science
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Development