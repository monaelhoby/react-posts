import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Colors from '../constants/colors'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop : "15px",
    fontWeight : 'bold',
    height : "60px"
  },
  pos: {
    fontSize : "14px",
    height : "50px"
  },
  date : {
    fontSize : 12,
    fontStyle : 'italic',
    color : Colors.secondary
},
link : {
    textDecoration : "none",
    color : "#222"
}
});

const PostItem = props => {
  const classes = useStyles();
  
  // const brief = props.content

  return (
    <Card className={classes.root} {...props}>
      <CardContent>
        {props.url ?  <img src={props.url} height="250px" width="100%" alt="..."/> : ''}
        {props.video ? (
                      <>
                        <video width="90%" height="200px" controls>
                        <source src={props.video} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video> 
                      </> 
                    ) : ''
        }
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.content}
        </Typography>
        <Typography variant="body2" component="p" style={{marginTop : "20px"}}>
          Created at
          <span className={classes.date}> {props.date}</span>
        </Typography>
        {props.children}
      </CardContent>
    </Card>
  );
}

export default PostItem