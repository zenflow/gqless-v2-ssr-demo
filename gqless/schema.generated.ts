/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash } from "gqless";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  String: true,
  Int: true,
  Boolean: true,
  ID: true,
  Float: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    allFilms: {
      __type: "FilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    film: { __type: "Film", __args: { id: "ID", filmID: "ID" } },
    allPeople: {
      __type: "PeopleConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    person: { __type: "Person", __args: { id: "ID", personID: "ID" } },
    allPlanets: {
      __type: "PlanetsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    planet: { __type: "Planet", __args: { id: "ID", planetID: "ID" } },
    allSpecies: {
      __type: "SpeciesConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    species: { __type: "Species", __args: { id: "ID", speciesID: "ID" } },
    allStarships: {
      __type: "StarshipsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    starship: { __type: "Starship", __args: { id: "ID", starshipID: "ID" } },
    allVehicles: {
      __type: "VehiclesConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    vehicle: { __type: "Vehicle", __args: { id: "ID", vehicleID: "ID" } },
    node: { __type: "Node", __args: { id: "ID!" } },
  },
  mutation: {},
  subscription: {},
  FilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
    endCursor: { __type: "String" },
  },
  FilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  Film: {
    __typename: { __type: "String!" },
    title: { __type: "String" },
    episodeID: { __type: "Int" },
    openingCrawl: { __type: "String" },
    director: { __type: "String" },
    producers: { __type: "[String]" },
    releaseDate: { __type: "String" },
    speciesConnection: {
      __type: "FilmSpeciesConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    starshipConnection: {
      __type: "FilmStarshipsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    vehicleConnection: {
      __type: "FilmVehiclesConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    characterConnection: {
      __type: "FilmCharactersConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    planetConnection: {
      __type: "FilmPlanetsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  FilmSpeciesConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmSpeciesEdge]" },
    totalCount: { __type: "Int" },
    species: { __type: "[Species]" },
  },
  FilmSpeciesEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Species" },
    cursor: { __type: "String!" },
  },
  Species: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    classification: { __type: "String" },
    designation: { __type: "String" },
    averageHeight: { __type: "Float" },
    averageLifespan: { __type: "Int" },
    eyeColors: { __type: "[String]" },
    hairColors: { __type: "[String]" },
    skinColors: { __type: "[String]" },
    language: { __type: "String" },
    homeworld: { __type: "Planet" },
    personConnection: {
      __type: "SpeciesPeopleConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    filmConnection: {
      __type: "SpeciesFilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  Planet: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    diameter: { __type: "Int" },
    rotationPeriod: { __type: "Int" },
    orbitalPeriod: { __type: "Int" },
    gravity: { __type: "String" },
    population: { __type: "Float" },
    climates: { __type: "[String]" },
    terrains: { __type: "[String]" },
    surfaceWater: { __type: "Float" },
    residentConnection: {
      __type: "PlanetResidentsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    filmConnection: {
      __type: "PlanetFilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  PlanetResidentsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PlanetResidentsEdge]" },
    totalCount: { __type: "Int" },
    residents: { __type: "[Person]" },
  },
  PlanetResidentsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  Person: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    birthYear: { __type: "String" },
    eyeColor: { __type: "String" },
    gender: { __type: "String" },
    hairColor: { __type: "String" },
    height: { __type: "Int" },
    mass: { __type: "Float" },
    skinColor: { __type: "String" },
    homeworld: { __type: "Planet" },
    filmConnection: {
      __type: "PersonFilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    species: { __type: "Species" },
    starshipConnection: {
      __type: "PersonStarshipsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    vehicleConnection: {
      __type: "PersonVehiclesConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  PersonFilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PersonFilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  PersonFilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  PersonStarshipsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PersonStarshipsEdge]" },
    totalCount: { __type: "Int" },
    starships: { __type: "[Starship]" },
  },
  PersonStarshipsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Starship" },
    cursor: { __type: "String!" },
  },
  Starship: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    model: { __type: "String" },
    starshipClass: { __type: "String" },
    manufacturers: { __type: "[String]" },
    costInCredits: { __type: "Float" },
    length: { __type: "Float" },
    crew: { __type: "String" },
    passengers: { __type: "String" },
    maxAtmospheringSpeed: { __type: "Int" },
    hyperdriveRating: { __type: "Float" },
    MGLT: { __type: "Int" },
    cargoCapacity: { __type: "Float" },
    consumables: { __type: "String" },
    pilotConnection: {
      __type: "StarshipPilotsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    filmConnection: {
      __type: "StarshipFilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  StarshipPilotsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[StarshipPilotsEdge]" },
    totalCount: { __type: "Int" },
    pilots: { __type: "[Person]" },
  },
  StarshipPilotsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  StarshipFilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[StarshipFilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  StarshipFilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  PersonVehiclesConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PersonVehiclesEdge]" },
    totalCount: { __type: "Int" },
    vehicles: { __type: "[Vehicle]" },
  },
  PersonVehiclesEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Vehicle" },
    cursor: { __type: "String!" },
  },
  Vehicle: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    model: { __type: "String" },
    vehicleClass: { __type: "String" },
    manufacturers: { __type: "[String]" },
    costInCredits: { __type: "Float" },
    length: { __type: "Float" },
    crew: { __type: "String" },
    passengers: { __type: "String" },
    maxAtmospheringSpeed: { __type: "Int" },
    cargoCapacity: { __type: "Float" },
    consumables: { __type: "String" },
    pilotConnection: {
      __type: "VehiclePilotsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    filmConnection: {
      __type: "VehicleFilmsConnection",
      __args: { after: "String", first: "Int", before: "String", last: "Int" },
    },
    created: { __type: "String" },
    edited: { __type: "String" },
    id: { __type: "ID!" },
  },
  VehiclePilotsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[VehiclePilotsEdge]" },
    totalCount: { __type: "Int" },
    pilots: { __type: "[Person]" },
  },
  VehiclePilotsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  VehicleFilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[VehicleFilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  VehicleFilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  PlanetFilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PlanetFilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  PlanetFilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  SpeciesPeopleConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[SpeciesPeopleEdge]" },
    totalCount: { __type: "Int" },
    people: { __type: "[Person]" },
  },
  SpeciesPeopleEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  SpeciesFilmsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[SpeciesFilmsEdge]" },
    totalCount: { __type: "Int" },
    films: { __type: "[Film]" },
  },
  SpeciesFilmsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Film" },
    cursor: { __type: "String!" },
  },
  FilmStarshipsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmStarshipsEdge]" },
    totalCount: { __type: "Int" },
    starships: { __type: "[Starship]" },
  },
  FilmStarshipsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Starship" },
    cursor: { __type: "String!" },
  },
  FilmVehiclesConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmVehiclesEdge]" },
    totalCount: { __type: "Int" },
    vehicles: { __type: "[Vehicle]" },
  },
  FilmVehiclesEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Vehicle" },
    cursor: { __type: "String!" },
  },
  FilmCharactersConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmCharactersEdge]" },
    totalCount: { __type: "Int" },
    characters: { __type: "[Person]" },
  },
  FilmCharactersEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  FilmPlanetsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FilmPlanetsEdge]" },
    totalCount: { __type: "Int" },
    planets: { __type: "[Planet]" },
  },
  FilmPlanetsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Planet" },
    cursor: { __type: "String!" },
  },
  PeopleConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PeopleEdge]" },
    totalCount: { __type: "Int" },
    people: { __type: "[Person]" },
  },
  PeopleEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Person" },
    cursor: { __type: "String!" },
  },
  PlanetsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[PlanetsEdge]" },
    totalCount: { __type: "Int" },
    planets: { __type: "[Planet]" },
  },
  PlanetsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Planet" },
    cursor: { __type: "String!" },
  },
  SpeciesConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[SpeciesEdge]" },
    totalCount: { __type: "Int" },
    species: { __type: "[Species]" },
  },
  SpeciesEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Species" },
    cursor: { __type: "String!" },
  },
  StarshipsConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[StarshipsEdge]" },
    totalCount: { __type: "Int" },
    starships: { __type: "[Starship]" },
  },
  StarshipsEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Starship" },
    cursor: { __type: "String!" },
  },
  VehiclesConnection: {
    __typename: { __type: "String!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[VehiclesEdge]" },
    totalCount: { __type: "Int" },
    vehicles: { __type: "[Vehicle]" },
  },
  VehiclesEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Vehicle" },
    cursor: { __type: "String!" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  allFilms: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<FilmsConnection>;
  film: (args?: {
    id?: ScalarsEnums["ID"];
    filmID?: ScalarsEnums["ID"];
  }) => Maybe<Film>;
  allPeople: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<PeopleConnection>;
  person: (args?: {
    id?: ScalarsEnums["ID"];
    personID?: ScalarsEnums["ID"];
  }) => Maybe<Person>;
  allPlanets: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<PlanetsConnection>;
  planet: (args?: {
    id?: ScalarsEnums["ID"];
    planetID?: ScalarsEnums["ID"];
  }) => Maybe<Planet>;
  allSpecies: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<SpeciesConnection>;
  species: (args?: {
    id?: ScalarsEnums["ID"];
    speciesID?: ScalarsEnums["ID"];
  }) => Maybe<Species>;
  allStarships: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<StarshipsConnection>;
  starship: (args?: {
    id?: ScalarsEnums["ID"];
    starshipID?: ScalarsEnums["ID"];
  }) => Maybe<Starship>;
  allVehicles: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<VehiclesConnection>;
  vehicle: (args?: {
    id?: ScalarsEnums["ID"];
    vehicleID?: ScalarsEnums["ID"];
  }) => Maybe<Vehicle>;
  node: (args: { id: ScalarsEnums["ID"] }) => Maybe<Node>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

/**
 * A connection to a list of items.
 */
export interface FilmsConnection {
  __typename: "FilmsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * Information about pagination in a connection.
 */
export interface PageInfo {
  __typename: "PageInfo" | undefined;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: ScalarsEnums["Boolean"];
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: ScalarsEnums["Boolean"];
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor?: ScalarsEnums["String"];
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor?: ScalarsEnums["String"];
}

/**
 * An edge in a connection.
 */
export interface FilmsEdge {
  __typename: "FilmsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A single film.
 */
export interface Film extends Node {
  __typename: "Film" | undefined;
  /**
   * The title of this film.
   */
  title?: ScalarsEnums["String"];
  /**
   * The episode number of this film.
   */
  episodeID?: ScalarsEnums["Int"];
  /**
   * The opening paragraphs at the beginning of this film.
   */
  openingCrawl?: ScalarsEnums["String"];
  /**
   * The name of the director of this film.
   */
  director?: ScalarsEnums["String"];
  /**
   * The name(s) of the producer(s) of this film.
   */
  producers?: Array<Maybe<ScalarsEnums["String"]>>;
  /**
   * The ISO 8601 date format of film release at original creator country.
   */
  releaseDate?: ScalarsEnums["String"];
  speciesConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<FilmSpeciesConnection>;
  starshipConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<FilmStarshipsConnection>;
  vehicleConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<FilmVehiclesConnection>;
  characterConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<FilmCharactersConnection>;
  planetConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<FilmPlanetsConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: ScalarsEnums["String"];
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: ScalarsEnums["String"];
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A connection to a list of items.
 */
export interface FilmSpeciesConnection {
  __typename: "FilmSpeciesConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmSpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmSpeciesEdge {
  __typename: "FilmSpeciesEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Species>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A type of person or character within the Star Wars Universe.
 */
export interface Species extends Node {
  __typename: "Species" | undefined;
  /**
   * The name of this species.
   */
  name?: ScalarsEnums["String"];
  /**
   * The classification of this species, such as "mammal" or "reptile".
   */
  classification?: ScalarsEnums["String"];
  /**
   * The designation of this species, such as "sentient".
   */
  designation?: ScalarsEnums["String"];
  /**
   * The average height of this species in centimeters.
   */
  averageHeight?: ScalarsEnums["Float"];
  /**
   * The average lifespan of this species in years, null if unknown.
   */
  averageLifespan?: ScalarsEnums["Int"];
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors?: Array<Maybe<ScalarsEnums["String"]>>;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  hairColors?: Array<Maybe<ScalarsEnums["String"]>>;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  skinColors?: Array<Maybe<ScalarsEnums["String"]>>;
  /**
   * The language commonly spoken by this species.
   */
  language?: ScalarsEnums["String"];
  /**
   * A planet that this species originates from.
   */
  homeworld?: Maybe<Planet>;
  personConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<SpeciesPeopleConnection>;
  filmConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<SpeciesFilmsConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: ScalarsEnums["String"];
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: ScalarsEnums["String"];
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export interface Planet extends Node {
  __typename: "Planet" | undefined;
  /**
   * The name of this planet.
   */
  name?: ScalarsEnums["String"];
  /**
   * The diameter of this planet in kilometers.
   */
  diameter?: ScalarsEnums["Int"];
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod?: ScalarsEnums["Int"];
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod?: ScalarsEnums["Int"];
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity?: ScalarsEnums["String"];
  /**
   * The average population of sentient beings inhabiting this planet.
   */
  population?: ScalarsEnums["Float"];
  /**
   * The climates of this planet.
   */
  climates?: Array<Maybe<ScalarsEnums["String"]>>;
  /**
   * The terrains of this planet.
   */
  terrains?: Array<Maybe<ScalarsEnums["String"]>>;
  /**
   * The percentage of the planet surface that is naturally occuring water or bodies
   * of water.
   */
  surfaceWater?: ScalarsEnums["Float"];
  residentConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<PlanetResidentsConnection>;
  filmConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<PlanetFilmsConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: ScalarsEnums["String"];
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: ScalarsEnums["String"];
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A connection to a list of items.
 */
export interface PlanetResidentsConnection {
  __typename: "PlanetResidentsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PlanetResidentsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  residents?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface PlanetResidentsEdge {
  __typename: "PlanetResidentsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * An individual person or character within the Star Wars universe.
 */
export interface Person extends Node {
  __typename: "Person" | undefined;
  /**
   * The name of this person.
   */
  name?: ScalarsEnums["String"];
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear?: ScalarsEnums["String"];
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor?: ScalarsEnums["String"];
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender?: ScalarsEnums["String"];
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor?: ScalarsEnums["String"];
  /**
   * The height of the person in centimeters.
   */
  height?: ScalarsEnums["Int"];
  /**
   * The mass of the person in kilograms.
   */
  mass?: ScalarsEnums["Float"];
  /**
   * The skin color of this person.
   */
  skinColor?: ScalarsEnums["String"];
  /**
   * A planet that this person was born on or inhabits.
   */
  homeworld?: Maybe<Planet>;
  filmConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<PersonFilmsConnection>;
  /**
   * The species that this person belongs to, or null if unknown.
   */
  species?: Maybe<Species>;
  starshipConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<PersonStarshipsConnection>;
  vehicleConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<PersonVehiclesConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: ScalarsEnums["String"];
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: ScalarsEnums["String"];
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A connection to a list of items.
 */
export interface PersonFilmsConnection {
  __typename: "PersonFilmsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PersonFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * An edge in a connection.
 */
export interface PersonFilmsEdge {
  __typename: "PersonFilmsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface PersonStarshipsConnection {
  __typename: "PersonStarshipsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PersonStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
}

/**
 * An edge in a connection.
 */
export interface PersonStarshipsEdge {
  __typename: "PersonStarshipsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Starship>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A single transport craft that has hyperdrive capability.
 */
export interface Starship extends Node {
  __typename: "Starship" | undefined;
  /**
   * The name of this starship. The common name, such as "Death Star".
   */
  name?: ScalarsEnums["String"];
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model?: ScalarsEnums["String"];
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass?: ScalarsEnums["String"];
  /**
   * The manufacturers of this starship.
   */
  manufacturers?: Array<Maybe<ScalarsEnums["String"]>>;
  /**
   * The cost of this starship new, in galactic credits.
   */
  costInCredits?: ScalarsEnums["Float"];
  /**
   * The length of this starship in meters.
   */
  length?: ScalarsEnums["Float"];
  /**
   * The number of personnel needed to run or pilot this starship.
   */
  crew?: ScalarsEnums["String"];
  /**
   * The number of non-essential people this starship can transport.
   */
  passengers?: ScalarsEnums["String"];
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  maxAtmospheringSpeed?: ScalarsEnums["Int"];
  /**
   * The class of this starships hyperdrive.
   */
  hyperdriveRating?: ScalarsEnums["Float"];
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  MGLT?: ScalarsEnums["Int"];
  /**
   * The maximum number of kilograms that this starship can transport.
   */
  cargoCapacity?: ScalarsEnums["Float"];
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: ScalarsEnums["String"];
  pilotConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<StarshipPilotsConnection>;
  filmConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<StarshipFilmsConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: ScalarsEnums["String"];
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: ScalarsEnums["String"];
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A connection to a list of items.
 */
export interface StarshipPilotsConnection {
  __typename: "StarshipPilotsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<StarshipPilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface StarshipPilotsEdge {
  __typename: "StarshipPilotsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface StarshipFilmsConnection {
  __typename: "StarshipFilmsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<StarshipFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * An edge in a connection.
 */
export interface StarshipFilmsEdge {
  __typename: "StarshipFilmsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface PersonVehiclesConnection {
  __typename: "PersonVehiclesConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PersonVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
}

/**
 * An edge in a connection.
 */
export interface PersonVehiclesEdge {
  __typename: "PersonVehiclesEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Vehicle>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A single transport craft that does not have hyperdrive capability
 */
export interface Vehicle extends Node {
  __typename: "Vehicle" | undefined;
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name?: ScalarsEnums["String"];
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model?: ScalarsEnums["String"];
  /**
   * The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
   */
  vehicleClass?: ScalarsEnums["String"];
  /**
   * The manufacturers of this vehicle.
   */
  manufacturers?: Array<Maybe<ScalarsEnums["String"]>>;
  /**
   * The cost of this vehicle new, in Galactic Credits.
   */
  costInCredits?: ScalarsEnums["Float"];
  /**
   * The length of this vehicle in meters.
   */
  length?: ScalarsEnums["Float"];
  /**
   * The number of personnel needed to run or pilot this vehicle.
   */
  crew?: ScalarsEnums["String"];
  /**
   * The number of non-essential people this vehicle can transport.
   */
  passengers?: ScalarsEnums["String"];
  /**
   * The maximum speed of this vehicle in atmosphere.
   */
  maxAtmospheringSpeed?: ScalarsEnums["Int"];
  /**
   * The maximum number of kilograms that this vehicle can transport.
   */
  cargoCapacity?: ScalarsEnums["Float"];
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: ScalarsEnums["String"];
  pilotConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<VehiclePilotsConnection>;
  filmConnection: (args?: {
    after?: ScalarsEnums["String"];
    first?: ScalarsEnums["Int"];
    before?: ScalarsEnums["String"];
    last?: ScalarsEnums["Int"];
  }) => Maybe<VehicleFilmsConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: ScalarsEnums["String"];
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: ScalarsEnums["String"];
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
}

/**
 * A connection to a list of items.
 */
export interface VehiclePilotsConnection {
  __typename: "VehiclePilotsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<VehiclePilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface VehiclePilotsEdge {
  __typename: "VehiclePilotsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface VehicleFilmsConnection {
  __typename: "VehicleFilmsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<VehicleFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * An edge in a connection.
 */
export interface VehicleFilmsEdge {
  __typename: "VehicleFilmsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface PlanetFilmsConnection {
  __typename: "PlanetFilmsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PlanetFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * An edge in a connection.
 */
export interface PlanetFilmsEdge {
  __typename: "PlanetFilmsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface SpeciesPeopleConnection {
  __typename: "SpeciesPeopleConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<SpeciesPeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface SpeciesPeopleEdge {
  __typename: "SpeciesPeopleEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface SpeciesFilmsConnection {
  __typename: "SpeciesFilmsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<SpeciesFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
}

/**
 * An edge in a connection.
 */
export interface SpeciesFilmsEdge {
  __typename: "SpeciesFilmsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface FilmStarshipsConnection {
  __typename: "FilmStarshipsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmStarshipsEdge {
  __typename: "FilmStarshipsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Starship>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface FilmVehiclesConnection {
  __typename: "FilmVehiclesConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmVehiclesEdge {
  __typename: "FilmVehiclesEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Vehicle>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface FilmCharactersConnection {
  __typename: "FilmCharactersConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmCharactersEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmCharactersEdge {
  __typename: "FilmCharactersEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface FilmPlanetsConnection {
  __typename: "FilmPlanetsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmPlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmPlanetsEdge {
  __typename: "FilmPlanetsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Planet>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface PeopleConnection {
  __typename: "PeopleConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
}

/**
 * An edge in a connection.
 */
export interface PeopleEdge {
  __typename: "PeopleEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface PlanetsConnection {
  __typename: "PlanetsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
}

/**
 * An edge in a connection.
 */
export interface PlanetsEdge {
  __typename: "PlanetsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Planet>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface SpeciesConnection {
  __typename: "SpeciesConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<SpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
}

/**
 * An edge in a connection.
 */
export interface SpeciesEdge {
  __typename: "SpeciesEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Species>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface StarshipsConnection {
  __typename: "StarshipsConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<StarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
}

/**
 * An edge in a connection.
 */
export interface StarshipsEdge {
  __typename: "StarshipsEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Starship>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * A connection to a list of items.
 */
export interface VehiclesConnection {
  __typename: "VehiclesConnection" | undefined;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<VehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: ScalarsEnums["Int"];
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
}

/**
 * An edge in a connection.
 */
export interface VehiclesEdge {
  __typename: "VehiclesEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Vehicle>;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  FilmsConnection: FilmsConnection;
  PageInfo: PageInfo;
  FilmsEdge: FilmsEdge;
  Film: Film;
  FilmSpeciesConnection: FilmSpeciesConnection;
  FilmSpeciesEdge: FilmSpeciesEdge;
  Species: Species;
  Planet: Planet;
  PlanetResidentsConnection: PlanetResidentsConnection;
  PlanetResidentsEdge: PlanetResidentsEdge;
  Person: Person;
  PersonFilmsConnection: PersonFilmsConnection;
  PersonFilmsEdge: PersonFilmsEdge;
  PersonStarshipsConnection: PersonStarshipsConnection;
  PersonStarshipsEdge: PersonStarshipsEdge;
  Starship: Starship;
  StarshipPilotsConnection: StarshipPilotsConnection;
  StarshipPilotsEdge: StarshipPilotsEdge;
  StarshipFilmsConnection: StarshipFilmsConnection;
  StarshipFilmsEdge: StarshipFilmsEdge;
  PersonVehiclesConnection: PersonVehiclesConnection;
  PersonVehiclesEdge: PersonVehiclesEdge;
  Vehicle: Vehicle;
  VehiclePilotsConnection: VehiclePilotsConnection;
  VehiclePilotsEdge: VehiclePilotsEdge;
  VehicleFilmsConnection: VehicleFilmsConnection;
  VehicleFilmsEdge: VehicleFilmsEdge;
  PlanetFilmsConnection: PlanetFilmsConnection;
  PlanetFilmsEdge: PlanetFilmsEdge;
  SpeciesPeopleConnection: SpeciesPeopleConnection;
  SpeciesPeopleEdge: SpeciesPeopleEdge;
  SpeciesFilmsConnection: SpeciesFilmsConnection;
  SpeciesFilmsEdge: SpeciesFilmsEdge;
  FilmStarshipsConnection: FilmStarshipsConnection;
  FilmStarshipsEdge: FilmStarshipsEdge;
  FilmVehiclesConnection: FilmVehiclesConnection;
  FilmVehiclesEdge: FilmVehiclesEdge;
  FilmCharactersConnection: FilmCharactersConnection;
  FilmCharactersEdge: FilmCharactersEdge;
  FilmPlanetsConnection: FilmPlanetsConnection;
  FilmPlanetsEdge: FilmPlanetsEdge;
  PeopleConnection: PeopleConnection;
  PeopleEdge: PeopleEdge;
  PlanetsConnection: PlanetsConnection;
  PlanetsEdge: PlanetsEdge;
  SpeciesConnection: SpeciesConnection;
  SpeciesEdge: SpeciesEdge;
  StarshipsConnection: StarshipsConnection;
  StarshipsEdge: StarshipsEdge;
  VehiclesConnection: VehiclesConnection;
  VehiclesEdge: VehiclesEdge;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "FilmsConnection"
  | "PageInfo"
  | "FilmsEdge"
  | "Film"
  | "FilmSpeciesConnection"
  | "FilmSpeciesEdge"
  | "Species"
  | "Planet"
  | "PlanetResidentsConnection"
  | "PlanetResidentsEdge"
  | "Person"
  | "PersonFilmsConnection"
  | "PersonFilmsEdge"
  | "PersonStarshipsConnection"
  | "PersonStarshipsEdge"
  | "Starship"
  | "StarshipPilotsConnection"
  | "StarshipPilotsEdge"
  | "StarshipFilmsConnection"
  | "StarshipFilmsEdge"
  | "PersonVehiclesConnection"
  | "PersonVehiclesEdge"
  | "Vehicle"
  | "VehiclePilotsConnection"
  | "VehiclePilotsEdge"
  | "VehicleFilmsConnection"
  | "VehicleFilmsEdge"
  | "PlanetFilmsConnection"
  | "PlanetFilmsEdge"
  | "SpeciesPeopleConnection"
  | "SpeciesPeopleEdge"
  | "SpeciesFilmsConnection"
  | "SpeciesFilmsEdge"
  | "FilmStarshipsConnection"
  | "FilmStarshipsEdge"
  | "FilmVehiclesConnection"
  | "FilmVehiclesEdge"
  | "FilmCharactersConnection"
  | "FilmCharactersEdge"
  | "FilmPlanetsConnection"
  | "FilmPlanetsEdge"
  | "PeopleConnection"
  | "PeopleEdge"
  | "PlanetsConnection"
  | "PlanetsEdge"
  | "SpeciesConnection"
  | "SpeciesEdge"
  | "StarshipsConnection"
  | "StarshipsEdge"
  | "VehiclesConnection"
  | "VehiclesEdge";

/**
 * An object with an ID
 */
export interface Node {
  /**
   * The id of the object.
   */
  id: ScalarsEnums["ID"];
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
