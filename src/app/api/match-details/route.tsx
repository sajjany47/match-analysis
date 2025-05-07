import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log(request.body);
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
