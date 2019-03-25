import React, { useContext } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import Context from "./Context";

export default function DisplayData() {
  const { state } = useContext(Context);

  if (state && state.cars.length === 0)
    return (
      <Card>
        <CardBody>
          <CardTitle>No cars match those options</CardTitle>
        </CardBody>
      </Card>
    );

  if (!state) {
    return null;
  } else {
    return state.cars.map(car => {
      return (
        <Card key={car._id}>
          <CardBody>
            <CardTitle>
              <strong>Make: {car.make}</strong>
            </CardTitle>
            <CardTitle>
              <strong>Price: ${car.price}</strong>
            </CardTitle>
            <CardTitle>
              <strong>Year: {car.year}</strong>
            </CardTitle>
            <br />
            <CardText>{car.color && car.color}</CardText>
            <CardText>{car.hasSunroof ? `Sunroof` : null}</CardText>
            <CardText>{car.isFourWheelDrive ? `4WD` : null}</CardText>
            <CardText>{car.hasLowMiles ? `Low miles` : null}</CardText>
            {car.hashPowerWindows ? `P windows` : null}
            <CardText> {car.hasNavigation ? `Navigation` : null}</CardText>
            <CardText>{car.hasHeatedSeats ? `Heated seats` : null}</CardText>
          </CardBody>
        </Card>
      );
    });
  }
}
