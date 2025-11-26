import { CSSProperties } from "react";
import styles from "./Skeleton.module.css";

type SkeletonProps = {
  className?: string,
  style?: CSSProperties,
  width?: string | number,
  height?: string | number
};

export function Skeleton({
  className,
  style,
  width,
  height
}: SkeletonProps) {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{
        width,
        height,
        ...style
      }}
      aria-hidden="true"
    />
  );
}