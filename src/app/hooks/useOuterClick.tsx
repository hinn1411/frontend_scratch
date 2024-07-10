import { RefObject, useEffect } from "react";

export function useOuterClick(
  domElemment: RefObject<HTMLElement>,
  callbackFn: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        domElemment.current &&
        !domElemment.current.contains(event.target as Node)
      ) {
        callbackFn();
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [domElemment, callbackFn]);
}
