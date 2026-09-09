import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Breadcrumb from '../components/Breadcrumb';
import { CheckCircle, MapPin, Clock, Building, ArrowRight } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const { data } = useApp();
  const { projects } = data;

  const project = projects.find((p) => p.id === id) || projects[0];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Projects', link: '/projects' },
          { label: project.title }
        ]}
      />

      {/* Header */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-slate-950 text-white font-mono text-xs font-bold uppercase tracking-wider">
                {project.type.toUpperCase()}
              </span>
              <span className="text-xs font-mono text-slate-500">Ref: {project.id.toUpperCase()}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
              {project.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Showcase */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Gallery & Scope (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover"
                  onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                />
              </div>

              {/* Scope Checklist */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-extrabold text-slate-950 font-heading mb-6 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span>Scope of Work &amp; Structural Execution</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.scope?.map((sc, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed font-medium">{sc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {project.gallery && (
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-extrabold text-slate-950 font-heading mb-6">
                    Construction Photo Gallery
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.gallery.map((img, i) => (
                      <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                        <img
                          src={img}
                          alt="Gallery"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Technical Card (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm sticky top-28">
                <h3 className="font-extrabold text-slate-950 text-base font-heading mb-4 pb-3 border-b border-slate-100">
                  Project Technical Data
                </h3>

                <div className="space-y-3.5 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-bold text-slate-900">{project.location}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Built-Up Area:</span>
                    <span className="font-bold text-slate-900">{project.area}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Timeline:</span>
                    <span className="font-bold text-slate-900">{project.duration}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Client:</span>
                    <span className="font-bold text-slate-900">{project.client}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Architect:</span>
                    <span className="font-bold text-slate-900">{project.architect}</span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 space-y-3">
                  <Link
                    to="/get-a-quote"
                    className="w-full py-3.5 bg-slate-950 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 transition-all shadow"
                  >
                    <span>ESTIMATE SIMILAR PROJECT →</span>
                  </Link>
                </div>

                {/* Other Projects */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider mb-3">
                    Other Case Studies
                  </h4>
                  <div className="space-y-2">
                    {projects
                      .filter((p) => p.id !== project.id)
                      .slice(0, 3)
                      .map((p) => (
                        <Link
                          key={p.id}
                          to={`/projects/${p.id}`}
                          className="block p-3 rounded-xl border border-slate-100 hover:border-amber-300 hover:bg-slate-50 transition-all text-xs"
                        >
                          <div className="font-bold text-slate-900">{p.title}</div>
                          <div className="text-[11px] text-slate-500 font-mono mt-0.5">{p.area} • {p.type}</div>
                        </Link>
                      ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
