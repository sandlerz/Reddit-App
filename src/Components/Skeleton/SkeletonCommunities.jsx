import SkeletonElement from './SkeletonElement'

export default function SkeletonCommunities() {
  const mapSkeleton = [...Array(10).keys()].map(index => (
    <div className="communities">
      <SkeletonElement type="number" />
      <SkeletonElement type="avatar-medium" />
      <div className="communities__body">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
      </div>
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  ))
  return mapSkeleton
}
