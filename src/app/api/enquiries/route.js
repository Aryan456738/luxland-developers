import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.name?.trim() || !body.phone?.trim()) {
      return NextResponse.json(
        { success: false, error: "Name and phone are required" },
        { status: 400 }
      );
    }
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    const { data, error } = await supabase.from("enquiries").insert({
      name: body.name,
      email: body.email || "",
      phone: body.phone,
      message: body.message || "",
    }).select().single();
    if (error) throw error;
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Could not save enquiry" },
      { status: 400 }
    );
  }
}
