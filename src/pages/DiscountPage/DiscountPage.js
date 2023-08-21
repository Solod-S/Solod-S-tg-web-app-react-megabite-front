import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Menu, BackBtn, Loader } from "../../components";

import {
  getDeals,
  getDealsRefreshStatus,
} from "../../redux/deals/dealsSelectors.js";
import { fetchDeals } from "../../redux/deals/dealsOperations";

import {
  PortfolioSection,
  Wrapper,
  EmptyPlaceholder,
} from "./DiscountPage.styled";

// import discountData from "../../data/discountData";

function DiscountPage() {
  const dispatch = useDispatch();
  const storageFavorite = useSelector(getDeals);
  const isRefreshing = useSelector(getDealsRefreshStatus);

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchDeals());
    setRecipes(storageFavorite);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setRecipes(storageFavorite);
  }, [storageFavorite]);

  useEffect(() => {
    setisLoading(isRefreshing);
  }, [isRefreshing]);

  return (
    <PortfolioSection className="section">
      <Wrapper className="container">
        {isLoading ? (
          <>
            <BackBtn location="/" />
            <Loader />
          </>
        ) : (
          <>
            {storageFavorite && storageFavorite.length > 0 ? (
              <>
                <BackBtn location="/" />
                <Menu data={recipes} location={"discount"} />
                <BackBtn location="/" />
                <PortfolioSection className="section">
                  <Wrapper className="container"></Wrapper>
                </PortfolioSection>
              </>
            ) : (
              <>
                <BackBtn location="/" />
                <EmptyPlaceholder>
                  На жаль, на даний момент у нас немає акцій
                </EmptyPlaceholder>
              </>
            )}
          </>
        )}
      </Wrapper>
    </PortfolioSection>
  );
}

export default DiscountPage;
