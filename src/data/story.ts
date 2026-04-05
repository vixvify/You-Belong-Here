import { SceneUrls } from "./video_url";
import { ScenesDataType } from "@/core/domain/scene";
import { SceneText } from "@/core/constants/sceneText";

const commonScenes: ScenesDataType = Object.fromEntries(
  Array.from({ length: 50 }, (_, i) => {
    const id = i + 1;
    const key = `scene_${id}`;

    return [
      key,
      {
        src: SceneUrls[key as keyof typeof SceneUrls],
        next: id < 50 ? `scene_${id + 1}` : null,
        text: SceneText[key as keyof typeof SceneText],
        type: "common",
        format: "image",
        choice: null,
        transition: "white-fade",
      },
    ];
  }),
);

const customScenes: ScenesDataType = {
  scene_1: {
    src: "",
    next: "scene_2",
    text: "",
    type: "custom1",
    format: "image",
    choice: {
      A: "",
      B: "",
      C: "",
    },
    choiceNext: {
      nextA: "",
      nextB: "",
      nextC: "",
    },
    transition: "white-fade",
  },
  scene_2: {
    src: "",
    next: "scene_3",
    text: "",
    type: "custom2",
    format: "image",
    choice: {
      A: "",
      B: "",
      C: "",
    },
    choiceNext: {
      nextA: "",
      nextB: "",
      nextC: "",
    },
    transition: "white-fade",
  },
  scene_3: {
    src: "",
    next: "scene_4",
    text: "",
    type: "custom3",
    format: "image",
    choice: {
      A: "",
      B: "",
      C: "",
    },
    choiceNext: {
      nextA: "",
      nextB: "",
      nextC: "",
    },
    transition: "white-fade",
  },
};

export const ScenesData: ScenesDataType = {
  ...commonScenes,
  ...customScenes,
};
