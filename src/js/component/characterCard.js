import React from "react";
import "../../styles/home.css";
import { useNavigate } from "react-router";

export const CharacterCard = ({data}) => {
    const navigate = useNavigate()
    return (
        <div className="card bg-secondary" style={{width: "18rem"}}>
            <img src="https://www.freepnglogos.com/uploads/star-wars-png/star-wars-glasses-specsavers-5.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <div className="d-flex justify-content-between pt-2">
                        <button 
                            className="btn btn-outline-light"
                            onClick={() => {
                                navigate("/people/" + data.uid)
                            }}    
                        >Learn More!</button>
                        <button 
                            className="btn btn-outline-warning"
                            onClick={() => {

                            }}    
                        ><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
        </div>
    );     
};


