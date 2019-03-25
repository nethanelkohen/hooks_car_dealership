import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";

export default function FilterButton({ filterByChoice, props }) {
  const showActive = arg => {
    return props && props.option.includes(arg) ? true : false;
  };

  return (
    <Container>
      <Row>
        <Col>
          <ButtonGroup>
            {props && props.prevCars ? (
              <Button color="danger" onClick={() => filterByChoice("UNDO")}>
                Undo
              </Button>
            ) : null}
            <Button color="info" onClick={() => filterByChoice("RESET")}>
              Show All
            </Button>
            <Button
              color="success"
              active={showActive("HAS_SUN_ROOF")}
              onClick={() => filterByChoice("HAS_SUN_ROOF")}
            >
              Has Sun Roof
            </Button>
            <Button
              color="success"
              active={showActive("IS_FOUR_WHEEL")}
              onClick={() => filterByChoice("IS_FOUR_WHEEL")}
            >
              Has 4WD
            </Button>
            <Button
              color="success"
              active={showActive("HAS_LOW_MILES")}
              onClick={() => filterByChoice("HAS_LOW_MILES")}
            >
              Has Low Miles
            </Button>
            <Button
              color="success"
              active={showActive("HAS_POWER_WINDOWS")}
              onClick={() => filterByChoice("HAS_POWER_WINDOWS")}
            >
              Has Power Windows
            </Button>
            <Button
              color="success"
              active={showActive("HAS_NAVIGATION")}
              onClick={() => filterByChoice("HAS_NAVIGATION")}
            >
              Has Navigation
            </Button>
            <Button
              color="success"
              active={showActive("HAS_HEATED_SEATS")}
              onClick={() => filterByChoice("HAS_HEATED_SEATS")}
            >
              Has Heated Seats
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}
