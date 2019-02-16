import React from "react"
import { css } from "@emotion/core";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import screensImg from "../images/screens.png"
import avatarsImg from "../images/avatars.png"

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


    {/* <Section dark>
      Offer
    </Section> */}


    <Section>
      Portfolio
    </Section>


    <Section dark>
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