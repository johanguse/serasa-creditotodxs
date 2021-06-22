export function Loading() {
  return (
    <div className="mx-auto bg-grey-400">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex text-center mb-2">
          <div className="h-4 w-4 bg-current rounded-full mr-1 animate-bounce"></div>
          <div className="h-4 w-4 bg-current rounded-full mr-1 animate-bounce200"></div>
          <div className="h-4 w-4 bg-current rounded-full animate-bounce400"></div>
        </div>
        <div className="flex-col font-bold text-center">Loading...</div>
      </div>
    </div>
  );
}
