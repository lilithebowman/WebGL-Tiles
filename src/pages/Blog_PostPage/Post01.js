import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import CustomHero01 from "../../shared/component/CustomHero01";
import {
  Box,
  Button,
  Typography,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  makeStyles,
  CircularProgress,
  Container
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import wordpressUrl from "../../data/WordpressUrl";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%"
  },
  cardHeader: {
    background: "lightblue"
  },
  cardContent: {
    width: "100%",
    backgroundSize: "contain"
    // overflow: "hidden"
  },
  cardActions: {
    background: "lightgreen"
  },
  button: {},
  pagination: {
    textAlign: "center"
  },
  progress: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto"
  }
}));

const Post01 = (props) => {
  const classes = useStyles();
  const [posts, setPosts] = useState({});
  const [state, setState] = useState({
    loading: false,
    error: ""
  });
  const { loading, error } = state;

  // When the page number changes call the api for posts.
  useEffect(() => {
    // console.log(props);
    setState({ loading: true });
    // setPosts([]);
    Axios.get(`${wordpressUrl}/wp-json/wp/v2/posts/${props.match.params.id}`)
      .then((response) => {
        // Store the posts from the response.
        setPosts(response.data);
        setState({ loading: false });
      })
      .catch((error) =>
        setState({ loading: false, error: error.response.data.message })
      );
    // });
  }, []);

  return (
    <Fragment>
      <CustomHero01
        // overlayOpacity="1"
        // overlayColor="black"
        minHeight="30vh"
        backgroundImage="https://scontent.fbki2-1.fna.fbcdn.net/v/t31.0-8/22051380_10209888107787589_3822251984545509115_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=_T_HQlZ9Q0UAX8OYz-U&_nc_ht=scontent.fbki2-1.fna&oh=9c93a9c1a4175bd378fd487c984ea2d8&oe=5F3ED485"
      />
      {error && (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      )}
      {loading && <CircularProgress className={classes.progress} />}

      <Box>
        {Object.keys(posts).length && (
          <Card key={posts.id} className={classes.card}>
            <CardHeader
              title={posts.title.rendered}
              className={classes.cardHeader}
            />
            <CardContent>
              <div
                dangerouslySetInnerHTML={{ __html: posts.content.rendered }}
                className={classes.cardContent}
              />
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Moment fromNow>{posts.date}</Moment>
            </CardActions>
          </Card>
        )}
      </Box>
    </Fragment>
  );
};

export default Post01;
