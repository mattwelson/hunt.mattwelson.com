import React from "react";
import { BsQuestionDiamondFill } from "react-icons/bs";

export function ClueLine({
  clue,
  secondary = false,
}: {
  clue: string;
  secondary?: boolean;
}) {
  return (
    <div
      className={`alert shadow-lg alert-info ${
        secondary ? "bg-secondary" : ""
      }`}
    >
      <div>
        <BsQuestionDiamondFill className="text-white text-xl" />
        <span className="font-bold">{clue}</span>
      </div>
    </div>
  );
}
