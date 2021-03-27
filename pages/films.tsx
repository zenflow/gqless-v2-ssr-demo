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
      <h2>Films</h2>
      <PostsList />
    </>
  );
};

export default Page;

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
