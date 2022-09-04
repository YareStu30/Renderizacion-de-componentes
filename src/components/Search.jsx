import { useState} from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [print, setPrinting] = useState([]);
  const searchTask = (e) => {
    e.preventDefault();
    const listTask = props.tasks.filter((task) => task.nombre == search);
    setPrinting(listTask);
    setSearch("");
  };
  return (
      <div>
      <header>
        <form onSubmit={searchTask}>
          <input
            type="search"
            placeholder="Busqueda"
            className="Seeker2"
            onChange={(e) => setSearch(e.target.value)}
          />
          
          <button type="submit">Search</button>
        </form>
        </header>
       
        <div id="printing">
        {print
          ? print.map((data) => (
              <ul key={data.id}>
                <h3>Jugadores encontrados</h3>
                <li>{data.nombre} - {data.correo}</li>
              </ul>
            ))
          : null}
          </div>
      </div>
  );
};

export default Search;