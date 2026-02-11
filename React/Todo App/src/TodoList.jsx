import { Fragment } from "react";
const TodoList = (props) => {
  console.log(props);
  let { items, handleDelete, handleUpdate } = props
  return (
    <>
      <section className="todo">
        <h2>Task</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="course">Task</th>
              <th className="tainer">Description</th>
              <th className="actions">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
              items.length > 0 && items.map((value) => {
                return (
                  <Fragment key={value.id}>
                    <tr>
                      <td>{value.course}</td>
                      <td>{value.trainer}</td>
                      <td>
                        <button id="btn1" onClick={() => handleUpdate(value.id)}>Edit</button>
                        <button id="btn2" onClick={() => handleDelete(value.id)}>Delete</button>
                      </td>
                    </tr>
                  </Fragment>
                )
              })
            }
          </tbody>
        </table>
      </section>
    </>

  )
}

export default TodoList