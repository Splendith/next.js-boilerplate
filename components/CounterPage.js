import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '~/components/ui';
import Counter from './Counter';

const ModifyContainer = Container.extend`
  background: #fdfdfd;
  text-align: center;
`;

const Wrapper = styled.div`
  border: 2px solid #eee;
`;

const CounterPage = props => (
  <Wrapper>
    <ModifyContainer>{props.children}</ModifyContainer>
    <Counter />
  </Wrapper>
);

CounterPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterPage;
