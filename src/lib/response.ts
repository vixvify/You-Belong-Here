import { NextResponse } from "next/server";
import { ApiResponse } from "@/infra/interface/response";

export function success<T>(data: T, status = 200, code = "SUCCESS") {
  const body: ApiResponse<T> = {
    data,
    status,
    statusCode: code,
  };

  return NextResponse.json(body, { status });
}

export function fail(message: string, status = 400, code = "ERROR") {
  const body = {
    error: message,
    status,
    statusCode: code,
  };

  return NextResponse.json(body, { status });
}
