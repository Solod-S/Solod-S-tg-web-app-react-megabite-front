import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setBackLinkHref } from "../../redux/app/appSlice";

import { scrollToTop } from "../../utils";

import ownbrandData from "../../data/ownbrandData";

import {
  Menu,
  BackBtn,
  Filter,
  Paginator,
  SectionWrapper,
  Searchbar,
} from "../../components";

function OwnBrandsPage() {
  const dispatch = useDispatch();

  const [ownBrands, setOwnBrands] = useState(ownbrandData);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [currentSearchProduct, setCurrentSearchProduct] = useState("");
  const [total, setTotal] = useState(null);
  const [currentSlice, setcurrentSlice] = useState([0, 6]);

  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = new URLSearchParams(search);

  const page = currentParams.get("page")
    ? Number(currentParams.get("page"))
    : 1;
  const [pageNumber, setPageNumber] = useState(page);
  const perPage = 6;
  const handlePaginatorChange = (event, value) => {
    setPageNumber(value);
    const currentParams = new URLSearchParams(search);
    // Устанавливаем только параметр 'page'
    currentParams.set("page", value);
    // Устанавливаем обновленные параметры
    setSearchParams(currentParams);
    scrollToTop();
  };

  const handleFilter = (select) => {
    setCurrentFilter(select);
    setCurrentSearchProduct("");
  };

  useEffect(() => {
    if (currentSearchProduct !== "") {
      const result = ownbrandData.filter((pr) =>
        pr.title
          .toLocaleLowerCase()
          .includes(currentSearchProduct.toLocaleLowerCase())
      );
      setOwnBrands(result);
    }
  }, [currentSearchProduct]);

  useEffect(() => {
    setTotal(ownBrands.length);
  }, [ownBrands]);

  useEffect(() => {
    if (pageNumber <= 0 || pageNumber > Math.ceil(ownBrands.length / perPage)) {
      setPageNumber(1);
      const currentParams = new URLSearchParams(search);
      // Устанавливаем только параметр 'page'
      currentParams.set("page", 1);
      // Устанавливаем обновленные параметры
      setSearchParams(currentParams);
    }

    if (total / perPage === page - 6) {
      setPageNumber(total / perPage);
    }

    searchParams.set("page", pageNumber ? pageNumber : 1);
    currentFilter !== null ?? searchParams.set("filter", currentFilter);
    dispatch(setBackLinkHref(searchParams.toString()));
    setcurrentSlice([pageNumber * perPage - 6, pageNumber * perPage]);
  }, [
    pageNumber,
    total,
    page,
    searchParams,
    currentSearchProduct,
    ownBrands.length,
    currentFilter,
    dispatch,
    search,
    setSearchParams,
  ]);

  useEffect(() => {
    if (currentFilter !== null) {
      setOwnBrands(
        ownbrandData.filter((item) =>
          currentFilter !== "all" ? item.filter === currentFilter : item
        )
      );
    }
  }, [currentFilter]);

  return (
    <SectionWrapper>
      <BackBtn location="/" />
      <Searchbar
        setCurrentSearchProduct={setCurrentSearchProduct}
        setCurrentFilter={setCurrentFilter}
      />
      <Filter handleFilter={handleFilter} />
      <Menu data={ownBrands.slice(...currentSlice)} location={"own-brand"} />
      <Paginator
        count={Math.ceil(total / perPage)}
        page={pageNumber}
        handleChange={handlePaginatorChange}
      />
      <BackBtn location="/" />
    </SectionWrapper>
  );
}

export default OwnBrandsPage;
