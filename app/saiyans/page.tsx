import { prisma } from "@/lib/prisma";
import type { Character } from "@prisma/client";

export default async function SaiyansPage() {
  const characters: Character[] = await prisma.character.findMany({
    orderBy: {
      /* powerLevel: "desc", */
      id: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <h1 className="text-4xl font-bold text-yellow-400">
        Saiyan Legacy
      </h1>

      <h2 className="mt-6 text-2xl">Personnages</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {characters.map((character) => (
          <div key={character.id} className="bg-zinc-900 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-yellow-300">
              {character.name}
            </h3>

            <p className="text-gray-400">{character.race}</p>

            <p className="mt-2 text-gray-300">
              {character.description}
            </p>

            <p className="mt-3 text-yellow-400">
              Puissance : {character.powerLevel}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}