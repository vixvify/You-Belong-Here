import { ScenesData } from "@/data/story";
import { notFound } from "next/navigation";
import SceneClient from "./scene";

type PageProps = {
  params: {
    scene_no: string;
  };
};

export default async function ScenePage({ params }: PageProps) {
  const { scene_no } = await params;

  const scene = ScenesData[scene_no];

  if (!scene) return notFound();

  return <SceneClient scene={scene} />;
}
