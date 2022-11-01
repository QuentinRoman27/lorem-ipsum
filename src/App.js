import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Content
        title={"Lorem"}
        text={
          " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantiumcommodi eaque culpa voluptas. Deserunt, saepe eum. Cupiditate velit,aliquid odio illo fuga vero distinctio, lrepellendus, natusvoluptatum quia sequi!"
        }
      />
      <Content
        title={"Ipsum"}
        text={
          " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantiumcommodi eaque culpa voluptas. Deserunt, saepe eum. Cupiditate velit,aliquid odio illo fuga vero distinctio, lrepellendus, natusvoluptatum quia sequi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantiumcommodi eaque culpa voluptas. Deserunt, saepe eum. Cupiditate velit,aliquid odio illo fuga vero distinctio, lrepellendus, natusvoluptatum quia sequi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantiumcommodi eaque culpa voluptas. Deserunt, saepe eum. Cupiditate velit,aliquid odio illo fuga vero distinctio, lrepellendus, natusvoluptatum quia sequi!"
        }
      />
    </>
  );
}

export default App;
