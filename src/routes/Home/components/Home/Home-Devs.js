import React from 'react';
import Theme from '../../../../theme';
import {Card, CardTitle, CardPanel, Row, Col} from 'react-materialize';




export const HomeDevs = () => {
  return (
  <div className="Row">
  <Row>
    <Col m={3} s={12}>
      <Card horizontal header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
      </Card>
    </Col>
    <Col m={3} s={12}>
      <Card horizontal header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
      </Card>
    </Col>
    <Col m={3} s={12}>
      <Card horizontal header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
      </Card>
    </Col>
    <Col m={3} s={12}>
      <Card horizontal header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
      </Card>
    </Col>
    <Col m={3} s={12}>
      <Card horizontal header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        title="Card Title"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
     </Card>
    </Col>
    </Row>
 </div>
  

  )};
   
export default HomeDevs;