import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@material-ui/core/';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import blank from '../../../images/blank.png'

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || blank} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.author}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: '#00ff00' }} size="small" onClick={() => setCurrentId(post._id)}><EditIcon fontSize="default" color="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="secondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} color="primary" variant="body2" component="p">{moment(post.eventDate).add(1,'days').format('MM/DD/YYYY')}</Typography>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="default" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpIcon fontSize="" /> Likes {post.likeCount} </Button> */}
        {/* <Button size="small" color="default" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button> */}
        <IconButton color="primary" aria-label="like" className={classes.margin} size="small" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpIcon fontSize="small" /><span style={{fontSize: '.5em',paddingLeft: '1em'}}>{post.likeCount}</span>
        </IconButton>
        <IconButton color="secondary" aria-label="delete" className={classes.margin} size="small" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
