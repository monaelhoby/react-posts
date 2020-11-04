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
import {useSelector, useDispatch} from 'react-redux'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Color from '../../constants/colors'
import NavBar from '../../components/navBar'
import Footer from '../../components/footer'
import Videos from '../../components/uploadVideo'
import * as postAction from '../../store/actions/index'



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
        width : "100%"
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
  
  let selectedPostId = props.location.pathname.slice(10)
    

  const editPost = useSelector(state => state.Posts.userPosts.find(post => post.id === selectedPostId))

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
    const [selectedFile, setSelectedFile] = React.useState(null)
    const [content, setContent] = React.useState(editPost ? editPost.content : '')
    const [image, setImage] = React.useState(editPost ? editPost.image : '' )
    const [video, setVideo] = React.useState(editPost ? editPost.video : '' )
    const [category, setCategory] = React.useState(''); 
    
    const [tag, setTag] = React.useState({
      checkedA: false,
      checkedB: false,
      checkedF: false,
    });
  
    const handleChangecheckBox = (event) => {
      setTag({ ...tag, [event.target.name]: event.target.checked });
    };

    const handleChange = (event) => {
      setCategory(event.target.value);
    };


  // fileupload change
  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0])
    if(e.target.files[0].name.slice(-3) === "png" || e.target.files[0].name.slice(-3) === "jpg"){
      setImage(URL.createObjectURL(e.target.files[0]))
    }else{
      setVideo(URL.createObjectURL(e.target.files[0]))
    }
  }

    const dispatch = useDispatch()

    const handleSubmit = React.useCallback(() => {
        
      if(editPost){
        dispatch(postAction.updatePost(selectedPostId, video,image, content, category,tag))
      }else{
        dispatch(postAction.createPost(date, video,image, content, category, tag))
      }
    },[dispatch, selectedPostId, date, image, content, video, category, tag])

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
        </FormControl>
        </Grid>  
         <Grid item xs={12}>
        </Grid> 
         <Grid item xs={12}>    
        <FormControl className={clsx(classes.margin, classes.textField)}>
         <Videos onFileChange={onFileChange} />
        </FormControl>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={'cat1'}>category1</MenuItem>
          <MenuItem value={'cat2'}>category2</MenuItem>
          <MenuItem value={'cat3'}>category3</MenuItem>
          <MenuItem value={'cat4'}>category4</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid xs={12} md={7} lg={8}>
            <FormControlLabel 
              control={<Checkbox
                        checked={tag.checkedA}
                        onChange={handleChangecheckBox}
                        name="checkedA" 
                        color={Color.primary}
                      />} 
                      label="Tag1" 
            />
            <FormControlLabel 
              control={<Checkbox
                        checked={tag.checkedF}
                        onChange={handleChangecheckBox}
                        name="checkedF" 
                        color={Color.primary}
                      />} 
                        label="Tag2" 
            />
            <FormControlLabel 
              control={<Checkbox
                        checked={tag.checkedB}
                        onChange={handleChangecheckBox}
                        name="checkedB" 
                        color={Color.primary}
                      />} 
                        label="Tag3" 
            />
          </Grid>
        </Grid>
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
              {selectedPostId ? "Update Post" : "Add Post"}
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



    // return image or video value 

    // const imgDisplay = () => {
    //   if(selectedFile){
    //     if(selectedFile.name.slice(-3) === "png" || selectedFile.name.slice(-3) === "jpg"){
    //       const newVal = URL.createObjectURL(selectedFile)
    //         // setImage(newVal);
    //       console.log("image")
    //       // return (<img src={image} width="90%" height="200px"/>)
    //     }
    //   }
    // } 
    // const videoDisplay = () =>  {
    //   if(selectedFile){
    //     if(!selectedFile.name.slice(-3) === "png" || !selectedFile.name.slice(-3) === "jpg"){
    //         // setVideo(URL.createObjectURL(selectedFile))
    //       console.log("video")
    //       // return (
    //       //   <>
    //       //    <video width="90%" height="200px" controls>
    //       //    <source src={video} type="video/mp4" />
    //       //    Your browser does not support the video tag.
    //       //    </video> 
    //       //  </> 
    //       //  )
    //     }
    //   }
    // }