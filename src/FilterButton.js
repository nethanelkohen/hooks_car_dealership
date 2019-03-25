import React, { useContext } from "react";
import ColorDropDown from "./ColorDropDown";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import Context from "./Context";

export default function FilterButton() {
  const { filterByChoice, showActive, state } = useContext(Context);

  return (
    <Container>
      <Row>
        <Col>
          <ButtonGroup>
            {state && state.prevCars ? (
              <Button color="danger" onClick={() => filterByChoice("UNDO")}>
                Undo
              </Button>
            ) : null}
            <Button color="info" onClick={() => filterByChoice("RESET")}>
              Show All
            </Button>
            <ColorDropDown />
            <Button
              color="success"
              active={showActive && showActive("HAS_SUN_ROOF")}
              onClick={() => filterByChoice("HAS_SUN_ROOF")}
            >
              Has Sun Roof
            </Button>
            <Button
              color="success"
              active={showActive && showActive("IS_FOUR_WHEEL")}
              onClick={() => filterByChoice("IS_FOUR_WHEEL")}
            >
              Has 4WD
            </Button>
            <Button
              color="success"
              active={showActive && showActive("HAS_LOW_MILES")}
              onClick={() => filterByChoice("HAS_LOW_MILES")}
            >
              Has Low Miles
            </Button>
            <Button
              color="success"
              active={showActive && showActive("HAS_POWER_WINDOWS")}
              onClick={() => filterByChoice("HAS_POWER_WINDOWS")}
            >
              Has Power Windows
            </Button>
            <Button
              color="success"
              active={showActive && showActive("HAS_NAVIGATION")}
              onClick={() => filterByChoice("HAS_NAVIGATION")}
            >
              Has Navigation
            </Button>
            <Button
              color="success"
              active={showActive && showActive("HAS_HEATED_SEATS")}
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
