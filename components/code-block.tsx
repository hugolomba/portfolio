"use client";

import { CodeBlock, CodeBlockCode } from "@/components/ui/code-block";

export function CodeBlockBasic() {
  const code = `const hugo = {
  ethics: "solid",
  code: "clean",
  lean: "fast",
  curiosity: "high",
  softSkills: [
    "leadership",
    "teamwork",
    "communication",
    "problem-solving",
  ],
};`;

  return (
    <div className="z-0 h-full w-full overflow-hidden rounded-[2rem] border border-gray-200/70 bg-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm">
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

      <CodeBlock className="bg-[#1f2328] px-5 py-5">
        <CodeBlockCode
          className="h-full text-sm leading-7"
          code={code}
          language="javascript"
        />
      </CodeBlock>
    </div>
  );
}
