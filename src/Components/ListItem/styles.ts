import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 20px;
  background-color: #20212c;
  border-radius: 10px;

  input {
    margin-right: 10px;
    width: 22px;
    height: 22px;
  }

  label {
    color: #ccc;
    font-size: 22px;
    text-decoration: ${done ? 'line-through' : 'none'}
  }
`,
);
