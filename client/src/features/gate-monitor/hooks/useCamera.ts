import { useState, useEffect, useRef } from "react";

export function useCamera() {
  const [isActive, setIsActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    if (isActive && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: { width: 640, height: 480 } })
        .then((s) => {
          stream = s;
          if (videoRef.current) videoRef.current.srcObject = s;
        })
        .catch(() => setIsActive(false));
    }
    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
  }, [isActive]);

  return { isCameraActive: isActive, setIsCameraActive: setIsActive, videoRef };
}
