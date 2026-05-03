import React from "react";
import { useInView } from "react-intersection-observer";

const RevealSection = ({ as: Tag = "section", className = "", children, delay = 0, ...props }) => {
  const { ref, inView } = useInView({
    threshold: 0.16,
    triggerOnce: false,
  });

  return (
    <Tag
      ref={ref}
      className={`${className} reveal-section ${inView ? "is-visible" : ""}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default RevealSection;
