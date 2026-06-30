import React from 'react';
import Child from "./Child";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Parent = () => {
    const childInfos = [
 {name: 'Jane',surname: 'Doe'},
{name: 'John',surname: 'Smith'},
{name: 'Alice',surname: 'Johnson'},
{name: 'Bob',surname: 'Brown'},
{name: 'Charlie',surname: 'Davis'},]
return (
<Container>
  <Row>
    {childInfos.map((child, index) => {
      return (
        <Col key={index}>
          <Child {...child} />
        </Col>
      );
    })}
  </Row>
</Container>
);
};
export default Parent;
