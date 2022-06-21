import React from "react";
import Shimmer from "./Shimmer";
import "./Skeleton.css";
import SkeletonElement from "./SkeletonElements";

export default function SkeletonProfile({ theme }) {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-profile">
        <SkeletonElement type="avatar" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
}
