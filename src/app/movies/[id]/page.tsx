
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
            Movie ID: {id}
        </div>
    );
};

export default MovieDetailsPage;
