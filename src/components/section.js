import React from "react";
import { css } from "@emotion/core";

export default props => (
    <div
      css={css`
        background-color: ${props.dark ? '#f8f9fa' : '#fff'}
      `}
    >
      {props.children}
    </div>
);
