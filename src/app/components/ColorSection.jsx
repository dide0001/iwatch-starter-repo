import SliderControls from "./SliderControls"
import WatchColors from "./WatchColors"

export default function ColorSection({ setSelectedWatch }) {
  return (
    <section className="color-section">
      <div className="color-section-inner">
        <SliderControls />
        <WatchColors setSelectedWatch={setSelectedWatch} />
      </div>
    </section>
  )
}