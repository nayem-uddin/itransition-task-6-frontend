import { Deck, Slide } from "spectacle";
import ReactMarkdown from "react-markdown";
import { Rnd } from "react-rnd";
import { useLocation } from "react-router-dom";

export default function PresentMode() {
  const location = useLocation();
  const { presentation: slides } = location.state;
  return (
    <Deck>
      {slides.map((page, index) => (
        <Slide key={index}>
          {page.blocks.map((block, idx) => (
            <Rnd
              position={{
                x: block.x,
                y: block.y,
              }}
              size={{
                width: block.width,
                height: block.height,
              }}
            >
              <ReactMarkdown key={idx}>{block.content}</ReactMarkdown>
            </Rnd>
          ))}
        </Slide>
      ))}
    </Deck>
  );
}
