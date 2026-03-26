import { TransitionType } from "@/core/domain/scene";

export default function TransitionOverlay({
  type,
}: {
  type: TransitionType | null;
}) {
  if (!type) return null;

  const base = "fixed inset-0 z-50 pointer-events-none";

  if (type === "black-fade") {
    return (
      <div
        className={`${base} bg-black animate-[opacity_0.3s_ease_forwards]`}
      />
    );
  }

  if (type === "white-fade") {
    return (
      <div
        className={`${base} bg-white animate-[opacity_0.3s_ease_forwards]`}
      />
    );
  }

  if (type === "blink") {
    return (
      <div className="fixed inset-0 bg-black z-50 pointer-events-none animate-[opacity_0.1s_linear_0s_2]" />
    );
  }

  return null;
}
