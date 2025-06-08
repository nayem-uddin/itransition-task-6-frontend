import Markdown from "react-markdown";
import { Rnd } from "react-rnd";
export default function BlockViewOnly({ rndProps, content, handleClick }) {
  return (
    <div onClick={handleClick}>
      <Rnd {...rndProps} style={{ border: "1px solid black" }}>
        <Markdown>{content}</Markdown>
      </Rnd>
    </div>
  );
}
