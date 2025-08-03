import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function home({searchParams} : {
    searchParams : Promise<{query?: string  }>
}) { 
    const query = (await searchParams).query
    const posts = [ {
        description : "newprojects" , 
        _createdAt : new Date() ,
        _id: 1 , 
        views : 55, 
        author : { 
            _id : 1,
            name : "willian"
        },
        category : "Robots" , 
        title : "We Robots" ,
        image : "https://logo.com/image-cdn/images/kts928pd/production/c3fa21bee0847f3d8b65e7da1bb573104a26ddc3-359x363.png?w=1080&q=72"


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
            <ul className="mt-7 card_grid">

                 {posts?.length > 0 ?(
                    posts.map((post: StartupCardType , index: number) =>(
                        <StartupCard key = {post?._id } post = {post}/>
                    ))
                 ):(
                    <p className="no-results"> No results found </p>
                 )}
            </ul>
        </section>
        </>

    );
}