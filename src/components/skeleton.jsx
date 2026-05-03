export default function Skeleton() {
  return (
    <div className="p-4 border rounded-xl space-y-3 animate-pulse">
      <div className="h-40 bg-gray-300 rounded-lg"></div>
      <div className="h-4 bg-gray-300 w-3/4 rounded"></div>
      <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
    </div>
  );
}