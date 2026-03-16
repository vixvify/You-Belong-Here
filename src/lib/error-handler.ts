import { ApiError } from "./api-error";

const errorMessages: Record<string, string> = {
  USER_NOT_FOUND: "ไม่พบผู้ใช้",
  INVALID_TOKEN: "Session หมดอายุ",
};

export function handleError(error: unknown): string {
  if (error instanceof ApiError) {
    if (error.status === 401) {
      return "กรุณา login ใหม่";
    }

    if (error.code && errorMessages[error.code]) {
      return errorMessages[error.code];
    }

    return error.message;
  }

  return "Something went wrong";
}
