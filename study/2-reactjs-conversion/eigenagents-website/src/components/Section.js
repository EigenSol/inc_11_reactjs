function SectionBody({title, bold}){

  return (
    <>
      <h1 style={{
        fontSize: '5vw',
        fontWeight: bold ? 800 : 100,
      }}>
        {title}
      </h1>
      <pre>{title}</pre>
    </>
  );
}


function Section({details, ...rest}){

  const styles = {
    height: '100vh',
    border: '1px solid #fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <section style={styles} title={details}>
      <SectionBody {...rest} />
    </section>
  )
}

export default Section;
