import { celebStrip } from "../content.js";

function Photo({ photo, hidden }) {
  return (
    <figure
      className="stripItem"
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
      aria-hidden={hidden || undefined}
    >
      <img
        src={photo.src}
        alt={hidden ? "" : photo.name ? `Ansh with ${photo.name}` : "Ansh with a guest"}
        width={photo.width}
        height={photo.height}
        loading="eager"
        decoding="async"
        draggable="false"
      />
      {photo.name && <figcaption>{photo.name}</figcaption>}
    </figure>
  );
}

export default function CelebStrip() {
  const { photos, speed, label, eyebrow, intro } = celebStrip;

  return (
    <section className="strip" aria-label={label}>
      {(eyebrow || intro) && (
        <div className="stripHeader">
          {eyebrow && <span className="stripEyebrow">{eyebrow}</span>}
          {intro && <p className="stripIntro">{intro}</p>}
        </div>
      )}
      <div className="stripViewport">
        {/* The list is rendered twice so the loop is seamless: when the first
            copy has scrolled fully off, the second sits exactly where it began. */}
        <div className="stripTrack" style={{ "--strip-duration": `${speed}s` }}>
          {photos.map((photo) => (
            <Photo photo={photo} key={photo.src} />
          ))}
          {photos.map((photo) => (
            <Photo photo={photo} key={`${photo.src}-copy`} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
