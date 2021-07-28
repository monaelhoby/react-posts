import React from 'react';
// import {Link} from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import clsx from "clsx";

import Colors from '../constants/colors'
import {handleEditProduct} from '../store/productsAction'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop : "15px",
    fontWeight : 'bold',
    height : "60px"
  },
  quantity:{
    marginTop : "15px",
    fontWeight : 'bold',
    height : "60px",
    fontSize: 12,
    marginRight: 16
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
  },
  image:{
    width: "100%"
  },
  edit : {
    color : Colors.accent,
    // background : Colors.accent,
    display: "inline-block",
    padding: "4px 6px",
    borderRadius : "5px",
    fontSize: 10
  },
  hide: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
});

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: Colors.primary
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: Colors.primary
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: Colors.primary
      },
      "&.Mui-focused fieldset": {
        borderColor: Colors.primary
      }
    }
  }
})(TextField);

const PostItem = props => {
  const classes = useStyles();
  
  const [quantity, setQuantity] = React.useState('')
  const [show, setShow] = React.useState(false)

  const hideSavebtn = () => setShow(false)

  const updateQuantity = (e) => setQuantity(quantity)

  return (
    <Card className={classes.root} {...props}>
      <CardContent>
        <img src={props.url} className={classes.image} alt="..."/>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.title}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.content}
        </Typography>
        <div style={{display: "flex"}}> 
        <Typography className={classes.quantity} color="textSecondary" gutterBottom>
        Quantity:  <span style={{opacity: !show ? 1 : 0}}>{quantity ? quantity : props.quantity}</span>
        </Typography>
         
          <FormControl className={clsx(classes.margin, classes.textField)} style={{opacity: show ? 1 : 0, width: '30%'}}>
          <CssTextField
            variant="outlined"
            id="outlined"
            // required
            fullWidth
            label={props.quantity}
            name="quantity"
            autoComplete="quantity"
            onChange={e => setQuantity(e.target.value)}
            value={quantity}
            />
            </FormControl>
            <Link  className={classes.edit} onClick={() => setShow(true)}>
                <span className="material-icons" style={{opacity: !show ? 1 : 0,fontSize: 15,marginTop: 15}}> edit</span>
                <span className="material-icons" style={{opacity: show ? 1 : 0,fontSize: 15,marginTop: 0}} onClick={() => handleEditProduct(props.id,props.date,props.title,props.content,props.url,quantity,hideSavebtn)}> save</span></Link>
        </div>
        
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