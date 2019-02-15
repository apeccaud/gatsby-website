import React from "react";
import { css } from "@emotion/core";

export default props => (
    <div
      css={css`
        background-color: ${props.dark ? '#f8f9fa' : '#fff'};
        padding: 0 3%;
      `}
    >
      {props.children}
    </div>
);
