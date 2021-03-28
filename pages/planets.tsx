import { NextPage } from "next";
import { withGqless, useQuery } from "../gqless";

type PageProps = {};

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <h2>Planets</h2>
      <PlanetsList />
    </>
  );
};

export default withGqless(Page);

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
