import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function WatchSkeleton() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          <div>
            <Skeleton height={400} borderRadius={12} />
            <Skeleton height={30} width="60%" className="mt-4" />
            <div className="flex justify-between items-center mt-4 border-b border-gray-300 pb-4">
              <div className="flex items-center gap-3">
                <Skeleton circle width={40} height={40} />
                <div>
                  <Skeleton width={100} height={14} />
                  <Skeleton width={80} height={12} className="mt-2" />
                </div>
              </div>
              <Skeleton width={100} height={35} borderRadius={9999} />
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-sm">
              <Skeleton height={20} width="30%" />
              <Skeleton count={3} height={14} className="mt-2" />
            </div>
          </div>
          <div className="flex flex-col gap-3 max-h-[calc(100vh-2rem)] pr-2">
            {Array(6)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 rounded-lg bg-white shadow-sm"
                >
                  <Skeleton width={210} height={120} borderRadius={8} />
                  <div className="flex flex-col justify-between flex-1">
                    <Skeleton width="80%" height={16} />
                    <Skeleton width="60%" height={14} />
                    <Skeleton width="40%" height={12} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchSkeleton;
