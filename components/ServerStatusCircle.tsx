import Link from "next/link";

const ServerStatusCircle: React.FC<{ status: string; region: string }> = ({
  status,
  region,
}) => {
  // Determine the color based on the status
  const isStatusOk = status.toLowerCase() === "ok";
  const textColor = isStatusOk ? "text-green-500" : "text-red-500";
  const borderColor = isStatusOk ? "border-green-500" : "border-red-500";

  return (
    <Link href={`/${region}`}>
      <div className="flex flex-col items-center space-y-2 text-center transition-transform duration-300 hover:scale-105">
        <span className={`text-xs font-semibold`}>{region}</span>
        <div
          className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-transparent border-2 ${borderColor} rounded-full`}
        >
          <span className={`text-xs font-semibold ${textColor}`}>{status}</span>
        </div>
      </div>
    </Link>
  );
};

export default ServerStatusCircle;
