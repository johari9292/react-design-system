import * as React from "react";
import styled from "styled-components";

export const RippleWrapper = styled.div`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }
  &:active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;

export const withRipple = (Comp: any) => {
  return class RippleProvider extends React.Component {
    render() {
      return (
        <RippleWrapper>
          <Comp {...this.props} />
        </RippleWrapper>
      );
    }
  };
};
