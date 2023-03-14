function CodeTag({ children, tag }) {
  return (
    <>
      <p>{`<${tag}>`}</p>
        <div>{children}</div>
      <p>{`</${tag}>`}</p>
    </>
  );
}

export default CodeTag;