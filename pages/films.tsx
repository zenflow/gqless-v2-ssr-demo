import { NextPage } from "next";
import { withGqless, useQuery } from "../gqless";

type PageProps = {};

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <h2>Films</h2>
      <PostsList />
    </>
  );
};

export default withGqless(Page);

const PostsList: React.FC = () => {
  const { allFilms } = useQuery();
  return (
    <ul>
      {allFilms().films.map((film) => {
        const planets = film
          .planetConnection()
          .planets.map((planet) => planet.name)
          .join(", ");
        return (
          <li key={film.id || 0}>
            {film.title} (planets: {planets})
          </li>
        );
      })}
    </ul>
  );
};
