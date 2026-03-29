import {MovieInfo} from "@/components/moviDetails/MovieInfo";
import {Metadata} from "next";


type Props= {
    params: Promise<{
        id: string;
    }>
}

export const generateMetadata= async({params}: Props):Promise<Metadata> => {
    const {id} = await params;
    return{
        title:'detail information film '+ id}
    }


const MovieDetailsPage =async ({params}:Props) => {
    const promisedParams=await params
    const id= Number(promisedParams.id);
    return (
        <div className="max-w-[1400px] mx-auto px-6">
            <MovieInfo id={id} />
        </div>
    );
};

export default MovieDetailsPage;
//max-w-7xl mx-auto
