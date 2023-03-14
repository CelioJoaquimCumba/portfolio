import './CodeTag.scss'
function CodeTag({ children, tag, className }) {
    if (tag) {
    return (
      <div className={`code-tag`}>
        <p>{`<${tag}>`}</p>
        <div className={`code-tag-content ${className}`}>{children}</div>
        <p>{`</${tag}>`}</p>
      </div>
    );

    } else {
        return <>{children}</>
    }
}

export default CodeTag;