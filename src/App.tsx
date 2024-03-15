import React from 'react';
import classes from './App.module.scss';

interface Param {
  id: number;
  name: string;
  type?: React.HTMLInputTypeAttribute;
}

interface ParamValue {
  paramId: number;
  value: string | number;
}

interface Color {}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

const params: Param[] = [
  { id: 1, name: "Назначение" },
  { id: 2, name: "Длина" },
];

const model: Model = {
  colors: [],
  paramValues: [
    { paramId: 1, value: "повседневное" },
    { paramId: 2, value: "макси" },
  ],
};

interface State {
  model: Model;
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {model};
  }

  public getModel(e: React.MouseEvent<HTMLButtonElement>):Model {
    e.preventDefault();
    console.log(this.state.model);
    return this.state.model;
  }

  public setModel(e: React.ChangeEvent<HTMLInputElement>, paramId: number): void {
    this.setState(() => {
      this.state.model.paramValues.map(paramValue => {
        if (paramValue.paramId === paramId) paramValue.value = e.target.value
      })
        return { model };
    });
  }

  render() {
    return (
      <form className={classes.model__edit}>
        {params.map(param => {
            return (
              <div className={classes.model__wrapper} key={param.id}>
                <label className={classes.model__name}>{param.name}</label>
                <input type="text" className={classes.model__value} value={this.state.model.paramValues.find(p => p.paramId === param.id)?.value} onChange={e=>this.setModel(e, param.id)}/>
              </div>
            )
        })}
        <button onClick={e=>this.getModel(e)}>Получить структуру в консоль</button>
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <ParamEditor model={model} params={params}/>
    </div>
  );
}

export default App;
