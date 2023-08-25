import { Location, BackBtn, SectionWrapper } from "../../components";

function ContactPage() {
  return (
    <SectionWrapper>
      <BackBtn location="/" />
      <Location />
      <BackBtn location="/" />
    </SectionWrapper>
  );
}

export default ContactPage;
