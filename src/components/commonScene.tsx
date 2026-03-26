import { Scene } from "@/data/story";

type SceneProps = {
  scene: Scene;
};

export function CommonScene({ scene }: SceneProps) {
  return (
    <div>
      <video src={scene.video} autoPlay />
      {scene.next && <button>Next</button>}
    </div>
  );
}
