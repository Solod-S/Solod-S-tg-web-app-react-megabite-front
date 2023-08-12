import { BtnSet } from "./Filter.styled";
import FilterItem from "../FilterItem/FilterItem";

import portfolioFilters from "../../data/portfolioFilter";

function Filter({ setCurrentFilter }) {
  return (
    <BtnSet>
      {portfolioFilters.length > 0 &&
        portfolioFilters.map(({ id, filter, title }) => (
          <FilterItem
            key={id}
            filter={filter}
            title={title}
            setCurrentFilter={setCurrentFilter}
          />
        ))}
    </BtnSet>
  );
}

export default Filter;
