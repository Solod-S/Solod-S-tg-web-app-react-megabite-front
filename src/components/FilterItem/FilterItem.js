import { Item, Button } from "./FilterItem.styled";

function FilterItem({ filter, title, selectFilter, active }) {
  return (
    <Item>
      <Button
        type="button"
        data-filter={filter}
        onClick={() => selectFilter(filter)}
        active={active}
      >
        {title}
      </Button>
    </Item>
  );
}

export default FilterItem;
