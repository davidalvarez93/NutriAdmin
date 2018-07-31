
import React, {Component } from 'react';

import './estilos.css'

class Airport extends Component{
    constructor(){
        super();
        this.state={
            Ap_Name:'', 
            Ap_Country:'',
            Ap_State:'',
            Ap_City:'',
            Ap_Address:'',
            _id:'',
            AeropuertoParaEditar:[]
        };
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(){
        this.fetchAirport('5b5f67f1d2e2be2d408b4397');
    }

    fetchAirport(id){
        fetch(`http://localhost:3001/api/journeys/Apts/${id}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                AeropuertoParaEditar:data});
            })
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }


    editAirport(id) {
        
    }


    render(){
        return(
            <div>
            <form >
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Ap_Name" value={this.state.AeropuertoParaEditar.Ap_Name} onChange={this.handleChange} type="text" placeholder="Nombre de Aeropuerto"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Ap_Country" value={this.state.AeropuertoParaEditar.Ap_Country} onChange={this.handleChange} type="text" placeholder="Pais"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Ap_State" value={this.state.AeropuertoParaEditar.Ap_State} onChange={this.handleChange}  type="text" placeholder="Estado"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Ap_City" value={this.state.AeropuertoParaEditar.Ap_City} onChange={this.handleChange}  type="text" placeholder="Ciudad"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Ap_Address" value={this.state.AeropuertoParaEditar.Ap_Address} onChange={this.handleChange}  type="text" placeholder="Dirección"/>
                                            </div>
                                        </div>
                                        <div className="row"></div>
                                        <div className="row">
                                            <button  className="btn light-blue darken-4" style={{margin: '4px'}}>
                                                <i className="material-icons">edit</i>
                                            </button>
                                        </div>

                                    </form>
        </div>
        )
    }
}

export default Airport;
//5b5f67f1d2e2be2d408b4397