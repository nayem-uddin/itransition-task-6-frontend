import Page from "./Page";
export default function SlideCanvas({
  presentation,
  ref,
  slideNo,
  updateSlide,
}) {
  const currentSlide = presentation[slideNo];
  if (!currentSlide) return;
  return (
    <div className="w-75" ref={ref}>
      <Page page={currentSlide} pageNo={slideNo} updateSlide={updateSlide} />
    </div>
  );
}
