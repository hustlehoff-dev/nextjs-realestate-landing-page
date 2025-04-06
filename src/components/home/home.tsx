import Image from "next/image";
import "./home.scss";

export default function Hero() {
  return (
    <section id="hero">
      <div className="home-container">
        <div className="image-grid">
          <figure style={{ gridArea: "a" }}>
            <Image src="/dom2.webp" alt="Dom 1" fill />
          </figure>
          <figure style={{ gridArea: "b" }}>
            <Image src="/dom1.webp" alt="Salon w domu" fill />
          </figure>
          <figure style={{ gridArea: "c" }}>
            <Image src="/dom4.webp" alt="Nowoczesna łazienka" fill />
          </figure>
          <figure style={{ gridArea: "d" }}>
            <Image src="/dom.webp" alt="Elegancki front domu" fill />
          </figure>
          <figure style={{ gridArea: "e" }}>
            <Image src="/dom5.webp" alt="Dom z dużym ogrzewanym garażem" fill />
          </figure>
        </div>
      </div>
    </section>
  );
}
