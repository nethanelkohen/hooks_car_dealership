import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default function DisplayData({ props }) {
  if (props && props.cars.length === 0)
    return (
      <Card>
        <CardBody>
          <CardTitle>No cars match those options</CardTitle>
        </CardBody>
      </Card>
    );

  if (!props) {
    return null;
  } else {
    return props.cars.map(car => {
      return (
        <Card key={car._id}>
          <CardBody>
            <CardTitle>Manufacturer: {car.make}</CardTitle>
            <CardSubtitle>price: ${car.price}</CardSubtitle>
            <br />
            <CardText>{car.hasSunroof ? `Has sunroof` : null}</CardText>
            <CardText>
              {car.isFourWheelDrive ? `Is four wheel drive` : null}
            </CardText>
            <CardText>{car.hasLowMiles ? `Has low miles` : null}</CardText>
            {car.hashPowerWindows ? `Has h5ower windows` : null}
            <CardText> {car.hasNavigation ? `Has navigation` : null}</CardText>
            <CardText>
              {car.hasHeatedSeats ? `Has has heated seats` : null}
            </CardText>
          </CardBody>
        </Card>
      );
    });
  }
}
