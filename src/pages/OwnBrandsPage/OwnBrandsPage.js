import { useEffect, useState } from "react";
import { Menu, BackBtn, Filter } from "../../components";
import { PortfolioSection, Wrapper } from "./OwnBrandsPage.styled";

import ownbrandData from "../../data/ownbrandData";

function OwnBrandsPage() {
  const [ownBrands, setOwnBrands] = useState(ownbrandData);
  const [currentFilter, setCurrentFilter] = useState(null);

  useEffect(() => {
    if (currentFilter) {
      setOwnBrands(
        ownbrandData.filter((item) =>
          currentFilter !== "all" ? item.filter === currentFilter : item
        )
      );
    }
  }, [currentFilter]);

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
