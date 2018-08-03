
import React, {Component } from 'react';
import { Modal, Button, Row, Col} from 'react-materialize';
import SearchInput, {createFilter} from 'react-search-input';
import AddAirportView from './AddAirport';
import EditAirportView from './EditAirports'

import './estilos.css'

const KEYS_TO_FILTERS = ['Ap_Name', 'Ap_Country', 'Ap_State', 'Ap_City', 'Ap_Address']

class Airport extends Component{
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
            searchTerm: ''
        };
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    componentDidMount(){
        this.fetchAirports();
       
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
    nolose(){
        console.log("si funciona");
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
                        <Modal header="Agregar Nuevo Aeropuerto" className="MiModal center"
                            trigger={
                                <Button className="waves-effect waves-light light-blue darken-3">
                                    Agregar Aeropuerto
                                </Button>
                            }>
                            <AddAirportView/> 
                            {this.fetchAirports()}
                        </Modal>
                            </Col>
                        </Row>
        <div className="row">
                    <div className="col s12 ">
                        <table className=" highlight">
                            <thead>
                                <tr>
                                <th>Nombre de Aeropuerto</th>
                                    <th>Pais</th>
                                    <th>Estado</th>
                                    <th>Ciudad</th>
                                    <th>Dirección</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody >
        
        {filteredAeropuertos.map(Aeropuertos => {
          return (
<tr key={Aeropuertos._id}>
                                                <td>{Aeropuertos.Ap_Name}</td>
                                                <td>{Aeropuertos.Ap_Country}</td>
                                                <td>{Aeropuertos.Ap_State}</td>
                                                <td>{Aeropuertos.Ap_City}</td>
                                                <td>{Aeropuertos.Ap_Address}</td>
                                                <td>
                                                <button className="waves-effect waves-light light-blue darken-3 btn tiny" style={{margin:"6px"}} 
                                                    onClick={()=>this.DeleteAirport(Aeropuertos._id)}>
                                                        <i className="material-icons ">delete</i>
                                                    </button>
                                                </td>
                                                <td>
                                                    <Modal header='Editar Aeropuerto' className="MiModal center"
                                                        fixedFooter
                                                        actions={
                                                            <div>
                                                                <Button flat style={{padding:" 10px 15px"}} disabled/>
                                                                <Button modal="close" className="btn light-blue darken-3" >Cerrar  </Button>
                                                            </div>
                                                        }
                                                        modalOptions={{dismissible:false,
                                                                    complete:()=>this.fetchAirports(),
                                                                    }}
                                                        trigger={
                                                            <button className="waves-effect waves-light light-blue darken-3 btn tiny" style={{margin:"6px"}}>
                                                                <i className="material-icons ">edit</i>
                                                            </button>
                                                        }>
                                                    <EditAirportView IdFromParent={Aeropuertos._id}/>
                                                    </Modal>
                                                </td>
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

export default Airport;