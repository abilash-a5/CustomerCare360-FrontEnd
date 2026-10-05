function StatusBadge({ status }) {
  const colors = {
    Pending: "bg-[#F7B9C4] text-[#4A3267]",
    Approved: "bg-[#C6BADE] text-[#4A3267]",
    Completed: "bg-[#4A3267] text-white",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;