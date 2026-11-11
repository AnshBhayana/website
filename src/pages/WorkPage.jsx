import PageHero from "../components/PageHero.jsx";
import Work from "../components/Work.jsx";

import { work } from "../content.js";
import { usePageTitle } from "../hooks.js";

export default function WorkPage() {
  usePageTitle("Work | Ansh Bhayana");
  return (
    <>
      <PageHero title={work.title} text={work.intro}>
        <ul className="pageIndex" aria-label="Jump to a project">
          {work.items.map((i) => (
            <li key={i.number}>
              <a href={`#project-${i.number}`}>
                <span>{i.number}</span>
                {i.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>
      <Work />
      
    </>
  );
}