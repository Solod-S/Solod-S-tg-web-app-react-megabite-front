import { Item, Button } from "./FilterItem.styled";

function FilterItem({ filter, title, handleFilter, active }) {
  return (
    <Item>
      <Button
        type="button"
        data-filter={filter}
        onClick={() => handleFilter(filter)}
        active={active}
      >
        {title}
      </Button>
    </Item>
  );
}

export default FilterItem;
