import './CodeTag.scss'
function CodeTag({ children, tag }) {
  return (
    <div className="code-tag">
      <p>{`<${tag}>`}</p>
      <div className="code-tag-content">{children}</div>
      <p>{`</${tag}>`}</p>
    </div>
  );
}

export default CodeTag;