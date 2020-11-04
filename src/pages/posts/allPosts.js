import React from 'react'
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


// import * as PostsAction from '../../store/actions/index'
import PostItem from '../../components/PostItem'
import NavBar from '../../components/navBar'
import Footer from '../../components/footer'
import Color from '../../constants/colors'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop : "80px",
      paddingBottom : "80px"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    filterBar : {
      marginBottom : 80,
      background : "#EEE",
      padding : 10
    },
    recentbtn :{
      marginTop : 30
    },
    tags : {
      paddingTop : 50
    }
  }));


const AllArticles = () => {

    const classes = useStyles();

    const postsStore = useSelector(state => state.Posts.availablePost)

    const [category, setCategory] = React.useState('');
    const [posts, setPosts] = React.useState(postsStore);
    const [state, setState] = React.useState({
      checkedA: false,
      checkedB: false,
      checkedF: false,
    });
  
    const handleChangecheckBox = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
      if(state.checkedA){
        setPosts(posts.filter(post => post.tag).filter((item) => item.tag.checkedA))
      }
      if(state.checkedB){
        setPosts(posts.filter(post => post.tag).filter((item) => item.tag.checkedB))
      }
      if(state.checkedF){
        setPosts(posts.filter(post => post.tag).filter((item) => item.tag.checkedF))
      }
    };

    const handleChange = (event) => {
      setPosts(postsStore)
      setCategory(event.target.value);
      setPosts(posts.filter(post => post.category === event.target.value))
    };

    const customRecentArr = () => {
      setPosts(posts.sort((a, b) => parseFloat(a.date) - parseFloat(b.date)))
    }

     console.log(posts)

    return (
      <>
      <NavBar />
        <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3} className={classes.filterBar}>
        <Grid xs={12} md={4} lg={3}><h1>Filtter</h1></Grid>
        <Grid xs={12} md={8} lg={9}>
        <Grid container spacing={3}>
          <Grid xs={4} md={4} lg={4}>
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
          <Grid xs={4} md={4} lg={4}>
          <Button variant="contained" className={classes.recentbtn} onClick={customRecentArr}>Recent Posts</Button>
          </Grid>
          <Grid xs={4} md={4} lg={4} className={classes.tags}>
            <FormControlLabel 
              control={<Checkbox
                        checked={state.checkedA}
                        onChange={handleChangecheckBox}
                        name="checkedA" 
                        color={Color.primary}
                      />} 
                      label="Tag1" 
            />
            <FormControlLabel 
              control={<Checkbox
                        checked={state.checkedF}
                        onChange={handleChangecheckBox}
                        name="checkedF" 
                        color={Color.primary}
                      />} 
                        label="Tag2" 
            />
            <FormControlLabel 
              control={<Checkbox
                        checked={state.checkedB}
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
          <CssBaseline/>
            <Grid container spacing={3} >
                {posts.map(item => {
                    return (
                        <Grid key={item.id} item xs={12} md={4} lg={3}>
                            <PostItem 
                              url={item.image}
                              video={item.video}
                              content = {item.content}
                              date = {item.date}
                              id={item.id}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
        <Footer />
     </>
    )
}

export default AllArticles

