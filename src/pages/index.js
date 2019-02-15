import React from "react"
import { css } from "@emotion/core";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"

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
      Description
    </Section>

    <Section dark>
      Offer
    </Section>

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