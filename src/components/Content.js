import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <div className="rectangle">
      <Title name={props.title} />

      <Description text={props.text} />
    </div>
  );
};

export default Content;
