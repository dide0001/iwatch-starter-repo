import Image from "next/image"

export default function WatchColors({ setSelectedWatch }) {
  const watches = [
    { src: "/color-1.png", alt: "iWatch grå", bg: "#8892a4" },
    { src: "/color-2.png", alt: "iWatch turkis", bg: "#6dcfc7" },
    { src: "/color-3.png", alt: "iWatch lyserød", bg: "#f2b8b8" },
  ]

  return (
    <div className="watch-colors">
      {watches.map((watch, i) => (
        <div
          key={i}
          className="watch-color-item"
          style={{ backgroundColor: watch.bg, cursor: "pointer" }}
          onClick={() => setSelectedWatch({ src: watch.src, bg: watch.bg })}
        >
          <Image
            src={watch.src}
            alt={watch.alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      ))}
    </div>
  )
}