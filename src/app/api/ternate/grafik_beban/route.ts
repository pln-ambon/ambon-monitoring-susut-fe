import { NextResponse, type NextRequest } from "next/server";
import axios from "@/config/axios-server";

export async function GET(request: NextRequest) {
  try {
    const { data } = await axios({
      method: "GET",
      url: "/scada/ternate/grafik-beban",
    });

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message },
      { status: error?.response?.status || 500 },
    );
  }
}
