import { useState } from 'react'

function UseSatePractice() {
    // const [movie, setMovie] = useState({
    //     title: "Movie 1",
    //     rating: 7
    // })

    // const handleClick = () => setMovie({
    //     ...movie,
    //     rating: 5
    // })

    // const [freinds, setFreinds] = useState(["Ibad", "Ibad 2"])

    // const addOneFreind = () => setFreinds([...freinds, "Ibad 3"])
    // const removeOneFreind = () => setFreinds(freinds.slice(0, -1))
    // const updateOneFreind = () => setFreinds(freinds.map(f => f === "Ibad" ? "Ibad 1" : f))

    // const [movies, setMovies] = useState([
    //     {id:1, title:"Movie 1",rating: 5},
    //     {id:2, title:"Movie 2",rating: 8},
    //     {id:3, title:"Movie 3",rating: 6},
    // ])

    // const changeTitle = () => setMovies(
    //     movies.map((m) => (m.id === 1 ? { ...movies, title: "Movie 111" } : m))
    //   );

    return (
        <div>
            <div>
                {/* <h1>Movie Title: {movie.title}</h1>
            <p>Movie Rating: {movie.rating}</p>
            <button onClick={handleClick} style={{ backgroundColor: 'grey' }}>Update Rating</button>
            <br /><br /> */}
            </div>
            <div>
                {/* {freinds.map(f => (
                <li key={Math.random()}>{f}</li>
            ))} <br />
            <button onClick={addOneFreind} style={{ backgroundColor: 'grey' }}>Add Freind</button> <br /><br />
            <button onClick={removeOneFreind} style={{ backgroundColor: 'grey' }}>Remove Freind</button><br /><br />
            <button onClick={updateOneFreind} style={{ backgroundColor: 'grey' }}>Update Freind</button><br /><br /> */}
            </div>
            <div>
                {/* {movies.map(m => (
                    <ul key={Math.random()}>
                        <li>Title: {m.title}</li>
                        <li>Rating: {m.rating}</li>
                    </ul>
                ))}
                <button onClick={changeTitle}>Change Title</button> */}
            </div>
        </div>
    )
}

export default UseSatePractice