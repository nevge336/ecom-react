import Navbar from "./Navbar";

function Home() {
    const title = "ArtPop!".split('').map((letter, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.5}s` }} className="color-change">
            {letter}
        </span>
    ));

    return (
        <div className="hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/home.jpg'})`, backgroundSize: 'cover' }}>
            <Navbar />
            <h1 className="title">{title}</h1>
        </div>
    );
}

export default Home;