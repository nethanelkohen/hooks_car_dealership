import React, { useState, useContext } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Context from "./Context";

const colors = ["Red", "White", "Gray", "Silver", "Black"];

export default function ColorDropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { filterByChoice, showActive } = useContext(Context);

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={() => setDropdownOpen(prevState => !prevState)}
    >
      <DropdownToggle caret>Color</DropdownToggle>
      <DropdownMenu>
        {colors.map((color, i) => {
          return (
            <DropdownItem
              key={i}
              onClick={() => filterByChoice("COLOR", color)}
              active={showActive && showActive(color)}
            >
              {color}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
