type Choice = {
  A: string;
  B: string;
  C: string;
};

type SceneType = "common" | "choice";

export type Scene = {
  video: string;
  next: string | null;
  choice: Choice | null;
  type: SceneType;
};

type ScenesDataType = {
  [key: string]: Scene;
};

export const ScenesData: ScenesDataType = {
  scene_1: { video: "", next: "", choice: null, type: "common" },
  scene_2: { video: "", next: "", choice: null, type: "common" },
  scene_3: { video: "", next: "", choice: null, type: "common" },
  scene_4: { video: "", next: "", choice: null, type: "common" },
  scene_5: { video: "", next: "", choice: null, type: "common" },
  scene_6: { video: "", next: "", choice: null, type: "common" },
  scene_7: { video: "", next: "", choice: null, type: "common" },
  scene_8: { video: "", next: "", choice: null, type: "common" },
  scene_9: { video: "", next: "", choice: null, type: "common" },
  scene_10: { video: "", next: "", choice: null, type: "common" },

  scene_11: { video: "", next: "", choice: null, type: "common" },
  scene_12: { video: "", next: "", choice: null, type: "common" },
  scene_13: { video: "", next: "", choice: null, type: "common" },
  scene_14: { video: "", next: "", choice: null, type: "common" },
  scene_15: { video: "", next: "", choice: null, type: "common" },
  scene_16: { video: "", next: "", choice: null, type: "common" },
  scene_17: { video: "", next: "", choice: null, type: "common" },
  scene_18: { video: "", next: "", choice: null, type: "common" },
  scene_19: { video: "", next: "", choice: null, type: "common" },
  scene_20: { video: "", next: "", choice: null, type: "common" },

  scene_21: { video: "", next: "", choice: null, type: "common" },
  scene_22: { video: "", next: "", choice: null, type: "common" },
  scene_23: { video: "", next: "", choice: null, type: "common" },
  scene_24: { video: "", next: "", choice: null, type: "common" },
  scene_25: { video: "", next: "", choice: null, type: "common" },
  scene_26: { video: "", next: "", choice: null, type: "common" },
  scene_27: { video: "", next: "", choice: null, type: "common" },
  scene_28: { video: "", next: "", choice: null, type: "common" },
  scene_29: { video: "", next: "", choice: null, type: "common" },
  scene_30: { video: "", next: "", choice: null, type: "common" },

  scene_31: { video: "", next: "", choice: null, type: "common" },
  scene_32: { video: "", next: "", choice: null, type: "common" },
  scene_33: { video: "", next: "", choice: null, type: "common" },
  scene_34: { video: "", next: "", choice: null, type: "common" },
  scene_35: { video: "", next: "", choice: null, type: "common" },
  scene_36: { video: "", next: "", choice: null, type: "common" },
  scene_37: { video: "", next: "", choice: null, type: "common" },
  scene_38: { video: "", next: "", choice: null, type: "common" },
  scene_39: { video: "", next: "", choice: null, type: "common" },
  scene_40: { video: "", next: "", choice: null, type: "common" },

  scene_41: { video: "", next: "", choice: null, type: "common" },
  scene_42: { video: "", next: "", choice: null, type: "common" },
  scene_43: { video: "", next: "", choice: null, type: "common" },
  scene_44: { video: "", next: "", choice: null, type: "common" },
  scene_45: { video: "", next: "", choice: null, type: "common" },
  scene_46: { video: "", next: "", choice: null, type: "common" },
  scene_47: { video: "", next: "", choice: null, type: "common" },
  scene_48: { video: "", next: "", choice: null, type: "common" },
  scene_49: { video: "", next: "", choice: null, type: "common" },
  scene_50: { video: "", next: null, choice: null, type: "common" },
};
