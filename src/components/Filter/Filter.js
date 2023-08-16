import { BtnSet } from "./Filter.styled";
import FilterItem from "../FilterItem/FilterItem";

import ownBrandsFilters from "../../data/ownBrandsFilters";

function Filter({ setCurrentFilter }) {
  return (
    <BtnSet>
      {ownBrandsFilters.length > 0 &&
        ownBrandsFilters.map(({ id, filter, title }) => (
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
