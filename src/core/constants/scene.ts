import { CommonScene } from "@/components/scene/Common";
import { ChoiceScene } from "@/components/scene/Choice";
import { InputScene } from "@/components/scene/Input";
import Custom1 from "@/components/scene/custom/Custom_1";
import Custom2 from "@/components/scene/custom/Custom_2";
import Custom3 from "@/components/scene/custom/Custom_3";
import CommonOverlay from "@/components/overlay/Common";
import ChoiceOverlay from "@/components/overlay/Choice";
import InputOverlay from "@/components/overlay/Input";

export const SceneComponentMap = {
  common: CommonScene,
  choice: ChoiceScene,
  input: InputScene,
  custom1: Custom1,
  custom2: Custom2,
  custom3: Custom3,
};

export const SceneOverlayMap = {
  common: CommonOverlay,
  choice: ChoiceOverlay,
  input: InputOverlay,
};
