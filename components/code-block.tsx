export function CodeBlockBasic() {
  return (
    <div className="z-0 w-full overflow-hidden rounded-[2rem] border border-gray-200/70 bg-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm">
      <div className="flex flex-col gap-y-3 border-b border-gray-200/70 bg-white/80 px-5 py-4">
        <div className="flex items-center gap-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400/90"></div>
          <div className="h-3 w-3 rounded-full bg-amber-400/90"></div>
          <div className="h-3 w-3 rounded-full bg-green-400/90"></div>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
          Code Snapshot
        </p>
      </div>

      <div className="bg-[#1f2328] px-5 py-6 sm:px-6">
        <pre className="overflow-x-auto font-mono text-sm leading-7">
          <code>
            <span className="block">
              <span className="text-rose-400">const </span>
              <span className="text-sky-400">hugo </span>
              <span className="text-zinc-100">= {"{"}</span>
            </span>

            <span className="block pl-6 text-zinc-200">
              ethics: <span className="text-sky-300">&quot;solid&quot;</span>,
            </span>
            <span className="block pl-6 text-zinc-200">
              code: <span className="text-sky-300">&quot;clean&quot;</span>,
            </span>
            <span className="block pl-6 text-zinc-200">
              lean: <span className="text-sky-300">&quot;fast&quot;</span>,
            </span>
            <span className="block pl-6 text-zinc-200">
              curiosity: <span className="text-sky-300">&quot;high&quot;</span>,
            </span>
            <span className="block pl-6 text-zinc-200">softSkills: [</span>
            <span className="block pl-12 text-sky-300">
              &quot;leadership&quot;,
            </span>
            <span className="block pl-12 text-sky-300">
              &quot;teamwork&quot;,
            </span>
            <span className="block pl-12 text-sky-300">
              &quot;communication&quot;,
            </span>
            <span className="block pl-12 text-sky-300">
              &quot;problem-solving&quot;
            </span>
            <span className="block pl-6 text-zinc-200">],</span>
            <span className="block text-zinc-100">{"};"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
