import { SceneUrls } from "./video_url";
import { ScenesDataType } from "@/core/domain/scene";

const commonScenes: ScenesDataType = Object.fromEntries(
  Array.from({ length: 50 }, (_, i) => {
    const id = i + 1;
    const key = `scene_${id}`;

    return [
      key,
      {
        video: SceneUrls[key as keyof typeof SceneUrls],
        next: id < 50 ? `scene_${id + 1}` : null,
        type: "common",
        choice: null,
      },
    ];
  }),
);

const customScenes: ScenesDataType = {
  scene_10: {
    video: SceneUrls.scene_10,
    next: null,
    type: "choice",
    choice: {
      A: "",
      B: "",
      C: "",
    },
  },
};

export const ScenesData: ScenesDataType = {
  ...commonScenes,
  ...customScenes,
};
