export default function Loading() {
  // Create an array of 6 items to show as skeletons
  const skeletons = Array.from({ length: 6 });

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-12 animate-pulse">
          <div className="h-10 w-64 bg-slate-200 mx-auto rounded-md mb-4"></div>
          <div className="h-4 w-96 bg-slate-200 mx-auto rounded-md"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skeletons.map((_, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-200 rounded-2xl p-8 h-64 animate-pulse"
            >
              <div className="h-4 w-20 bg-slate-200 rounded-full mb-6"></div>
              <div className="h-6 w-full bg-slate-200 rounded-md mb-4"></div>
              <div className="h-6 w-3/4 bg-slate-200 rounded-md mb-6"></div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-slate-100 rounded-md"></div>
                <div className="h-3 w-full bg-slate-100 rounded-md"></div>
                <div className="h-3 w-2/3 bg-slate-100 rounded-md"></div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between">
                <div className="h-4 w-16 bg-slate-100 rounded-md"></div>
                <div className="h-4 w-16 bg-slate-100 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}