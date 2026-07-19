import { useState } from "react";

export function useBoundingBoxes() {
  const [showBoxes, setShowBoxes] = useState(false);
  const show = () => setShowBoxes(true);
  const hide = () => setShowBoxes(false);
  return { showBoxes, show, hide };
}
