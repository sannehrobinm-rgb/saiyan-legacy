import Link from "next/link";

const personnages = [
  { nom: "Goku", type: "Saiyan · Niveau 9000+" },
  { nom: "Vegeta", type: "Prince · Saiyan" },
  { nom: "Gohan", type: "Demi-Saiyan" },
  { nom: "Piccolo", type: "Namek · Mentor" },
];

const sagas = [
  { numero: "01", nom: "Saiyan", texte: "L'arrivée de Raditz" },
  { numero: "02", nom: "Namek", texte: "Les Dragon Balls" },
  { numero: "03", nom: "Freezer", texte: "Super Saiyan" },
  { numero: "04", nom: "Cell", texte: "L'arène parfaite" },
  { numero: "05", nom: "Boo", texte: "Le réveil du mal" },
];

export default function Home() {
  return (
    <main className="page">
      <header className="navigation">
        <div className="logo">
          SAIYAN <span>LEGACY</span>
        </div>

        <nav>
          <Link href="/">Accueil</Link>
          <Link href="/saiyans">Personnages</Link>
          <Link href="/timeline">Arcs</Link>
          <Link href="/transformations">Boutique</Link>
        </nav>

        <Link href="/saiyans" className="bouton-nav">
          Explorer →
        </Link>
      </header>

      <section className="hero">
        <div className="hero-texte">
          <p className="surtitre">Vol. I · L’héritage Saiyan</p>

          <h1>
            SAIYAN <br />
            <span>LEGACY</span>
          </h1>

          <p className="intro">
            Explore l’univers de Dragon Ball comme un vieux magazine d’aventure :
  héros, rivaux, transformations et sagas mythiques réunis dans une expérience
  interactive.(fr)
          </p>
     {/*       <p className="intro">
            Explore the Dragon Ball universe like a vintage adventure magazine.(Angl)
          </p>
           <p className="intro">
            Explora el universo de Dragon Ball como una revista de aventuras vintage..(Esp)
          </p>

         <P> ドラゴンボールの世界を、昔の冒険雑誌のように探検しよう。</P> */}

          <div className="actions">
            <Link href="/saiyans">Découvrir</Link>
            <Link href="/saiyans">Personnages</Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="cercle"></div>
          <div className="placeholder">Illus. Hero</div>
        </div>
      </section>

      <section className="section">
        <div className="titre-section">
          <h2>Personnages</h2>
          
        </div>

        <div className="grille-personnages">
          {personnages.map((personnage) => (
            <article className="carte" key={personnage.nom}>
              <div className="image-mini">img</div>
              <h3>{personnage.nom}</h3>
              <p>{personnage.type}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="titre-section">
          <h2>Sagas</h2>
        </div>

        <div className="bande-sagas">
          {sagas.map((saga) => (
            <article key={saga.numero}>
              <strong>{saga.numero}</strong>
              <h3>{saga.nom}</h3>
              <p>{saga.texte}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          SAIYAN <span>LEGACY</span>
        </p>
        <p>Site FAN · Dragon ball</p>
      </footer>
    </main>
  );
}