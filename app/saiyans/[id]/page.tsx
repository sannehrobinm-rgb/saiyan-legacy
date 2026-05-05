import { prisma } from "@/lib/prisma";
import Link from "next/link";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function PersonnagePage({ params }: PageProps) {
  const { id } = params;

  const personnage = await prisma.character.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!personnage) {
    return (
      <main className="min-h-screen bg-black p-6 text-white">
        <h1>Personnage introuvable</h1>
        <Link href="/saiyans">Retour aux personnages</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <Link href="/saiyans" className="text-yellow-400">
        ← Retour
      </Link>

      <section className="mt-8 rounded-xl border border-yellow-500/30 bg-zinc-900 p-6">
        <h1 className="text-4xl font-bold text-yellow-400">
          {personnage.name}
        </h1>

        <p className="mt-2 text-gray-400">{personnage.race}</p>

        <p className="mt-6 text-lg text-gray-200">
          {personnage.description}
        </p>
      </section>
    </main>
  );
}