import { gallery } from "../content.js";

function Photo({ photo, hidden }) {
  return (
    <figure
      className="stripItem"
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
      aria-hidden={hidden || undefined}
    >
      <img
        src={photo.src}
        alt={hidden ? "" : photo.alt}
        width={photo.width}
        height={photo.height}
        loading="eager"
        decoding="async"
        draggable="false"
      />
    </figure>
  );
}

export default function Gallery() {
  return (
    <section className="section" aria-labelledby="gal-title">
      <div className="sectionHead">
        <h2 id="gal-title" className="sectionTitle">
          {gallery.title}
        </h2>
        <p>{gallery.intro}</p>
      </div>

      <div className="strip">
        <div className="stripViewport">
          {/* The list is rendered twice so the loop is seamless: when the first copy
              has scrolled fully off, the second sits exactly where it began. */}
          <div className="stripTrack" style={{ "--strip-duration": `${gallery.speed}s` }}>
            {gallery.photos.map((p) => (
              <Photo photo={p} key={p.src} />
            ))}
            {gallery.photos.map((p) => (
              <Photo photo={p} key={`${p.src}-copy`} hidden />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
