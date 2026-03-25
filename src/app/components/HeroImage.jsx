import Image from "next/image"

export default function HeroImage({ src }) {
  return (
    <div className="hero-image">
      <Image
        src={src}
        alt="iWatch"
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
  )
}