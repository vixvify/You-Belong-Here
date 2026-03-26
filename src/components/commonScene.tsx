"use client";

import { Scene } from "@/core/domain/scene";
import { TransitionType } from "@/core/domain/scene";

type SceneProps = {
  scene: Scene;
  goTo: (next: string, type: TransitionType) => void;
};

export function CommonScene({ scene, goTo }: SceneProps) {
  return (
    <div
      onClick={() => {
        if (scene.next) {
          goTo(scene.next, scene.transition ?? "cut");
        }
      }}
    >
      <video src={scene.video} autoPlay />
    </div>
  );
}
