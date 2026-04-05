export type CustomSceneKey = "custom1" | "custom2" | "custom3";

export type SceneType = "common" | "choice" | "input" | CustomSceneKey;

export type TransitionType = "white-fade" | "black-fade" | "blink" | "cut";

export type Format = "video" | "image";

export type Choice = {
  A: string;
  B: string;
  C: string;
};

export type choiceNext = {
  nextA: string;
  nextB: string;
  nextC: string;
};

export type Scene = {
  src: string | undefined;
  text: string;
  next: string | null;
  type: SceneType;
  format: Format;
  choice: Choice | null;
  choiceNext?: choiceNext;
  transition: TransitionType;
};

export type ScenesDataType = {
  [key: string]: Scene;
};

export type SceneProps = {
  scene: Scene;
  goTo: (next: string, type: TransitionType) => void;
};
