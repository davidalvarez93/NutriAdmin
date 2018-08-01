
import React, {Component } from 'react';

import './estilos.css'

class Airport extends Component{
    constructor(){
        super();
        this.state={
            Origen:'', 
            Fecha_De_Salida:'',
            Hora_De_Salida:'',
            Destino:'',
            Fecha_De_Llegada:'',
            Hora_De_Llegada:'',
            Capacidad:'',
            Precio:'',
            _id:''
        };
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(){
        this.fetchAirport();
    }

    fetchAirport(){
        fetch(`http://localhost:3001/api/journeys/Flgts/${this.props.IdFromParent}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                Origen:data.Origen, 
                Fecha_De_Salida:data.Fecha_De_Salida,
                Hora_De_Salida:data.Hora_De_Salida,
                Destino:data.Destino,
                Fecha_De_Llegada:data.Fecha_De_Llegada,
                Hora_De_Llegada:data.Hora_De_Llegada,
                Capacidad:data.Capacidad,
                Precio:data.Precio,
                _id:data._id
            });
            })
    }

    GuardarCambios(){
        fetch(`http://localhost:3001/api/journeys/Flgts/${this.props.IdFromParent}`,{
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {console.log(data)
        window.Materialize.toast("Vuelo Actualizado",4000)
        });
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
                <div className="row">
                    <div className="input-field col s10 push-s1 MiInputField">
                        <input name="Origen" value={this.state.Origen} onChange={this.handleChange} type="text" placeholder="Origen"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10 push-s1 MiInputField">
                        <input name="Fecha_Salida" value={this.state.Fecha_De_Salida} onChange={this.handleChange} type="text" placeholder="Fecha De Salida"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10 push-s1 MiInputField">
                        <input name="Hora_Salida" value={this.state.Hora_De_Salida} onChange={this.handleChange}  type="text" placeholder="Hora De Salida"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10 push-s1 MiInputField">
                        <input name="Destino" value={this.state.Destino} onChange={this.handleChange}  type="text" placeholder="Destino"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10 push-s1 MiInputField">
                        <input name="Fecha_Llegada" value={this.state.Fecha_De_Llegada} onChange={this.handleChange}  type="text" placeholder="Fecha De Llegada"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10 push-s1 MiInputField">
                        <input name="Hora_Llegada" value={this.state.Hora_De_Llegada} onChange={this.handleChange}  type="text" placeholder="Hora De Llegada"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10 push-s1 MiInputField">
                        <input name="Capacidad" value={this.state.Capacidad} onChange={this.handleChange}  type="text" placeholder="Capacidad"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10 push-s1 MiInputField">
                        <input name="Precio" value={this.state.Precio} onChange={this.handleChange}  type="text" placeholder="Precio"/>
                    </div>
                </div>
                <div className="row"></div>
                <div className="row center">
                    <button onClick={()=>{this.GuardarCambios()}}  className="btn light-blue darken-4 large">
                        Guardar Cambios
                    </button>
                </div>
        </div>
        )
    }
}

export default Airport;