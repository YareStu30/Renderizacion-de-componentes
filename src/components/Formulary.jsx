import { useState } from "react";
import { nanoid } from "nanoid";
import { CollaboratorsBase } from "../components/Collaborators";
import Search from "../components/Search";

const Formulary = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [task, setTask] = useState(CollaboratorsBase);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("No se han llenado los");
      return;
    }

    setTask([...task, { id: nanoid(), nombre: user, correo: email }]);
    setUser("");
    setEmail("");
  };

  return (
    <>
      <div id="search">
        <Search tasks={task} setTask={setTask} />
      </div>
      <section>
        <div id="add">
          <h3>Nombre</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese nombre"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
            <h3>Correo</h3>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese correo"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input id="button" type="submit" value="Enviar" />
          </form>
        </div>
      </section>

      <div id="users">
        <h3>Usuarios actuales</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {task.map((el) => (
              <tr key={el.id}>
                <td>{el.nombre}</td>
                <td>{el.correo}</td>
              </tr>
            ))}
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Formulary;
