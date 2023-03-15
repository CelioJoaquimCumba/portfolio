import './CodeTag.scss'
function CodeTag({ children, tag, idAtr, classAtr, className }) {
    if (tag) {
    return (
      <div className={`code-tag`}>
        <p>{`<${tag} ${idAtr ? 'id='+idAtr : ''} ${classAtr ? 'className='+className : ''} >`}</p>
        <div className={`code-tag-content ${className}`}>{children}</div>
        <p>{`</${tag}>`}</p>
      </div>
    );

    } else {
        return <>{children}</>
    }
}

export default CodeTag;