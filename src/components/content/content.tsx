import Image from "next/image";
import "./content.scss";
import ContactForm from "./form";
export default function Content() {
  return (
    <section id="oferta">
      <div className="offer-wrapper">
        <div className="offer-container">
          <div className="price-offer block">
            <div className="offer-heading">
              <h1>Dom w Domasławice, Pod Darłowem, Rok 2023</h1>
            </div>
            <div className="offer-price ">
              <h2>
                1.250.000 zł <span>7142 zł/m²</span>
              </h2>
            </div>
            <div className="offer-cards">
              <span className="card">Nowoczesny</span>
              <span className="card">Przestronny</span>
              <span className="card">Blisko Morza</span>
            </div>
            <div className="offer-local">
              <Image
                src="/map-marker-icon.svg"
                alt="Marker mapy"
                width={24}
                height={24}
              />
              Domasławice, 4km od Darłowa, Zachodnio-Pomorskie
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
          <div className="full-description block">
            <p>
              <strong>Cena:</strong> 1 250 000 zł (do negocjacji)
            </p>
            <p>
              <strong>Rynek:</strong> Pierwotny
            </p>
            <p>
              <strong>Forma własności:</strong> Własność
            </p>

            <h2>Charakterystyka domu:</h2>
            <ul>
              <li>
                <strong>Powierzchnia:</strong> 174,24 m² powierzchni użytkowej
                razem z garażem
              </li>
              <li>
                <strong>Pokoje:</strong> 4
              </li>
              <li>
                <strong>Łazienki:</strong> 2 (wanna, prysznic, oddzielne WC)
              </li>
              <li>
                <strong>Stan:</strong> częściowo umeblowany/do umeblowania
              </li>
              <li>
                <strong>Budynek:</strong> Dom wolnostojący
              </li>
              <li>
                <strong>Rok budowy:</strong> 2023
              </li>
              <li>
                <strong>Technika budowy:</strong> Tradycyjna
              </li>
              <li>
                <strong>Pokrycie dachu:</strong> Dachówka ceramiczna
              </li>
            </ul>

            <h2>Działka:</h2>
            <ul>
              <li>
                <strong>Powierzchnia:</strong> 1 409 m²
              </li>
              <li>
                <strong>Teren:</strong> Płaski
              </li>
              <li>
                <strong>Dojazd:</strong> Drogą asfaltową
              </li>
              <li>
                <strong>Ogrodzenie:</strong> Częściowe
              </li>
            </ul>

            <h2>Powierzchnia dodatkowa:</h2>
            <ul>
              <li>Taras</li>
              <li>Strych</li>
            </ul>

            <h2>Wyposażenie:</h2>
            <ul>
              <li>
                <strong>Kuchnia:</strong> Gotowa do użytku wyposażona w
                nowoczesny sprzęt, Duża lodówka multidoor, duża płyta indukcyjna
                80cm, okap, mikrofalówka i piekarnik w zabudowie, zlew. (sprzęt
                nowy)
              </li>
              <li>
                <strong>Łazienki:</strong> Wanna, 2x prysznic, oddzielne WC
              </li>
              <li>
                <strong>Media:</strong> Gotowe do użytku:
                <ul>
                  <li>Woda miejska/wodociąg</li>
                  <li>Kanalizacja</li>
                  <li>Energia elektryczna</li>
                  <li>
                    Przygotowanie pod instalację paneli fotowoltaicznych dla
                    zachowania efektywności energetycznej
                  </li>
                </ul>
              </li>
            </ul>

            <h2>Ogrzewanie:</h2>
            <ul>
              <li>
                Podłogowe (150m2), pompa ciepła, kominek z płaszczem wodnym,
                opcjonalnie gazowe
              </li>
            </ul>

            <h2>Bezpieczeństwo:</h2>
            <ul>
              <li>Drzwi antywłamaniowe</li>
              <li>Teren ogrodzony</li>
            </ul>

            <h2>Miejsce postojowe:</h2>
            <ul>
              <li>
                Garaż w bryle budynku (2 miejsca parkingowe, ogrzewany
                podłogówka)
              </li>
            </ul>

            <h2>Lokalizacja:</h2>
            <p>
              <strong>Adres:</strong> Domasławice, Darłowo, sławieński,
              zachodniopomorskie
            </p>
            <p>
              <strong>Otoczenie:</strong> Luźna zabudowa jednorodzinna
            </p>
            <p>
              <strong>Cicha okolica:</strong> Idealne miejsce do życia
            </p>

            <h2>Opis nieruchomości:</h2>
            <p>
              Odkryj spokój w nowym domu położonym w malowniczej wsi
              Domasławice, zaledwie 4 km od nadmorskiego Darłowa. Idealne
              miejsce dla tych, którzy szukają rekreacji i stylu życia blisko
              morza.
            </p>
            <p>
              <strong>Układ:</strong> Otwarty salon połączony z kuchnią, trzy
              sypialnie, dwie łazienki.
            </p>
            <p>
              <strong>Garaż:</strong> Dwustanowiskowy ogrzewany garaż o
              powierzchni 32,72 m2.
            </p>
            <p>
              <strong>Poddasze:</strong> Przestronne (dodatkowe 40 m2 z
              możliwością do adaptacji).
            </p>

            <h3>Wnętrze i Wykończenie:</h3>
            <ul>
              <li>
                <strong>Salon i Kuchnia:</strong> Przestronny, z nowoczesnymi
                udogodnieniami, idealny do życia rodzinnego i rozrywki.
              </li>
              <li>
                <strong>Sypialnie:</strong> Trzy lub cztery komfortowe
                sypialnie, zapewniające prywatność i spokój.
              </li>
              <li>
                <strong>Łazienki:</strong> Dwie eleganckie łazienki.
              </li>
            </ul>

            <h3>Zewnętrzne i Dodatkowe Funkcje:</h3>
            <ul>
              <li>
                <strong>Działka:</strong> Duża działka z możliwościami aranżacji
                ogrodu.
              </li>
              <li>
                <strong>Technologia i Ekologia:</strong> Trzyszybowe okna,
                dachówka ceramiczna, ogrzewanie podłogowe, kominkowe i z pompą
                ciepła, opcjonalnie gazowe.
              </li>
            </ul>

            <h3>Potencjał Inwestycyjny:</h3>
            <p>
              <strong>Wartość inwestycji:</strong> Dom stanowi atrakcyjną
              inwestycję z potencjałem wzrostu wartości.
            </p>

            <p>
              Zapraszamy na prezentację tej wyjątkowej nieruchomości, by
              przekonać się o jej uroku i możliwościach. Idealna propozycja dla
              osób poszukujących domu z charakterem i komfortem w doskonałej
              lokalizacji.
            </p>

            <h3>Lokalizacja:</h3>
            <p>Domasławice, gm. Darłowo województwo zachodniopomorskie.</p>

            <p>
              <strong>Cena:</strong> 1 250 000 zł do negocjacji
            </p>

            <p>
              <strong>Adres:</strong> Domasławice, gmina Darłowo, powiat
              sławieński
            </p>
            <p>
              <strong>Na sprzedaż:</strong> Dom wolnostojący o powierzchni
              174,24 m² z garażem, 4 pokoje, wybudowany w 2023 roku
            </p>
            <p>
              <strong>Działka:</strong> 1409 m²
            </p>
            <p>
              <strong>Budynek:</strong> Z poddaszem użytkowym, w stanie do
              zamieszkania, z osobną kuchnią
            </p>
            <p>
              <strong>Taras:</strong> Tak, bez piwnicy
            </p>
            <p>
              <strong>Garaż:</strong> Na 2 samochody, ogrzewanie podłogowe
            </p>
            <p>
              <strong>Materiał budowy:</strong> Beton komórkowy, dachówka, okna
              plastikowe
            </p>
            <p>
              <strong>Dojazd:</strong> Asfalt, ogrodzenie murowane
            </p>
            <p>
              <strong>Media:</strong> Woda, kanalizacja, prąd
            </p>
            <p>
              <strong>Wyposażenie:</strong> Lodówka, kuchenka, piekarnik,
              zmywarka, mikrofalówka
            </p>
            <p>
              <strong>Cena do negocjacji</strong>
            </p>
            <p>
              <strong>Ogłoszenie bezpośrednio od właściciela</strong>
            </p>
          </div>
        </div>
        <div className="contact-wrapper block">
          <div className="contact-heading">
            <h3>Adrian</h3>
            <span>Oferta prywatna</span>
            <p>Tel: 889 794 479</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
