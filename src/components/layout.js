import React, { Component } from "react";
import { css } from "@emotion/core";
import { Link, graphql, StaticQuery } from "gatsby";

export default class AboutModal extends Component {
  state = {
    headerOverlay: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    // Round offset in order to improve performances
    let offsetRounded = Math.ceil(window.pageYOffset / 63) * 63

    if (offsetRounded >= 63) {
      this.setState({headerOverlay: true})
    }
    else {
      this.setState({headerOverlay: false})
    }
  }

  render () {
    return (
      <StaticQuery

        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}

        render={data => (
          <div>

            <div
              css={css`
                position: fixed;
                top: 0; left: 0; right: 0;
                background-color: #fff;
                height: 60px;
                border-bottom: 1px solid #f1f1f1;
                transition: opacity 0.5s;
                opacity: ${this.state.headerOverlay ? 1 : 0};
              `}>
              {/* Header Overlay */}   
            </div>


            <header
              css={css`
                position: fixed;
                top: 0; left: 0; right: 0;
                padding: 0 3%;
                height: 60px;
                line-height: 60px;
                z-index: 999;
              `}
            >
              
              <Link to={`/`}>
                <h3
                  css={css`
                    display: inline-block;
                    margin: 0;
                    font-size: 1.1rem;
                  `}
                >
                  {data.site.siteMetadata.title}
                </h3>
              </Link>

              {/* <Link to={`/about/`}
                css={css`
                  float: right;
                `}
              >
                About
              </Link> */}

            </header>
            

            <div>
              {this.props.children}
            </div>


            <footer css={css`
              text-align: center;
              padding: 30px 0;
              background-color: #f8f9fa;
            `}>
              {data.site.siteMetadata.title}
            </footer>

          </div>
        )}
      />
    )
  }
};
