export default function StepCard({ step, title, text }) {
  return (
    <div className="border border-slate-800 rounded-xl p-4">
      <p className="text-xs text-sky-400 mb-1">Step {step}</p>
      <p className="font-medium mb-1 text-slate-100">{title}</p>
      <p className="text-sm text-slate-300">{text}</p>
    </div>
  );
}
