import Slide from "./Slide";
import "../EditSlide.css";
export default function SideBar({ slides, selectSlide }) {
  return (
    <>
      <aside className="overflow-y-scroll left-pane">
        {slides.map((slide, index) => (
          <div onClick={() => selectSlide(index)} key={index}>
            <Slide slide={slide} />
          </div>
        ))}
      </aside>
    </>
  );
}
