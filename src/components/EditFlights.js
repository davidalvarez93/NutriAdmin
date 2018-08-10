
import React, {Component } from 'react';
import {Input} from 'react-materialize';

import './estilos.css'

class Airport extends Component{
    constructor(){
        super();
        this.state={
            Ap_Name:'',
            Ap_Country:'',
            Origen: '',
            Fecha_De_Salida: '',
            Hora_De_Salida: '',
            Destino: '',
            Fecha_De_Llegada: '',
            Hora_De_Llegada: '',
            Capacidad: '',
            Precio: '',
            Aeropuertos:[],
            _id:''
        };
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(){
        this.fetchFlights();
        this.fetchAirports();
    }

    fetchAirports(){
        fetch('http://localhost:3001/api/journeys/Apts/')  
            .then(res=>res.json())
            .then(data=>{
                this.setState({Aeropuertos:data});
            });
    }

    fetchFlights(){
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
        window.Materialize.toast("Vuelo Actualizado",900,"light-blue darken-3")
        });
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        let optionItems = this.state.Aeropuertos.map((Aeropuerto) =>
        <option key={Aeropuerto._id}>{Aeropuerto.Ap_Name}</option>
    );
        return(
            <div>
                <Input className="col s10 push-s1 select2"
                        s={12} type='select' 
                        data={this.state.Aeropuertos}
                        textField="Origen" 
                        defaultValue='Selecciona un Aeropuerto'
                        id="_id"
                        onChange={this.handleChange}
                        value={this.state.Origen}
                        name="Origen"
                        >
                     
                        {optionItems}
                  
                    </Input>
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
                <Input className="col s10 push-s1 select2"
                        s={12} type='select' 
                        data={this.state.Aeropuertos}
                        textField="Destino" 
                        defaultValue='Selecciona un Aeropuerto'
                        id="_id"
                        onChange={this.handleChange}
                        value={this.state.Destino}
                        name="Destino"
                        >
                     
                        {optionItems}
                  
                    </Input>
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
                <div className="row">
                    <div className="col s1 push-s9">
                        <button onClick={()=>{this.GuardarCambios()}}  className="btn light-blue darken-3 large" disabled={
                            !this.state.Origen ||
                            !this.state.Fecha_De_Salida||
                            !this.state.Hora_De_Salida||
                            !this.state.Destino||
                            !this.state.Fecha_De_Llegada||
                            !this.state.Hora_De_Llegada||
                            !this.state.Capacidad||
                            !this.state.Precio
                        }>
                            Guardar
                        </button>
                    </div>
                </div>
        </div>
        )
    }
}

export default Airport;