"use client";

import { useTransitionStore } from "@/store/transition";

export default function TransitionOverlay() {
  const transition = useTransitionStore((s) => s.transition);

  if (!transition) return null;

  const { type, phase } = transition;

  const base = "absolute inset-0 z-50 pointer-events-none";
  const bg = type === "white-fade" ? "bg-white" : "bg-black";
  const anim = phase === "enter" ? "animate-fade-in" : "animate-fade-out";

  return <div className={`${base} ${bg} ${anim}`} />;
}
