import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const characters = await prisma.character.findMany({
    include: { transformations: true, relationships: true },
  });
  return NextResponse.json(characters);
}