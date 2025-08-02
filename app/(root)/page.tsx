import SearchForm from "../components/SearchForm";

export default function home() { 
    return (
        <>
        <section className="pink_container">
        <h1 className="heading"> Pitch your Startup,<br/> Connect with Enterprenuers  </h1> 

        <p  className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on pitches and Get Noticed in Virtual Competition 

        </p>
        <SearchForm/>
        </section>
        </>

    );
}