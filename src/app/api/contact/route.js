import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  // TODO: save to Supabase
  return NextResponse.json({ success: true, data: body });
}
