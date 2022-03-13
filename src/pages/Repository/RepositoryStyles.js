import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
from {
  transform: rotate(0deg)
}
to {
  transform: rotate(360deg)
}
`;


export const Loading = styled.div`
  background: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 731px;
  ${props =>
    props.loading &&
    css`
      svg {
        font-size: 40px;
        animation: ${rotate} 2s linear infinite;
        color: #7159c1 !important;
      }
    `}
`;

export const Owner = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  div:first-child {
    align-self: flex-start;
    flex: 1 1 100%;
    margin-bottom: 40px;
    & > a {
      color: #7159c1;
      font-size: 16px;
      text-decoration: none;
      &:hover {
        color: #907dcf;
      }
      & svg {
        vertical-align: top;
        margin-right: 4px;
      }
    }
  }
`;