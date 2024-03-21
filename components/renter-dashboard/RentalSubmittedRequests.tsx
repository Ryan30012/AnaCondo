const requestInfo = [
  { title: "Pool", sent: "8:00 am", updated: "1 day ago", status: "Completed" },
  { title: "Gym", sent: "8:00 am", updated: "1 day ago", status: "Pending" },
  { title: "Test", sent: "8:00 am", updated: "1 day ago", status: "Pending" },
];

export default function RentalSubmittedRequests() {
  return (
    <div className="px-4 py-4">
      <div className="grid md:grid-cols-4 gap-4">
        <h3 className="font-bold text-lime-700">Title</h3>
        <h3 className="font-bold text-lime-700">Sent</h3>
        <h3 className="font-bold text-lime-700">Updated</h3>
        <h3 className="font-bold text-lime-700">Status</h3>
      </div>
      <hr></hr>
      {requestInfo.map((requestInfo, index) => (
        <>
          <div className="rental-dashboard-request grid md:grid-cols-4 gap-4 py-3">
            <h3 className="text-slate-500">{requestInfo.title}</h3>
            <h3 className="text-slate-500">{requestInfo.sent}</h3>
            <h3 className="text-slate-500">{requestInfo.updated}</h3>
            <h3 className="text-slate-500">{requestInfo.status}</h3>
          </div>
          <hr></hr>
        </>
      ))}
    </div>
  );
}
