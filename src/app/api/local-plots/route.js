import { NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const dataFile = path.join(process.cwd(), "src", "data", "local-plots.json");

async function readPlots() {
  try {
    return JSON.parse(await readFile(dataFile, "utf8"));
  } catch {
    return [];
  }
}

async function writePlots(plots) {
  await mkdir(path.dirname(dataFile), { recursive: true });
  await writeFile(dataFile, JSON.stringify(plots, null, 2), "utf8");
}

export async function GET() {
  return NextResponse.json(await readPlots());
}

export async function POST(request) {
  try {
    const plot = await request.json();
    const plots = await readPlots();
    const existingIndex = plots.findIndex((item) => String(item.id) === String(plot.id));
    const savedPlot = {
      ...plot,
      id: plot.id || `local-${Date.now()}`,
      is_published: plot.is_published !== false,
      updated_at: new Date().toISOString(),
    };

    if (existingIndex >= 0) plots[existingIndex] = { ...plots[existingIndex], ...savedPlot };
    else plots.unshift(savedPlot);

    await writePlots(plots);
    return NextResponse.json(savedPlot);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const plots = (await readPlots()).filter((item) => String(item.id) !== String(id));
    await writePlots(plots);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
