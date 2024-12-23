import { NextResponse, type NextRequest } from "next/server";
import { parse } from "url";
import axios from "@/config/axios-server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    
    const body = await request.json()
    

    const response = await axios({
      method: "POST",
      url: "/auth/login",
      data: body
    });

    // Set cookies from response headers
    const cookiesToSet = response.headers["set-cookie"];
    if (cookiesToSet) {
      cookiesToSet.forEach((cookie) => {
        const [name, value] = cookie.split(";")[0].split("=");

        cookies().set(name, value);
      });
    }

    cookies().set({
      name: "simon-user_name",
      value: response?.data?.full_name,
      path: "/",
    });

    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message },
      { status: error?.response?.status || 500 },
    );
  }
}
