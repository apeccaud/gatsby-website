import React from "react";
import { css } from "@emotion/core";
import { Link, graphql, StaticQuery } from "gatsby";

export default ({ children }) => (
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

        <header
          css={css`
            position: fixed;
            top: 0; left: 0; right: 0;
            background-color: transparent;
            border-bottom: 1px solid #f1f1f1;
            padding: 16px 60px;
          `}
        >
          
          <Link to={`/`}>
            <h3
              css={css`
                display: inline-block;
                margin: 0;
              `}
            >
              {data.site.siteMetadata.title}
            </h3>
          </Link>

          <Link to={`/about/`}
            css={css`
              float: right;
            `}
          >
            About
          </Link>

        </header>


        <div
          css={css`
            margin-top: 63px;
          `}
        >
          {children}
        </div>


        <footer>
          Footer
        </footer>

      </div>
    )}
  />
);
