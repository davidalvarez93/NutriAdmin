import React, {Component } from 'react';

import './estilos.css'

class Permisos extends Component{
    constructor(){
        super();
        this.state={
            P_Numero:'',
            P_UserName:'',
            P_Date:'',
            P_For_Airports:'',
            P_For_Flights:'',
            P_For_Usernames :'',
            _id:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.AddPermiso=this.AddPermiso.bind(this);
    }


    AddPermiso(e){
        
        fetch('http://localhost:3001/api/journeys/permissions/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=> res.json())
        .then(data => {
            window.Materialize.toast("Usuario Agregado",4000)
            this.setState({
                status:'',
                P_Numero:'',
                P_UserName:'',
                P_Date:'',
                P_For_Airports:'',
                P_For_Flights:'',
                P_For_Usernames :''
            });
            this.fetchPermisos();
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
            <form onSubmit={this.AddPermiso}>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="P_Numero" value={this.state.P_Numero} onChange={this.handleChange} type="number" placeholder="Número"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="P_UserName" value={this.state.P_UserName} onChange={this.handleChange} type="text" placeholder="UserName"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="P_Date" value={this.state.P_Date} onChange={this.handleChange}  type="date" placeholder="Fecha de Creación"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="P_For_Airports" value={this.state.P_For_Airports} onChange={this.handleChange}  type="text" placeholder="Permiso Aeropuertos"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="P_For_Flights" value={this.state.P_For_Flights} onChange={this.handleChange}  type="text" placeholder="Permiso Vuelos"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="P_For_Usernames" value={this.state.P_For_Usernames} onChange={this.handleChange}  type="text" placeholder="Permiso Usuarios"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="status" value={this.state.status} onChange={this.handleChange}  type="text" placeholder="Status"/>
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
