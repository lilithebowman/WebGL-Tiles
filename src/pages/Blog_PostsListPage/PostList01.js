/*
 * Import remote dependancies
 */
import React, { useState, useEffect, Fragment } from "react";
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
  CircularProgress
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import wordpressUrl from "../../data/WordpressUrl";

// CHANGE THIS TO YOUR WORDPRESS SITE URL.
// const wordpressUrl = "https://calderaforms.com";
// const baseUrl = "https://jameslaiproductions.tk";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "20px"
  },
  cardHeader: {
    background: "lightblue"
  },
  cardContent: {},
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

const PostList01 = (props) => {
  const classes = useStyles();
  // Track state for posts, current page and number of pages
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [state, setState] = useState({
    loading: false,
    error: ""
  });
  const { loading, error } = state;

  // When the page number changes call the api for posts.
  useEffect(() => {
    setState({ loading: true });
    setPosts([]);
    Axios.get(wordpressUrl + "/wp-json/wp/v2/posts", {
      params: { page: page }
    })
      .then((response) => {
        // Store the number of posible pages.
        setTotalPages(response.headers["x-wp-totalpages"]);
        // Store the posts from the response.
        setPosts(response.data);
        setState({ loading: false, posts: response.data });
        console.log(response.data);
      })
      .catch((error) =>
        setState({ loading: false, error: error.response.data.message })
      );
    // });
  }, [page, setPosts, setState]);

  // Event handler: Decrease page count no lower then 1.
  const handlePrevPage = () => setPage(page - 1 ? page - 1 : 1);
  // Event handler: Increase page count no higher then nrofpages.
  const handleNextPage = () =>
    setPage(page < totalPages ? page + 1 : totalPages);

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
        {posts &&
          posts.length &&
          posts.map((post) => (
            <Card key={post.id} className={classes.card} elevation={9}>
              <CardHeader
                title={post.title.rendered}
                className={classes.cardHeader}
                component={Link}
                to={`/blog/post/${post.id}`}
              />
              <CardContent className={classes.cardContent}>
                <div
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to={`/blog/post/${post.id}`}
                  className={classes.button}
                >
                  Read post
                </Button>
                <Moment fromNow>{post.date}</Moment>
              </CardActions>
            </Card>
          ))}

        <Box className={classes.pagination}>
          <Button variant="outlined" onClick={handlePrevPage}>
            Previous
          </Button>
          <Typography display="inline">
            Page {page} of {totalPages}
          </Typography>

          <Button variant="outlined" onClick={handleNextPage}>
            Next
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default PostList01;
