import {MovieInfo} from "@/components/moviDetails/MovieInfo";

type Props= {
    params: Promise<{
        id: string;
    }>
}

const MovieDetailsPage =async ({params}:Props) => {
    const promisedParams=await params
    const id= Number(promisedParams.id);
    return (
        <div>
            <MovieInfo id={id} />
        </div>
    );
};

export default MovieDetailsPage;
