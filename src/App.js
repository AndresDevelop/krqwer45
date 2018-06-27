import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ""
    };
  }

  handleInput = this.handleInput.bind(this);
  handleChange = this.handleChange.bind(this);
  clickTask = this.clickTask.bind(this);

  handleInput(e) {
    this.setState({
      newTask: { id:4 , name: e.target.value, done:false},
    });
  }

  handleChange(ev){
    ev.preventDefault()
    this.state.newTask  === ''? this.setState({

      error:true
    })
    :
    this.setState({
      tasks:[...this.state.tasks, this.state.newTask],
      newTask:{ name: ''}
    })
  }

  clickTask (id){

  let tr = JSON.parse(JSON.stringify(this.state.tasks));
  tr[id-1].done = !tr[id-1].done;
  this.setState({
    tasks: tr
  })

 

  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => (
              <li key={task.id} className={ task.done ? "done" : "" } onClick={ () => this.clickTask(task.id)} >{task.name}</li>
            ))}
          </ul>
          <form onSubmit={this.handleChange} >
            <input
              className={  this.state.error ? "error" : ''}
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              value={this.state.newTask.name}
              onChange={this.handleInput}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
