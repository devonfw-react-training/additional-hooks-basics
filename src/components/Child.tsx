import { memo } from "react";
import { Grandchild } from "./Grandchild";

export const Child = memo(() => {
  console.log("Render Child");
  return (
    <div className="frame blue">
      Child
      <Grandchild />
    </div>
  );
});
