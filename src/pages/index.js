import { Jumbotron } from "@/components/Jumbotron";
import { Button, Col, Container, Row } from "react-bootstrap";


export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>My Own React Template</h1>
            <Button variant="primary">Click Here</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Jumbotron />
      </Container>
    </div>
  );
}
