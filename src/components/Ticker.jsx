import { ticker } from "../content.js";

export default function Ticker() {
  return (
    <div className="ticker" aria-label="What I do">
      <div className="tickerViewport">
        {/* Two identical halves so translateX(-50%) loops seamlessly. Each half repeats
            the list twice so the track stays wider than very large screens. */}
        <ul className="tickerTrack">
          {[0, 1].map((half) =>
            [0, 1].map((rep) =>
              ticker.map((label) => (
                <li
                  className="tickerItem"
                  key={`${half}-${rep}-${label}`}
                  aria-hidden={half === 1 || rep === 1 ? "true" : undefined}
                >
                  <span>{label}</span>
                  <span className="tickerDot" aria-hidden="true" />
                </li>
              ))
            )
          )}
        </ul>
      </div>
    </div>
  );
}