import { Rnd } from "react-rnd";
import BlockViewOnly from "./BlockViewOnly";
import { useState, useRef } from "react";
import "./EditSlide.css";
export default function BlockContainer({ block, blockIndex, updateBlock }) {
  const [editMode, setEditMode] = useState(false);
  const currentX = useRef(block.x);
  const currentY = useRef(block.y);
  function updateContent(e) {
    const newText = e.target.value;
    updateBlock(blockIndex, { content: newText });
  }
  function updatePosition(e, d) {
    if (d.x !== block.x || d.y !== block.y) {
      updateBlock(blockIndex, { x: d.x, y: d.y });
    }
  }
  function handleDragAndClick() {
    if (currentX.current === block.x && currentY.current === block.y) {
      setEditMode(true);
    }
    currentX.current = block.x;
    currentY.current = block.y;
  }
  function resizeBlock(e, direction, ref, delta, position) {
    updateBlock(blockIndex, {
      width: ref.style.width,
      height: ref.style.height,
      ...position,
    });
  }
  const rndProps = {
    position: {
      x: block.x,
      y: block.y,
    },
    size: {
      width: block.width,
      height: block.height,
    },
    onDragStop: updatePosition,
    onResizeStop: resizeBlock,
    bounds: ".canvas",
  };

  return (
    <>
      {editMode ? (
        <Rnd {...rndProps}>
          <textarea
            value={block.content}
            onChange={updateContent}
            autoFocus
            onBlur={() => setEditMode(false)}
          />
        </Rnd>
      ) : (
        <BlockViewOnly
          rndProps={rndProps}
          content={block.content}
          handleClick={handleDragAndClick}
        />
      )}
    </>
  );
}
