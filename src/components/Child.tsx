import { Grandchild } from "./Grandchild";

export const Child = () => {
  return (
    <div className="frame blue">
      Child
      <Grandchild />
    </div>
  );
};
