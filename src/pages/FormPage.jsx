import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

export default function FormPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectTitle: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState({});

  const update = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const validate = () => {
    const err = {};
    Object.keys(formData).forEach(key => !formData[key] && (err[key] = "Required"));
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    navigate("/display", { state: formData });
  };

  return (
    <form onSubmit={submit} className="max-w-xl mx-auto space-y-4 p-6 bg-slate-900/60 border border-slate-800 rounded-xl">
  <FormInput label="Full Name" name="fullName" value={formData.fullName} onChange={update} error={errors.fullName}/>
  <FormInput label="Email" name="email" type="email" value={formData.email} onChange={update} error={errors.email}/>
  <FormInput label="Project Title" name="projectTitle" value={formData.projectTitle} onChange={update} error={errors.projectTitle}/>

  {/* Project Description */}
  <div className="space-y-1">
    <label className="text-sm text-slate-100 font-medium">Project Description</label>
    <textarea
      name="projectDescription"
      rows="4"
      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      onChange={update}
      value={formData.projectDescription}
    />
    {errors.projectDescription && (
      <p className="text-xs text-red-400">{errors.projectDescription}</p>
    )}
  </div>

  <button className="w-full bg-sky-500 hover:bg-sky-400 text-white py-2.5 rounded-xl font-medium">
    Submit & View
  </button>
</form>

  );
}
