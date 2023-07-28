import React, { useState, useEffect } from "react";

function FollowingCircle() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setX(event.clientX);
      setY(event.clientY);
      setIsMouseMoving(true);
    };

    const handleMouseStop = () => {
      setIsMouseMoving(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseStop);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseStop);
    };
  }, []);

  return (
    <>
      {isMouseMoving && (
        <div
          style={{
            position: "fixed",
            top: y + "px",
            left: x + "px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "orange",
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        ></div>
      )}
    </>
  );
}

export default FollowingCircle;
