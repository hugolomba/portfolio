import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export default function TerminalComponent() {
  return (
    <Terminal>
      <TypingAnimation>const hugo = &lt;</TypingAnimation>
      <AnimatedSpan>✔ Preflight checks.</AnimatedSpan>
      <AnimatedSpan>✔ Validating Tailwind CSS.</AnimatedSpan>
      <TypingAnimation>
        Success! Project initialization completed.
      </TypingAnimation>
    </Terminal>
  );
}

// const hugo = {
//   ethics: "solid",
//   code: "clean",
//   lean: "fast",
//   curiosity: "high",
//   softSkills: ["leadership", "teamwork", "communication", "problem-solving"],
// };

// export default hugo;
