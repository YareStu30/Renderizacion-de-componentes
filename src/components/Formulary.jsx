import { useState } from "react";
import { nanoid } from "nanoid";
import { CollaboratorsBase } from "../components/Collaborators";
import Search from "../components/Search";

const Formulary = () => {
  const [user, setName] = useState("");
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
    setName("");
    setEmail("");
  };

  return (
    <>
      <div id="search">
        <Search tasks={task} setTask={setTask} />
      </div>
      <section>
        <div id="add">
          <h3>Gamer</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="Seeker"
              placeholder="Ingrese nombre"
              onChange={(e) => setName(e.target.value)}
              value={user}
            />
            <h3>Email</h3>
            <input
              type="text"
              className="Seeker"
              placeholder="Ingrese correo"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input id="button" type="submit" value="Enviar" className="btn2" />
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
