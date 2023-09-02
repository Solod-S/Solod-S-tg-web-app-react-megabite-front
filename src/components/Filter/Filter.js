import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import { BtnSet } from "./Filter.styled";
import { FilterItem } from "../../components";

import ownBrandsFilters from "../../data/ownBrandsFilters";

function Filter({ handleFilter }) {
  const { search } = useLocation();
  const location = useLocation();
  const [searchParamsFilter, setsearchParamsFilter] = useSearchParams();
  const selectedFilter = searchParamsFilter.get("filter") ?? null;
  const selectFilter = (filter) => {
    // setsearchParamsFilter({ filter: filter });

    const currentParams = new URLSearchParams(search);

    // Проверяем наличие параметра 'query'
    if (currentParams.has("query")) {
      // Если 'query' существует, удаляем его
      currentParams.delete("query");
    }

    // Устанавливаем параметр 'filter'
    currentParams.set("filter", filter);

    // Устанавливаем обновленные параметры
    setsearchParamsFilter(currentParams);
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
              (!searchParamsFilter.get("filter") && filter === "all")
            }
            selectFilter={selectFilter}
          />
        ))}
    </BtnSet>
  );
}

export default Filter;
