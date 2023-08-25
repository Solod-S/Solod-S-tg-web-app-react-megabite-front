import { Features, BackBtn, SectionWrapper } from "../../components";

import ComapanyFeaturesData from "../../data/ComapanyFeaturesData";

function CompanyAboutPage() {
  return (
    <SectionWrapper>
      <BackBtn location="/" />

      <Features features={ComapanyFeaturesData} />
      <BackBtn location="/" />
    </SectionWrapper>
  );
}

export default CompanyAboutPage;
