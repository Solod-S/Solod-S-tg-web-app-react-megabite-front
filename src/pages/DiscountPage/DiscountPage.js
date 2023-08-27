import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Menu, BackBtn, Loader, SectionWrapper } from "../../components";

import {
  getDeals,
  getDealsRefreshStatus,
} from "../../redux/deals/dealsSelectors.js";
import { fetchDeals } from "../../redux/deals/dealsOperations";

// import discountData from "../../data/discountData";

function DiscountPage() {
  const dispatch = useDispatch();
  const storageFavorite = useSelector(getDeals);
  const isRefreshing = useSelector(getDealsRefreshStatus);

  const [deals, setDeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchDeals());
    // dispatch(fetchProroAndDeals());
    setDeals(storageFavorite);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setDeals(storageFavorite);
  }, [storageFavorite]);

  useEffect(() => {
    setisLoading(isRefreshing);
  }, [isRefreshing]);

  return (
    <SectionWrapper>
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
              <Menu data={deals} location={"discount"} />
              <BackBtn location="/" />
            </>
          ) : (
            <>
              <BackBtn location="/" />
              <p>На жаль, на даний момент у нас немає акцій</p>
            </>
          )}
        </>
      )}
    </SectionWrapper>
  );
}

export default DiscountPage;
