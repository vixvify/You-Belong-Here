import { ScenesData } from "@/data/story";
import { CommonScene } from "@/components/commonScene";
import { ChoiceScene } from "@/components/choiceScene";

type PageProps = {
  params: {
    id: string;
  };
};

const SceneComponentMap = {
  common: CommonScene,
  choice: ChoiceScene,
};

export default function ScenePage({ params }: PageProps) {
  const scene = ScenesData[`scene_${params.id}`];

  const Component = SceneComponentMap[scene.type];

  return <Component scene={scene} />;
}
