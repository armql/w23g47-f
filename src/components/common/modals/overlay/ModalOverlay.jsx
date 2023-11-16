import React from "react";

export default function ModalOverlay(props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-40 flex w-full items-center justify-center bg-black bg-opacity-30">
      {props.children}
    </div>
  );
}
