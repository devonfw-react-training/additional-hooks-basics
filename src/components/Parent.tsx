import { RefObject, useEffect, useState } from "react";
import { Child } from "./Child";

type ParentProps = {
  headerRef: RefObject<HTMLDivElement>;
};

export const Parent: React.FC<ParentProps> = ({ headerRef }) => {
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => prev + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  console.log("Render Parent");

  return (
    <>
      <div ref={headerRef} className="frame yellow">
        Header
      </div>
      <div className="frame violet">
        Parent {state}
        <Child />
      </div>
    </>
  );
};
