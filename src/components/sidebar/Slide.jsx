import Markdown from "react-markdown";
import "../EditSlide.css";
export default function Slide({ slide }) {
  const { blocks } = slide;
  return (
    <div className="slide-preview bg-white position-relative">
      {blocks.map((block, index) => (
        <div
          className="p-4"
          key={index}
          style={{
            position: "absolute",
            top: block.y,
            left: block.x,
          }}
        >
          <Markdown>{block.content}</Markdown>
        </div>
      ))}
    </div>
  );
}
