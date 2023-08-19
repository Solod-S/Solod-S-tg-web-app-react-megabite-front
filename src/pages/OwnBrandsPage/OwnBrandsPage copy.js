import { useEffect, useState } from "react";
import { Menu, BackBtn, Filter } from "../../components";
import { PortfolioSection, Wrapper } from "./OwnBrandsPage.styled";
import { useSearchParams, useLocation } from "react-router-dom";
import ownbrandData from "../../data/ownbrandData";

function OwnBrandsPage() {
  const [ownBrands, setOwnBrands] = useState(ownbrandData);
  const [currentFilter, setCurrentFilter] = useSearchParams();

  const searchParamsFilter = currentFilter.get("filter") ?? null;

  useEffect(() => {
    if (!searchParamsFilter) {
      return;
    }
    setOwnBrands(
      ownbrandData.filter((item) =>
        searchParamsFilter !== "all" ? item.filter === searchParamsFilter : item
      )
    );
  }, [currentFilter, searchParamsFilter]);

  return (
    <PortfolioSection className="section">
      <Wrapper className="container">
        <BackBtn location="/" />
        <Filter setCurrentFilter={setCurrentFilter} />
        <Menu data={ownBrands} location={"own-brand"} />
        <BackBtn location="/" />
      </Wrapper>
    </PortfolioSection>
  );
}

export default OwnBrandsPage;
