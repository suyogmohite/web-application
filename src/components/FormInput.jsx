export default function FormInput({ label, name, type="text", value, onChange, error }) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-slate-100">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
