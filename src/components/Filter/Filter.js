import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import { BtnSet } from "./Filter.styled";
import { FilterItem } from "../../components";

import ownBrandsFilters from "../../data/ownBrandsFilters";

function Filter({ setCurrentFilter }) {
  const location = useLocation();
  const [searchParamsFilter, setsearchParamsFilter] = useSearchParams();
  const selectedFilter = searchParamsFilter.get("filter") ?? null;
  const handleFilter = (filter) => {
    setsearchParamsFilter({ filter: filter });
  };

  useEffect(() => {
    if (!selectedFilter) {
      return;
    }

    setCurrentFilter(selectedFilter);
  }, [selectedFilter, setCurrentFilter]);

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
            handleFilter={handleFilter}
          />
        ))}
    </BtnSet>
  );
}

export default Filter;
