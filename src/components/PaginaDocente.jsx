import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Docente = ({docente, areas}) => (
    
    <div className="container">
        <div className="row">
        <div class="col-sm col-lg-3 col-md-4 mb-3 d-flex justify-content-center" id="docente-foto">
            <img id="img-docente" className="rounded-circle" src="https://picsum.photos/230/230/?random"/>
        </div>
        <div class="col-sm col-lg-9 col-md-8" id="docente-conteudo">
            <h3 className="text-center text-sm-left">{docente["Nome"]}</h3>
            <h5 className="text-muted text-center text-sm-left">{docente["Tipo"] + "-" +  docente["Horas"] + "h/DE"}</h5>
            <p className="text-justify">{docente["Descrição"]}</p>
            <p className="card-text">
                <FontAwesomeIcon icon="graduation-cap" className="d-inline-block mr-2" />
                Nível: {docente["Nível"]}
            </p>
            <p>{areas}</p>
            <p className="card-text">
                <FontAwesomeIcon icon="envelope" className="d-inline-block mr-2" />
                Email: {docente["Email"]}
            </p> 
            <a href={docente["Lattes"]} className="mr-4">
                <FontAwesomeIcon icon="globe-americas" className="d-inline-block mr-2"/>
                Lattes
            </a>
            <a href={docente["Site pessoal"]} className="mr-4">
                <FontAwesomeIcon icon="globe-americas" className="d-inline-block mr-2"/>
                Página Pessoal
            </a>           
        </div>
        </div>
        
    </div>
);


export default Docente;