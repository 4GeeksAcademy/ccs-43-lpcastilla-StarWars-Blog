import React, { useContext, useEffect } from "react";
import {useParams} from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = () => {
    const params = useParams()
    const { store, actions } = useContext(Context)
    console.log(params)

    useEffect(() => {
        actions.getSinglePlanet(params.planetId)
    }, [])

    return (
        <React.Fragment>
            {
            store.singlePlanet.properties ? (
                <div className="planetContainer vh-80 bg-dark d-flex justify-content-center pt-3">
                    <div className="card mb-3 bg-secondary" style={{width: "70%"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://www.freepnglogos.com/uploads/mars-png/mars-terrestrial-planets-21.png" className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{store.singlePlanet.properties.name}</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null
            }
        </React.Fragment>
    )
}