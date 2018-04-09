import withRedux from 'next-redux-wrapper';
import initStore from '~/store/';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export const Sample = () => (
  <div>
    <Title>Sample</Title>
  </div>
);

export default withRedux(initStore)(Sample);
