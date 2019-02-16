import React from "react"
import { css } from "@emotion/core";
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import screensImg from "../images/screens.png"
import avatarsImg from "../images/avatars.png"
import mobileImg from "../images/mobile.jpg"

export default ({data}) => (
  <Layout>


    <Section dark>
      <div css={css`
        padding: 160px 0 140px 0;
        text-align: center;
        background-image: url(../images/exagon-pattern.png);
      `}>
        <h1 css={css`
          font-size: 50px;
        `}>
          {data.site.siteMetadata.title}
        </h1>
        <h2>
          We create memorable online experiences for your customers
        </h2>
      </div>
    </Section>


    <Section>
      <div css={css`
        @media (min-width: 420px) {
          display: flex;
        }
        padding: 50px 0;
        align-items: center;
      `}>
        <div css={css`
          flex: 1;
          text-align: center;
        `}>
          <img css={css`
            margin: 0;
          `}
          src={screensImg} />
        </div>
        <div css={css`
          flex: 1;
          text-align: center;
          padding: 0 20px;
        `}>
          <div>
            <h3 css={css`margin-top: 0;`}>Give your customers an experience that they deserve</h3>
            <p>
              Bla bla bla... <br />
              Bla bla bla... <br />
              Bla bla bla... <br />
              Bla bla bla...
            </p>
            <Link to={`/websites`}>
              Learn more about our Website solutions
            </Link>
          </div>
        </div>
      </div>
    </Section>

    
    <Section dark>
    <div css={css`
        @media (min-width: 420px) {
          display: flex;
        }
        padding: 50px 0;
        align-items: center;
      `}>
        <div css={css`
          flex: 1;
          text-align: center;
          padding: 0 20px;
        `}>
          <div>
            <h3 css={css`margin-top: 0;`}>Listen and understand your customers</h3>
            <p>
              Bla bla bla... <br />
              Bla bla bla... <br />
              Bla bla bla... <br />
              Bla bla bla...
            </p>
            <Link to={`/websites`}>
              Learn more about our Analytics solutions
            </Link>
          </div>
        </div>
        <div css={css`
          flex: 1;
          text-align: center;
        `}>
          <img css={css`
            margin: 0;
          `}
          src={avatarsImg} />
        </div>
      </div>
    </Section>


    <Section>
      <div css={css`
        @media (min-width: 420px) {
          display: flex;
        }
        padding: 50px 0;
        align-items: center;
      `}>
        <div css={css`
          flex: 1;
          text-align: center;
        `}>
          <img css={css`
            margin: 0;
          `}
          src={mobileImg} />
        </div>
        <div css={css`
          flex: 1;
          text-align: center;
          padding: 0 20px;
        `}>
          <div>
            <h3 css={css`margin-top: 0;`}>Go Mobile</h3>
            <p>
              Bla bla bla... <br />
              Bla bla bla... <br />
              Bla bla bla... <br />
              Bla bla bla...
            </p>
            <Link to={`/mobiles`}>
              Learn more about our Mobile app solutions
            </Link>
          </div>
        </div>
      </div>
    </Section>


    <Section dark>
      <div css={css`
        padding: 20px 0;
        text-align: center;
      `}>
        <h2>Who we are</h2>
        <p>
          Bla bla bla... <br />
          Bla bla bla... <br />
          Bla bla bla... <br />
          Bla bla bla...
        </p>
      </div>
    </Section>


    <Section>
      Recommendations / Company logos
    </Section>


  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`