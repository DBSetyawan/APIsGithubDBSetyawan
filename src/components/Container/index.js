import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  position: relative;
  & > h1 {
    font-size: 24px;
    text-align: center;
    color: #534974;
  }
  @media (max-width: 600px) {
    margin-top: 0;
    border-radius: 0;
  }
`;