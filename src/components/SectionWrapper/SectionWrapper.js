function SectionWrapper({ children, styleProps }) {
  return (
    <section className="section" style={styleProps}>
      <div className="container">{children}</div>
    </section>
  );
}

export default SectionWrapper;
