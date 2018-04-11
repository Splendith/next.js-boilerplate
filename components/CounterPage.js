import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';
import Counter from './Counter';

const ModifyContainer = styled(Container)`
  padding: 20px;
  background: #fdfdfd;
  text-align: center;
`;

const Wrapper = styled.div`
  border: 2px solid #eee;
`;

const CounterPage = props => (
  <Wrapper>
    <ModifyContainer>
      <Row>
        <Col>{props.children}</Col>
      </Row>
    </ModifyContainer>
    <Counter />
  </Wrapper>
);

CounterPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterPage;
