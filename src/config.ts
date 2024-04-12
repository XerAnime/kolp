export const API_HOST = process.env.API_URL;
export const API_HOST_CLIENT = process.env.NEXT_PUBLIC_API_URL;

export const GOGOANIME_ENDPOINT = "/gogoanime";

export const DRAMA_COOL = "/dramacool";

export const ANIME = "/anime";

export const MOVIE = "/movies";

export const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}`;

export const DATABASE: string | undefined = process.env.MONGO_DATABASE;
