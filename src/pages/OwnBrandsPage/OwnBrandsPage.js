import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { Menu, BackBtn, Filter, Paginator } from "../../components";
import { scrollToTop } from "../../utils";
import { PortfolioSection, Wrapper } from "./OwnBrandsPage.styled";

import ownbrandData from "../../data/ownbrandData";

function OwnBrandsPage() {
  const [ownBrands, setOwnBrands] = useState(ownbrandData);
  const [currentFilter, setCurrentFilter] = useState(null);

  const [total, setTotal] = useState(null);
  const [currentSlice, setcurrentSlice] = useState([0, 6]);
  const history = useNavigate();
  const { search } = useLocation();

  const [searchParams] = useSearchParams();
  const page = search.slice(-1);
  const [pageNumber, setPageNumber] = useState(+page);
  const perPage = 6;

  const handleChange = (event, value) => {
    setPageNumber(value);
    scrollToTop();
  };

  useEffect(() => {
    setTotal(ownBrands.length);
  }, [ownBrands]);

  useEffect(() => {
    if (pageNumber <= 0 || pageNumber > Math.ceil(ownBrands.length / perPage)) {
      setPageNumber(1);
    }

    if (total / perPage === page - 6) {
      setPageNumber(total / perPage);
    }

    searchParams.set("page", pageNumber);
    currentFilter !== null ?? searchParams.set("filter", currentFilter);
    history(`?${searchParams.toString()}`);

    setcurrentSlice([pageNumber * perPage - 6, pageNumber * perPage]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, pageNumber, total, currentFilter, page, searchParams]);

  useEffect(() => {
    if (currentFilter)
      setOwnBrands(
        ownbrandData.filter((item) =>
          currentFilter !== "all" ? item.filter === currentFilter : item
        )
      );
  }, [currentFilter]);

  return (
    <PortfolioSection className="section">
      <Wrapper className="container">
        <BackBtn location="/" />
        <Filter setCurrentFilter={setCurrentFilter} />
        <Menu data={ownBrands.slice(...currentSlice)} location={"own-brand"} />
        <Paginator
          count={Math.ceil(total / perPage)}
          page={pageNumber}
          handleChange={handleChange}
        />
        <BackBtn location="/" />
      </Wrapper>
    </PortfolioSection>
  );
}

export default OwnBrandsPage;
