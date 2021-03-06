import React, { Component } from 'react';
import './delete.css';
import { Redirect, Link } from 'react-router-dom';
import api, { API_ADDRESS } from '../../service/service';

class DeletePA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            publicoAtendido: {},
            redirect: false
        };
    }


    async componentDidMount() { 
        const { id } = this.props.match.params;
        const response = await api.get(`/CadastroPublico/${id}`);
        this.setState({ publicoAtendido: response.data });
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect />
        } else {
            return (
                <fieldset>
                    <legend>Deletar usuario</legend>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <h5>{this.state.publicoAtendido.nome}</h5>
                        <p>Tem certeza que deja deletar esse usuario?</p>
                        <button type="button" className="btn btn-danger btn-lg" onClick={this.handleClick}>Remover</button>
                    </div>
                    <br/>

                  <button type="button" className="btn btn-warning btn-lg"> <Link to="/">Voltar</Link></button> 
                </fieldset>
            )
        }
    }


    handleClick = event => {
        const { id } = this.props.match.params;
        fetch(`${API_ADDRESS}/CadastroPublico/${id}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                }
            })
        event.preventDefault();
    }
}

export default DeletePA;