import SkeletonElement from './SkeletonElement'

export default function SkeletonSubReddits() {
  const mapSkeleton = [...Array(10).keys()].map(index => (
    <div className="subReddit" key={index}>
      <div className="subReddit__score-container">
        <SkeletonElement type="score" />
      </div>
      <div className="subReddit__thumbnail">
        <SkeletonElement type="img" />
      </div>
      <div className="subReddit__body-container">
        <SkeletonElement type="title" />
        <div className="subReddit__body-container__author-container">
          <SkeletonElement type="avatar__small" />
          <SkeletonElement type="text" />
        </div>
        <SkeletonElement type="dashboard" />
      </div>
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  ))

  return mapSkeleton
}
