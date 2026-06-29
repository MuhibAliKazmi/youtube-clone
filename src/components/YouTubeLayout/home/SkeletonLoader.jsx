import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function SkeletonLoader() {
  return (
    <div>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 3xl:grid-cols-5">
        {Array(19)
          .fill()
          .map((_, i) => (
            <li key={i} className="rounded-2xl p-2">
              <div className="w-full aspect-video rounded-xl overflow-hidden">
                <Skeleton height="100%" />
              </div>

              <div className="flex mt-3">
                <Skeleton circle width={40} height={40} className="mr-3" />
                <div className="flex flex-col flex-1">
                  <Skeleton height={14} width="80%" />
                  <Skeleton height={12} width="60%" className="mt-2" />
                  <Skeleton height={10} width="40%" className="mt-2" />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SkeletonLoader;
