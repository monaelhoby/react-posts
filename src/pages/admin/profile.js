import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




import * as PostAction from '../../store/actions/index'
import NavBar from '../../components/navBar'
import PostItem from '../../components/PostItem'
import Color from '../../constants/colors'
import Footer from '../../components/footer'


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        paddingTop : "80px",
        paddingBottom : "80px"
      },
    margin: {
        position : "absolute",
        background : Color.accent,
        color : "#FFF",
        borderRadius : "50%",
        bottom : "10%",
        right : "10%",
        '&:hover' : {
            background : Color.accent,
        }
    },
    add :{
        textAlign : "center",
        color : "#FFF"
    },
    btns : {
        textAlign : "right",
        marginTop : "25px"
    },
    remove : {
        color : "#FFF", 
        marginLeft : "15px",
        background : Color.secondary,
        display: "inline-block",
        padding: "6px 8px",
        marginRight: "20px",
        borderRadius : "5px",
        cursor : "pointer"
    },
    edit : {
        color : "#FFF",
        background : Color.accent,
        display: "inline-block",
        padding: "6px 8px",
        borderRadius : "5px"
    }
})

const Profile = props => {

    const dispatch = useDispatch();

    const posts = useSelector(state => state.Posts.userPosts );


    const deletePost = (id) => {
        dispatch(PostAction.deletePost(id))
        setOpen(false);
      }

    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const classes = useStyles()

    return (
        <div>
            <NavBar />
        <div style={{position : "relative"}}>
         <Container maxWidth="lg" className={classes.root}>
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
                            > 
                            <div className={classes.btns}>
                               <span className={classes.remove} onClick={handleClickOpen}> 
                                 <DeleteIcon />
                               </span>
                               <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Do you realy want delete this Article?
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        No
                                    </Button>
                                    <Button onClick={() => deletePost(item.id)} color="primary" autoFocus>
                                        Yes
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                            <Link to={`/addPost/:${item.id}`}  className={classes.edit}>
                                <span className="material-icons">
                                    edit
                                </span>
                            </Link>
                            </div>
                            </PostItem>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
            <Link to="/addPost" className={classes.add}>
                <Fab className={classes.margin} aria-label="add">
                <span className="material-icons">add</span>
                </Fab>
            </Link>
      </div>
      <Footer />
    </div>
    )
}

export default Profile
