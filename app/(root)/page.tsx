import SearchForm from "../../components/SearchForm";

export default async function home({searchParams} : {
    searchParams : Promise<{query?: string  }>
}) { 
    const query = (await searchParams).query
    const posts = [ {
        description : "newprojects" , 
        _createdAt : "Yesterday" ,
        views : 55, 
        Author : { 
            _id : 1
        },
 }]
    return (
        <>
        <section className="pink_container">
        <h1 className="heading"> Pitch your Startup,<br/> Connect with Enterprenuers  </h1> 

        <p  className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on pitches and Get Noticed in Virtual Competition 

        </p>
        <SearchForm  query = {query} />
        </section>

        <section>
            <p className="text-30-semibold">
                {query ? `Search results for "${query}" ` : 'All Startups'}
            </p>
        </section>
        </>

    );
}