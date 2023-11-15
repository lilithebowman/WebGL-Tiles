import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { BrowserView } from 'react-device-detect';
import { Container, Row, Col } from 'react-bootstrap';

const BODY_QUERY = gql`
  query AppQuery {
    allSettings {
      homeUrl
      generalSettingsTitle
      generalSettingsDescription
    }
    themeMods {
      customLogo{
        altText
        sourceUrl
        mediaDetails{
          sizes{
            name
            sourceUrl
          }
        }
      }
    }
  }
`;

// const TOKEN_REFRESH_MUTATION = gql`
//   mutation RefreshToken($clientId: String!, $authToken: String!){
//     refreshJwtAuthToken(input: { clientMutationId: $clientId, jwtRefreshToken: $authToken }){
//       clientMutationId
//       authToken
//     }
//   }
// `;

/**
 * App Body Component
 */
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }

  render() {
    const { appUserProps, customizr } = this.props;
    return (
      <Container fluid className="app-body">
        <Query query={BODY_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return (<Loading />);
            if (error) return (<Error fault="query" debugMsg={error.message} />);
            if (data) {
              const {
                allSettings: {
                  generalSettingsTitle: title,
                  generalSettingsDescription: description,
                  homeUrl: url,
                },
                themeMods: { customLogo: logo }
              } = data;
              const root = (customizr) ? '/customizer' : '';

              return (
                <Row>
                  <Header {...{ logo, description, title, url }}>
                    <Menu
                      location="primary"
                      wrapper={Col}
                      wrapperCSS="primary-menu"
                      wrapperProps={{ xs: 'auto' }}
                      pills
                      vertical
                      {...{ root, siteUrl: url }}
                    />
                    
                    <Login
                      {...appUserProps}
                      wrapper="div"
                      wrapperCSS="login w-100"
                    />
                    
                    <BrowserView renderWithFragment>
                      <Sidebar
                        id="sidebar-1"
                        as={Col}
                        className="sidebar w-100"
                      />
                    </BrowserView>
                    
                    <Menu
                      location="social"
                      wrapper={Col}
                      wrapperCSS="social-menu w-100"
                      wrapperProps={{ xs: 'auto' }}
                      justified
                      {...{ root, siteUrl: url }}
                    />
                  </Header>
                  <Main>
                    <Router {...{ root }} />
                    <Footer />
                  </Main>
                </Row>
              );
            }
          }}
        </Query>
      </Container>
    );
  }
}

Body.propTypes = {
  appUserProps: PropTypes.shape({}).isRequired,
  customizr: PropTypes.bool,
};

Body.defaultProps = {
  customizr: false,
}

export default Body;
