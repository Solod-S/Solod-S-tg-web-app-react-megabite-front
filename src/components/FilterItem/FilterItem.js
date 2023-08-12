import { Item, Button } from "./FilterItem.styled";

function FilterItem({ filter, title, setCurrentFilter }) {
  return (
    <Item>
      <Button
        type="button"
        data-filter={filter}
        onClick={() => setCurrentFilter(filter)}
      >
        {title}
      </Button>
    </Item>
  );
}

export default FilterItem;
