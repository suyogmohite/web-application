import { useLocation, Link } from "react-router-dom";
import DisplayCard from "../components/DisplayCard";

export default function DisplayPage() {
  const { state } = useLocation();

  if (!state) return (
    <div className="text-center mt-10">
      <p className="text-slate-300 mb-4">No data found.</p>
      <Link to="/form" className="px-4 py-2 bg-sky-500 rounded-xl">Fill Form</Link>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto space-y-5">
      <h1 className="text-2xl font-bold mb-3 text-slate-100">Submitted Details</h1>
      <DisplayCard {...state}/>
    </div>
  );
}
