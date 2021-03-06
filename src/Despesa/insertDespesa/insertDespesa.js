import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './insert.css';
import { API_ADDRESS } from '../../service/service';

class CriarDespesa extends Component {
    constructor() {
        super();

        this.state = {
            Despesa: {
                despesa: "",
                descricao: "",
                valor: 0,
                data: new Date().toISOString().substring(0, 10)
            },
            redirect: false,
        }
    }
    render () {

        const { redirect } = this.state;
        if (redirect) {
            return (
                <Redirect to="../lista" />,
                <div className="alert alert-success aler" role="alert">
                    <p>Os dados foram salvos com sucesso</p>
                </div>
            )
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend align="center">Cadastrar Despesa</legend>
                        <div className="card textForm">
                            <h3 align="center">Despesa</h3>
                            <div className="card-body">
                                <div className="form-row">
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="despesa">Despesa</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="despesa"
                                            name="despesa"
                                            required
                                            onChange={this.handleInputChange} >
                                            <option></option>
                                            <option>options 1</option>
                                            <option>options 2</option>
                                            <option>options 3</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="valor">Valor</label>
                                        <input
                                            className="form-control config-input"
                                            type="Number"
                                            id="valor"
                                            name="valor"
                                            min="1"
                                            required
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className="form-group col-sm-6">
                                        <label htmlFor="descricao">descricao:</label>
                                        <textarea
                                            row="3"
                                            className="form-control config-input"
                                            type="text"
                                            id="descricao"
                                            name="descricao"
                                            required
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className="form-group col-sm-3">
                                        <label htmlFor="data">data:</label>
                                        <input
                                            className="form-control config-input"
                                            type="date"
                                            id="data"
                                            name="data"
                                            defaultValue={this.state.Despesa.data}
                                            onChange={this.handleInputChange} />
                                    </div>

                                </div>
                                <button type="submit" className="btn btn-primary btn-lg float-right" >Cadastrar</button>

                            </div>
                        </div>
                    </fieldset>
                </form>
            )
        }
    }

    // Metodo para atualizar o estado do campo
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;     //pega o nome do camo atravez do target
        const value = target.value;   //pega o valor do camo atravez do target

        this.setState(prevState => ({
            Despesa: { ...prevState.Despesa, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        fetch(`${API_ADDRESS}/Despesa`, {
            method: "post",
            body: JSON.stringify(this.state.Despesa),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {     //vereficar os dados
                if (data.ok) {
                    this.setState({ redirect: true });
                }
            })
        event.preventDefault();
    }
}

export default CriarDespesa;

