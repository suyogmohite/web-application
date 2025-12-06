import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <section className="flex items-center">
        <div className="grid gap-10 md:grid-cols-2 items-center w-full">
          <div>
            <p className="text-xs text-sky-400 mb-2 uppercase tracking-wide">
              Simple • Clean • Functional
            </p>
            <h1 className="text-4xl font-bold mb-3">
              Showcase Your Project In{" "}
              <span className="text-sky-400">3 Easy Steps</span>
            </h1>
            <p className="text-slate-300 mb-5 text-sm max-w-lg">
              Enter details → submit → view details instantly.
            </p>

            <Link
              to="/form"
              className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2.5 rounded-xl text-sm shadow-lg shadow-sky-500/30"
            >
              Get Started
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Hero;
