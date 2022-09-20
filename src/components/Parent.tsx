import { RefObject } from "react";
import { Child } from "./Child";

type ParentProps = {
  headerRef: RefObject<HTMLDivElement>;
};

export const Parent: React.FC<ParentProps> = ({ headerRef }) => {
  return (
    <>
      <div ref={headerRef} className="frame yellow">
        Header
      </div>
      <div className="frame violet">
        Parent
        <Child />
      </div>
    </>
  );
};
