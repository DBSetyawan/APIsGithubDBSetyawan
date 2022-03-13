import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: solid ${props => (props.error ? '2px #e41111' : '1px #eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading || props.empty,
  }))`
    background: #7159c1;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    &[disabled] {
      cursor: not-allowed;
      background: rgba(113, 89, 193, 0.2);
    }
    ${props =>
      props.loading &&
      css`
        svg {
          animation: ${rotate} 2s linear infinite;
          color: #7159c1 !important;
        }
      `}
  `;

const rotate = keyframes`
from {
transform: rotate(0deg)
}
to {
transform: rotate(360deg)
}
`;

export const List = styled.ul`
  margin-top: 30px;
  list-style-type: none;
  font-size: 16px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }
    img {
      width: 32px;
      margin-right: 12px;
      border-radius: 50%;
      border: 2px solid #dbdbdb;
    }
    a {
      display: flex;
      align-items: center;
      color: inherit;
      text-decoration: none;
      &:hover {
        color: #7159c1;
      }
    }
    button {
      color: #999;
      background: none;
      border: 0;
      padding: 6px 0 6px 16px;
      &:hover {
        color: #7159c1;
      }
    }
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 5px;
  color: #e41111;
`;