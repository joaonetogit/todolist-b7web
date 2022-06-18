import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;

  .image {
    margin-right: 10px;
  }

  input {
    border: 0;
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }
`;
