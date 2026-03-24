export default function Divider() {
  return (
    <div className="w-full flex items-center justify-center py-4">
      <div className="w-3/4 md:w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent relative opacity-80">
        {/* Core intense glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1/4 h-[3px] bg-blue-500 blur-[6px]"></div>
        {/* Sharp inner light */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1/6 h-[1px] bg-blue-300 blur-[2px]"></div>
      </div>
    </div>
  );
}
