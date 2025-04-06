import Image from "next/image";
import "./content.scss";
import ContactForm from "./form";
export default function Content() {
  return (
    <section id="oferta">
      <div className="offer-wrapper">
        <div className="price-offer block">
          <div className="offer-heading">
            <h1>Dom w Domasławice, Pod Darłowem, Rok 2023</h1>
          </div>

          <div className="offer-price ">
            <h2>
              1.250.000 PLN <span>7142 zł/m²</span>
            </h2>
          </div>
          <div className="offer-cards">
            <span className="card">Nowoczesny</span>
            <span className="card">Przestronny</span>
            <span className="card">Blisko Morza</span>
          </div>
          <div className="offer-local">
            <img src="./img/map-marker-icon.svg" alt="Marker mapy" />
            Domasławice, 4km od Darłowa
          </div>
        </div>
        <div className="contact-wrapper block">
          <div className="contact-heading">
            <span>Adrian</span>
            <span>Oferta prywatna</span>
            <span>Tel: 889 794 479</span>
            <ContactForm />
          </div>
        </div>
        <div className="offer-description block">
          <div className="description-heading">
            <h2>Dom na sprzedaż</h2>
          </div>
          <div className="description-cards">
            <div className="card">
              <Image src="/home-add.svg" alt="Dom" width={24} height={24} />
              <span>175m², 4 Pokoje, 2 Łazienki</span>
            </div>
            <div className="card">
              <Image
                src="/garage-icon.svg"
                alt="Garaż"
                width={24}
                height={24}
              />
              <span>Ogrzewany garaż 33m²</span>
            </div>
            <div className="card">
              <Image
                src="/dimensions-icon.svg"
                alt="Działka"
                width={24}
                height={24}
              />
              <span>1409m²</span>
            </div>
          </div>
          <div className="description-content">
            <div className="content-row">
              <p>Rodzaj zabudowy:</p>
              <p>wolnostojący</p>
            </div>
            <div className="content-row">
              <p>Stan wykończenia:</p>
              <p>do zamieszkania</p>
            </div>
            <div className="content-row">
              <p>Rynek:</p>
              <p>pierwotny</p>
            </div>
            <div className="content-row">
              <p>Typ ogłoszeniodawcy:</p>
              <p>prywatny</p>
            </div>
            <div className="content-row">
              <p>Ogrzewanie:</p>
              <ul>
                <li>elektryczne</li>
                <li>kominkowe</li>
                <li>gazowe</li>
                <li>pompa ciepła</li>
              </ul>
            </div>
            <div className="content-row">
              <p>Informacje dodatkowe:</p>
              <ul>
                <li>garaż/miejsce parkingowe</li>
                <li>strych</li>
              </ul>
            </div>
            <div className="content-row">
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
