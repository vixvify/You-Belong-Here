import { NextRequest } from "next/dist/server/web/spec-extension/request";
import { prisma } from "@/lib/prisma";
import { success, fail } from "@/lib/response";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const created = await prisma.data.create({ data });
    return success(created, 201);
  } catch (err) {
    console.error(err);
    return fail("Failed to create data", 400, "CREATE_FAILED");
  }
}
