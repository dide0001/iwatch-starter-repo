import HeroText from "./HeroText"
import HeroImage from "./HeroImage"

export default function Hero({ selectedWatch }) {
  return (
    <section className="hero" style={{ transition: "background 0.4s" }}>
      <div className="hero-inner">
        <HeroText />
        <HeroImage src={selectedWatch.src} />
      </div>
    </section>
  )
}