import React from "react";
import Overlay from "./overlay/ModalOverlay";

export default function ConditionalDialog({
  title,
  description,
  onClickP,
  onClickS,
  secondaryButton,
  primaryButton,
}) {
  return (
    <Overlay>
      <div className="z-50 flex w-[500px] flex-col items-center justify-center gap-1 rounded-lg bg-white p-4 md:gap-2">
        <div className="text-normal w-full text-start text-gray-600 md:text-lg">
          {title}
        </div>
        <div className="text-wide text-xs font-light text-gray-400 md:text-[13px]">
          {description.length > 134
            ? `${description.substring(0, 124)}...`
            : description}
        </div>
        <div className="flex w-full flex-row items-center justify-end gap-4 py-2">
          <button
            type="button"
            onClick={onClickS}
            className="rounded-md border border-indigo-500 px-2 py-1 text-sm capitalize text-indigo-600 shadow-sm transition hover:bg-indigo-50 active:border-indigo-800 active:bg-indigo-100 active:bg-opacity-80 active:text-indigo-950 md:text-[16px]"
          >
            {secondaryButton}
          </button>
          <button
            type="button"
            onClick={onClickP}
            className="rounded-md border border-indigo-500 bg-indigo-500 px-2 py-1 text-sm capitalize text-white shadow-sm transition hover:border-indigo-600 hover:bg-indigo-600 active:border-indigo-700 active:bg-indigo-700 md:text-[16px]"
          >
            {primaryButton}
          </button>
        </div>
      </div>
    </Overlay>
  );
}
