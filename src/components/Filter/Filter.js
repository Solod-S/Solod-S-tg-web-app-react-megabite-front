import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import { BtnSet } from "./Filter.styled";
import { FilterItem } from "../../components";

import ownBrandsFilters from "../../data/ownBrandsFilters";

function Filter({ handleFilter }) {
  const location = useLocation();
  const [searchParamsFilter, setsearchParamsFilter] = useSearchParams();
  const selectedFilter = searchParamsFilter.get("filter") ?? null;
  const selectFilter = (filter) => {
    setsearchParamsFilter({ filter: filter });
  };

  useEffect(() => {
    if (!selectedFilter) {
      return;
    }

    handleFilter(selectedFilter);
  }, [selectedFilter, handleFilter]);

  return (
    <BtnSet>
      {ownBrandsFilters.length > 0 &&
        ownBrandsFilters.map(({ id, filter, title }) => (
          <FilterItem
            key={id}
            filter={filter}
            title={title}
            active={
              location.search.includes(filter) ||
              (!location.search && filter === "all")
            }
            selectFilter={selectFilter}
          />
        ))}
    </BtnSet>
  );
}

export default Filter;
