import { GetStaticProps, NextPage } from "next";
import { PropsWithServerCache } from "@gqless/react";
import { prepareReactRender, useHydrateCache, useQuery } from "../gqless";

type PageProps = PropsWithServerCache<{}>;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />);
  return { props: { cacheSnapshot } };
};

const Page: NextPage<PageProps> = ({ cacheSnapshot }) => {
  useHydrateCache({ cacheSnapshot });
  return (
    <>
      <h2>Planets</h2>
      <PlanetsList />
    </>
  );
};

export default Page;

const PlanetsList: React.FC = () => {
  const { allPlanets } = useQuery();
  return (
    <ul>
      {allPlanets().planets.map((planet) => {
        const films = planet
          .filmConnection()
          .films.map((film) => film.title)
          .join(", ");
        return (
          <li key={planet.id || 0}>
            {planet.name} (films: {films})
          </li>
        );
      })}
    </ul>
  );
};
