import './Header.css';

function Header() {
  const DateDuJour = new Date().toLocaleDateString('fr-FR');
  return (
    <header className="header">
      <h1 className="header-titre">SenTransport</h1>
      <p className="header-sousTitre">
        Votre guide du transport en commun a Dakar
      </p>
      <p>{DateDuJour}</p>
    </header>
  );
}

export default Header;