import { SceneProps } from "@/core/domain/scene";

export default function Custom1({ scene, goTo }: SceneProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-center animate-fade-in-common">
        <h1 className="text-3xl font-bold mb-6">คำเตือน</h1>

        <div className="text-gray-800 leading-7 space-y-2 text-[15px]">
          <p>เนื้อหานี้ถูกออกแบบในรูปแบบเกม</p>
          <p>เพื่อสำรวจและทำความเข้าใจตนเอง</p>
          <p>
            เกี่ยวกับภาวะ{" "}
            <span className="font-semibold">Impostor Syndrome</span>
          </p>

          <p className="mt-4">
            ทางทีมผู้พัฒนาขออนุญาต เก็บข้อมูลเพื่อนำไปใช้ศึกษา
          </p>
          <p>และพัฒนาเนื้อหาให้ดียิ่งขึ้นในอนาคต</p>

          <p className="mt-4">โดยข้อมูลที่จัดเก็บจะถูกนำไปใช้อย่างระมัดระวัง</p>
          <p>และไม่เปิดเผยตัวตนของผู้เล่น</p>

          <p className="mt-4">บางคำถามอาจกระตุ้นความรู้สึก</p>
          <p>ไม่สบายใจ หรือความคิดด้านลบได้</p>

          <p className="mt-4">
            หากคุณรู้สึกไม่สบายใจ สามารถหยุดเล่นได้ทุกเมื่อ
          </p>
          <p>และควรดูแลจิตใจของตนเอง อย่างเหมาะสม</p>
        </div>

        <button
          className="mt-10 text-gray-900 underline hover:text-black transition cursor-pointer"
          onClick={() => {
            if (scene.next) {
              goTo(scene.next, scene.transition ?? "cut");
            }
          }}
        >
          คลิกเพื่อเริ่ม
        </button>
      </div>
    </div>
  );
}
