import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

import Color from '../../constants/colors'
import NavBar from '../../components/navBar'
import Footer from '../../components/footer'
import {addNewProduct} from '../../store/productsAction'


const useStyles = makeStyles( (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
      margin: "15px auto",
      backgroundColor: Color.primary,
    },
    root : {
        textAlign : 'center',
        margin : "auto",
        paddignTop : "80px",
        paddingBottom : "80px",
    },
    form: {
      margin: 20,
      textAlign : 'center',
    },
    margin : {
        display : 'block',
        width : "100%",
        marginTop: 10
    },
    formControl: {
        width: '100%'
    },
    card : {
        maxWidth : "600px",
        minWidth : "300px",
        margin : "auto",
        textAlign : "center",
        marginBottom : "30px",
        paddingTop : "20px",
        paddingBottom : "20px"
    },
    submit : {
        marginTop : "20px",
        marginBottom : "20px",
        background : Color.accent,
        color : "#FFF",
        '&:hover': {
            background : Color.accent,
        }
    },
    add : {
        textDecoration : "none",
        color : Color.secondary,
        width : "100%"
    },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      tags : {
        paddingTop : 50
      }
  })
  )

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: Color.primary
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: Color.primary
      },
      "& .MuiOutlinedInput-root": {
        "&:hover fieldset": {
          borderColor: Color.primary
        },
        "&.Mui-focused fieldset": {
          borderColor: Color.primary
        }
      }
    }
  })(TextField);

const AddPost = (props) => {

  const classes = useStyles()

    // Date
    const formatDate = date => {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return date.getDate() + "/" + (date.getMonth()+1) +  "/" + date.getFullYear() + " at " + strTime;
    }
    const insertDate = new Date();
    
    const date = formatDate(insertDate);
    const [content, setContent] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [image, setImage] = React.useState('')
    const [quantity, setQuantity] = React.useState('')
    

    const handleSubmit = React.useCallback(() => {
      addNewProduct(date,title, content,image,quantity)
      // console.log(quantity)
     
    },[date, title, content,image,quantity])

    return (
    <div>
    <NavBar />
    <Container maxWidth="lg" style={{paddingTop : "80px"}}>
    <CssBaseline/>
    <Card className={classes.card}>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
          <CssTextField
            variant="outlined"
            id="outlined"
            required
            fullWidth
            label="image"
            name="image"
            autoComplete="image"
            onChange={e => setImage(e.target.value)}
            value={image}
            />
        </FormControl>
        </Grid>  
         <Grid item xs={12}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
          <CssTextField
            variant="outlined"
            id="outlined"
            required
            fullWidth
            label="Title"
            name="title"
            autoComplete="title"
            onChange={e => setTitle(e.target.value)}
            value={title}
            />
        </FormControl>
        </Grid>  
         <Grid item xs={12}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
          <CssTextField
            style={{marginTop: 10}}
            variant="outlined"
            id="outlined-multiline-static"
            multiline
            rows="4"
            required
            fullWidth
            label="Content"
            name="content"
            autoComplete="content"
            onChange={e => setContent(e.target.value)}
            value={content}
            />
            <Grid item xs={12}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
            <CssTextField
              variant="outlined"
              id="outlined"
              required
              fullWidth
              label="quantity"
              name="quantity"
              autoComplete="quantity"
              onChange={e => setQuantity(e.target.value)}
              value={quantity}
              />
          </FormControl>
          </Grid>  
        </FormControl>
        </Grid>  
         <Grid item xs={12}>
        </Grid> 
        </Grid>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleSubmit}
          >
            <Link to="/Profile" className={classes.add} style={{color:"#FFF"}}>
              Add Post
              </Link>
          </Button>
      </CardContent>
      </Card> 
      </Container>
      <Footer />
     </div>
    )
}

export default AddPost



