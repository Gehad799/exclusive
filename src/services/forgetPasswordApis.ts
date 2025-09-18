'use server'
import {
  ForgetPasswordPayload,
  ForgetPasswordResponse,
} from "@/interfaces/auth";

export async function foregtPassword(
  body: ForgetPasswordPayload
): Promise<ForgetPasswordResponse> {
  try {
    const res = await fetch(
  `${process.env.API_BASE_URL}/api/v1/auth/forgotPasswords`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: body.email,
        }),
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.message);
    }
    return {
      message: data?.message,
      statusMsg: data?.statusMsg,
    };
  } catch (error) {
    console.log(error);
    return {
      message: (error as Error).message,
      statusMsg: "error",
    };
  }
}
