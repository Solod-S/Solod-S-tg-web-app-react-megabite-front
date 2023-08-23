import { MainTitle, DescriptionWrapper } from "./Refund.styled";

function Refund({ text }) {
  return (
    <>
      <MainTitle>Умова обміну та повернення</MainTitle>
      <DescriptionWrapper
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </>
  );
}

export default Refund;
