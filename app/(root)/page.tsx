import SearchForm from "../components/SearchForm";

export default async function home({searchParams} : {
    searchParams : Promise<{query?: string  }>
}) { 
    const query = (await searchParams).query
    return (
        <>
        <section className="pink_container">
        <h1 className="heading"> Pitch your Startup,<br/> Connect with Enterprenuers  </h1> 

        <p  className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on pitches and Get Noticed in Virtual Competition 

        </p>
        <SearchForm  query = {query} />
        </section>
        </>

    );
}