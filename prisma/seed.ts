import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() { 
  
  // 🧹 Nettoie la table avant de reseed
  await prisma.character.deleteMany();

  // 🌱 Données
  await prisma.character.createMany({
    data: [
      { name: "Goku", race: "Saiyan", description: "Le guerrier Saiyan élevé sur Terre." , powerLevel: 9000 },
      { name: "Vegeta", race: "Saiyan", description: "Prince des Saiyans, rival de Goku." , powerLevel: 8500 },
      { name: "Broly", race: "Saiyan", description: "Le Saiyan légendaire.", powerLevel: 15000 },
      { name: "Gohan", race: "Demi-Saiyan", description: "Fils de Goku." , powerLevel: 7000 },
      { name: "Piccolo", race: "Namek", description: "Mentor de Gohan." , powerLevel: 6000 },
    ],
  });

  console.log("Seed terminé !");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });