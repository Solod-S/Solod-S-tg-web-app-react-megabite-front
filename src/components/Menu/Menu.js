import { MenuList } from "./Menu.styled";
import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

function Menu({ data, location }) {
  const [itemList, setitemList] = useState(data);

  useEffect(() => {
    setitemList(data);
  }, [data, location]);

  return (
    <MenuList>
      {itemList.length > 0 &&
        itemList.map((itemProps) => (
          <MenuItem
            key={itemProps.id}
            itemProps={itemProps}
            location={location}
          />
        ))}
    </MenuList>
  );
}

export default Menu;
