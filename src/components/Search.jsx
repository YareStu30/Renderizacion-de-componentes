import { useState} from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [print, setPrint] = useState([]);
  /* Función para la búsqueda */
  const searchTask = (e) => {
    e.preventDefault();
    const fTask = props.tasks.filter((task) => task.nombre == search);
    setPrint(fTask);
    setSearch("");
  };
  return (
      <div>
      <header>
        <form onSubmit={searchTask}>
          <input
            type="search"
            placeholder="Búsqueda"
            onChange={(e) => setSearch(e.target.value)}
          />
          
          <button type="submit">Search</button>
        </form>
        </header>
       
        <div id="print">
        {print
          ? print.map((data) => (
              <ul key={data.id}>
                <h3>Resultado</h3>
                <li>{data.nombre} - {data.correo}</li>
              </ul>
            ))
          : null}
          </div>
      </div>
  );
};

export default Search;