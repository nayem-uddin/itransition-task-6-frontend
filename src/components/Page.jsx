import "./EditSlide.css";
import BlockContainer from "./BlockContainer";

export default function Page({ page, updateSlide }) {
  const { blocks } = page;
  function updateBlock(blockIndex, updates) {
    const updatedBlocks = blocks.map((block, index) =>
      index === blockIndex ? { ...block, ...updates } : { ...block }
    );
    updateSlide({ blocks: [...updatedBlocks] });
  }
  return (
    <div className="position-absolute bottom-0 end-0 translate-middle-x canvas border bg-white p-3">
      {blocks.map((block, index) => (
        <BlockContainer
          block={block}
          blockIndex={index}
          updateBlock={updateBlock}
          key={index}
        />
      ))}
    </div>
  );
}
