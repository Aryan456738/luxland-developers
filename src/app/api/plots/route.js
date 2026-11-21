import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { initialPlots } from "@/lib/appData";

async function readLocalPlots() {
  try {
    return JSON.parse(await readFile(path.join(process.cwd(), "src", "data", "local-plots.json"), "utf8"));
  } catch {
    return [];
  }
}

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  const { data, error } = await supabase
    .from("plots")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });
  const localPlots = await readLocalPlots();
  const remotePlots = error ? [] : (data || []);
  const combined = [...initialPlots, ...remotePlots, ...localPlots];
  const deduplicated = combined.reduce((plots, plot) => {
    const index = plots.findIndex((item) => String(item.id) === String(plot.id));
    if (index >= 0) plots[index] = plot;
    else plots.push(plot);
    return plots;
  }, []);
  return NextResponse.json(deduplicated.filter((plot) => plot.is_published !== false));
}
