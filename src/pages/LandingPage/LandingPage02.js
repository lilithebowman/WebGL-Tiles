/*
 * Import remote dependancies
 */
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import CustomHero01 from "../../shared/component/CustomHero01";

// CHANGE THIS TO YOUR WORDPRESS SITE URL.
// const baseUrl = "https://jameslaiproductions.tk";
const baseUrl = "https://calderaforms.com";

const LandingPage02 = () => {
  // Track state for posts, current page and number of pages
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [nrofpages, setNumberofpage] = useState(1);

  // When the page number changes call the api for posts.
  useEffect(() => {
    Axios.get(baseUrl + "/wp-json/wp/v2/posts", {
      params: { page: page }
    }).then((response) => {
      // Store the number of posible pages.
      setNumberofpage(response.headers["x-wp-totalpages"]);
      // Store the posts from the response.
      setPosts(response.data);
    });
  }, [page, setPosts]);

  // Event handler: Decrease page count no lower then 1.
  const handlePrevPage = () => setPage(page - 1 ? page - 1 : 1);
  // Event handler: Increase page count no higher then nrofpages.
  const handleNextPage = () => setPage(page < nrofpages ? page + 1 : nrofpages);

  return (
    <Fragment>
      <CustomHero01
        overlayOpacity="1"
        overlayColor="black"
        minHeight=""
        backgroundImage="https://scontent.fbki2-1.fna.fbcdn.net/v/t31.0-8/22051380_10209888107787589_3822251984545509115_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=_T_HQlZ9Q0UAX8OYz-U&_nc_ht=scontent.fbki2-1.fna&oh=9c93a9c1a4175bd378fd487c984ea2d8&oe=5F3ED485"
      />
      <div>
        <div>
          {posts &&
            posts.length &&
            posts.map((post, index) => {
              return (
                <div key={post.id} className="posts-app__post">
                  <h2>{post.title.rendered}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <a href={post.link} target="_blank">
                    Read post
                  </a>
                </div>
              );
            })}
        </div>

        <div>
          <button onClick={handlePrevPage}>Newer posts</button>
          <p>
            Page {page} of {nrofpages}
          </p>
          <button onClick={handleNextPage}>Older posts</button>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage02;
