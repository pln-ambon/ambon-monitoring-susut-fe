import { NextResponse, type NextRequest } from "next/server";
import { parse } from "url";
import axios from "@/config/axios-server";

export async function GET(request: NextRequest) {
  try {
    const { query } = parse(request.url, false);

    const { data } = await axios({
      method: "GET",
      url: "/scada/total-table",
    });

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message },
      { status: error?.response?.status || 500 },
    );
  }
}
