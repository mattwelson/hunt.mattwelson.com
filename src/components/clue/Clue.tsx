import React, { useState } from "react";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { ClueLine } from "./ClueLine";

export function Clue({
  clue,
  secondClue,
}: {
  clue: string;
  secondClue: string;
}) {
  const [showSecondClue, setShowSecondClue] = useState<boolean>(false);
  return (
    <>
      <ClueLine clue={clue} />
      {!showSecondClue && (
        <button
          className="btn btn-secondary"
          onClick={() => setShowSecondClue(true)}
        >
          Another hint
        </button>
      )}
      {showSecondClue && <ClueLine clue={secondClue} secondary />}
    </>
  );
}
