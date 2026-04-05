import { SceneProps } from "@/core/domain/scene";

export default function Custom2({ scene, goTo }: SceneProps) {
  return (
    <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <label className="font-semibold text-black">ชื่อ</label>
          <input
            type="text"
            placeholder="text ..."
            className="w-64 px-4 py-3 rounded-xl bg-gray-300 text-gray-600 placeholder-gray-500 outline-none"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="font-semibold text-black">อายุ</label>
          <input
            type="text"
            placeholder="text ..."
            className="w-64 px-4 py-3 rounded-xl bg-gray-300 text-gray-600 placeholder-gray-500 outline-none"
          />
        </div>

        <button
          className="mt-4 px-8 py-3 rounded-xl bg-gray-300 text-black font-medium hover:bg-gray-400 transition"
          onClick={() => {
            if (scene.next) {
              goTo(scene.next, scene.transition ?? "cut");
            }
          }}
        >
          ยืนยัน
        </button>
      </div>
    </div>
  );
}
