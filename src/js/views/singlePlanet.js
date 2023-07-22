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
                <div className="planetContainer vh-80 bg-dark d-flex justify-content-center pt-5">
                    <div className="card mb-3 bg-secondary" style={{width: "70%"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://www.freepnglogos.com/uploads/mars-png/mars-terrestrial-planets-21.png" className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{store.singlePlanet.properties.name}</h5>
                                    <p className="card-text">
                                        Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star Wars is one of the highest-grossing media franchises of all time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr style={{ borderTop: "2px solid red", margin: "10px 0" }} />
                        <div className="datawrap text-center p-3">
                            <div className="row">
                                <div className="col"><strong>Name</strong></div>
                                <div className="col"><strong>Terrain</strong></div>
                                <div className="col"><strong>Climate</strong></div>
                                <div className="col"><strong>Diameter</strong></div>
                                <div className="col"><strong>Rotation Period</strong></div>
                                <div className="col"><strong>Orbital Period</strong></div>
                            </div>
                            <div className="row">
                                <div className="col">{store.singlePlanet.properties.name}</div>
                                <div className="col">{store.singlePlanet.properties.terrain}</div>
                                <div className="col">{store.singlePlanet.properties.climate}</div>
                                <div className="col">{store.singlePlanet.properties.diameter}</div>
                                <div className="col">{store.singlePlanet.properties.rotation_period}</div>
                                <div className="col">{store.singlePlanet.properties.orbital_period}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null
            }
        </React.Fragment>
    )
}