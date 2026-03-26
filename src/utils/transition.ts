"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TransitionType } from "@/core/domain/scene";

export function useSceneTransition() {
  const router = useRouter();
  const [transition, setTransition] = useState<TransitionType | null>(null);

  const goTo = (next: string, type: TransitionType) => {
    if (type === "cut") {
      router.replace(`/scenes/${next}`);
      return;
    }

    setTransition(type);

    setTimeout(() => {
      router.replace(`/scenes/${next}`);
    }, 300);
  };

  return { transition, goTo };
}
