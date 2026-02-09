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
    <div className="border-border z-0 w-full h-full rounded-3xl border">
      <div className="border-border flex flex-col gap-y-2 p-2">
        <div className="flex flex-row gap-x-2">
          <div className="h-4 w-4 rounded-full bg-red-500"></div>
          <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
        </div>
      </div>

      <CodeBlock className=" bg-[#24292E]">
        <CodeBlockCode className="h-full" code={code} language="javascript" />
      </CodeBlock>
    </div>
  );
}
