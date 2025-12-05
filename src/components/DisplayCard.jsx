export default function DisplayCard({ fullName, email, projectTitle, projectDescription }) {
  return (
    <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-md space-y-3">
      <h2 className="text-xl font-semibold text-slate-100">{projectTitle}</h2>

      <p><span className="text-xs text-slate-400">Name:</span> {fullName}</p>
      <p><span className="text-xs text-slate-400">Email:</span> {email}</p>
      <p><span className="text-xs text-slate-400">Description:</span>
        <br /> {projectDescription}
      </p>
    </div>
  );
}
