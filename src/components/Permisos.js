import React, {Component } from 'react';
import { Modal, Button, Row, Col, Input, Dropdown} from 'react-materialize';
import SearchInput, {createFilter} from 'react-search-input';
import Switch from "react-switch";
import AddUserView from './AddUser';

import './estilos.css'


const KEYS_TO_FILTERS = ['Ap_Name', 'Ap_Country', 'Ap_State']


class Permisos extends Component{
    constructor(props){
        super(props);
        this.state={
            Ap_Name:'', 
            Ap_Country:'',
            Ap_State:'',
            Ap_City:'',
            Ap_Address:'',
            _id:'',
            Aeropuertos:[],
            searchTerm: '',
            checked:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchUpdated = this.searchUpdated.bind(this);
    }
    
    componentDidMount(){
        this.fetchAirports();
       
    }

    handleChange(checked) {
        this.setState({ checked });
      }

    fetchAirports(){
        fetch('http://localhost:3001/api/journeys/Apts/')  
            .then(res=>res.json())
            .then(data=>{
                this.setState({Aeropuertos:data});
            });
        }

    DeleteAirport(id){
        if(window.confirm('Estas seguro de eliminar el aeropuerto')){
            fetch(`http://localhost:3001/api/journeys/Apts/${id}`,{
                method:'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                window.Materialize.toast("Aeropuerto Eliminado");
                this.fetchAirports();
            });
        }
    }

    render(){
        const filteredAeropuertos = this.state.Aeropuertos.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return(
            [
                <div className="container">
                <div className="section">
                <div>
        <Row>
        <SearchInput  style={{width: "400px",position: "relative", padding: "10px 10px",
  height: "15px", lenght: "400px"}} 
        className="col s6 search-input light-blue darken-3" onChange={this.searchUpdated} />
            <Col className="col s5 push-s1 ">
                        <Modal header="Agregar nuevo Usuario" className="MiModal center"
                            trigger={
                                <Button className="waves-effect waves-light light-blue darken-3">
                                    Agregar Usuario Admin
                                </Button>
                            }>
                            <AddUserView/> 
                            {this.fetchAirports()}
                        </Modal>
                            </Col>
                        </Row>
        <div className="row">
                    <div className="col s12 ">
                        <table className=" highlight">
                            <thead>
                                <tr>
                                    <th>Numero</th>
                                    <th>Usuario</th>
                                    <th>Fecha de Creación</th>
                                    <th>Aeropuertos</th>
                                    <th>Vuelos</th>
                                    <th>Permisos</th>
                                    <th>Deshabilitar/Habilitar</th>
                                </tr>
                            </thead>
                            <tbody >
        
        {filteredAeropuertos.map(Aeropuertos => {
            return (
                <tr key={Aeropuertos._id}>
                                                <td>{Aeropuertos.Ap_Name}</td>
                                                <td>{Aeropuertos.Ap_Country}</td>
                                                <td>{Aeropuertos.Ap_State}</td>
                                                <td>{<Input name='group1' 
                                                    type='checkbox' 
                                                    value='green' 
                                                    label='A' 
                                                    className='filled-in' 
                                                    defaultValue='checked' 
                                                    disabled=''
                                                    onChange={function(e, value){}}/>}</td>
                                                <td>{<Input name='group1' 
                                                    type='checkbox' 
                                                    value='green' 
                                                    label='V' 
                                                    className='filled-in' 
                                                    defaultValue='checked' 
                                                    disabled=''
                                                    onChange={function(e, value){}}/>}</td>
                                                <td>{<Input name='group1' 
                                                    type='checkbox' 
                                                    value='green' 
                                                    label='P' 
                                                    className='filled-in' 
                                                    defaultValue='checked' 
                                                    disabled=''
                                                    onChange={function(e, value){}}/>}</td>
                                                <td>{<label htmlFor={Aeropuertos.checked}>
        <span>ena/dis</span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.Aeropuertos.checked}
          id={Aeropuertos._id}
        />
      </label> }</td>

                                            </tr>
          )
        })
        }
         </tbody>
                        </table>
                        <ul class="pagination center">
                            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                            <li class="active"><a href="#!">1</a></li>
                            <li class="waves-effect"><a href="#!">2</a></li>
                            <li class="waves-effect"><a href="#!">3</a></li>
                            <li class="waves-effect"><a href="#!">4</a></li>
                            <li class="waves-effect"><a href="#!">5</a></li>
                            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>

                    
            ]
        )
    }    
        searchUpdated (term) {
            this.setState({searchTerm: term})
    }
}

export default Permisos;