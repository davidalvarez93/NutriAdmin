import React, {Component } from 'react';

import './estilos.css'

class Permisos extends Component{
    constructor(){
        super();
        this.state={
            UserName:'', 
            Password:'',
            FechaCreacion:'',
            Per_Aero:'',
            Per_Vue:'',
            Per_Usua:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.AddUsuario=this.AddUsuario.bind(this);
    }


    AddUsuario(e){
        
        fetch('http://localhost:3001/api/journeys/Apts', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=> res.json())
        .then(data => {
            window.Materialize.toast("Aeropuerto Agregado",4000)
            this.setState({
                Ap_Name:'', 
                Ap_Country:'',
                Ap_State:'',
                Ap_City:'',
                Ap_Address:''
            });
            this.fetchAirports();
        })
        .catch(err=> console.error(err));
        e.preventDefault();


    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div>
            <form onSubmit={this.AddUsuario}>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="UserName" value={this.state.UserName} onChange={this.handleChange} type="text" placeholder="UserName"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Password" value={this.state.Password} onChange={this.handleChange} type="text" placeholder="Password"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="FechaCreacion" value={this.state.FechaCreacion} onChange={this.handleChange}  type="text" placeholder="Fecha de Creación"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Per_Aero" value={this.state.Per_Aero} onChange={this.handleChange}  type="text" placeholder="Fecha de Creación"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Per_Vue" value={this.state.Per_Vue} onChange={this.handleChange}  type="text" placeholder="Fecha de Creación"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Per_Usua" value={this.state.Per_Usua} onChange={this.handleChange}  type="text" placeholder="Fecha de Creación"/>
                                            </div>
                                        </div>
                                        
                                        <div className="row"></div>
                                        <div className="row">
                                            <div className="col s1 push-s9">
                                                <button type="submit" className="btn light-blue darken-3">Agregar</button>
                                            </div>
                                        </div>
                                    </form>
        </div>
        )
    }
}

export default Permisos;
