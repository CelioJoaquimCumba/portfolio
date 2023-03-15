import CodeTag from "../code-tags/CodeTag";
import './Main.scss'
import About from "./sections/about/About";
import Summary from "./sections/summary/Summary";
function Main() {
    return (
      <main>
        <CodeTag tag="main">
          <CodeTag tag={"section"} idAtr={"summary"}>
            <Summary />
          </CodeTag>

          <CodeTag tag={"section"} idAtr={"about"}>
            <About/>
          </CodeTag>
        </CodeTag>
      </main>
    );
}

export default Main;