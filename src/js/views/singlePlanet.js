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
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${store.singlePlanet.uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
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
                                <div className="col-md-2">
                                    <div className="row"><strong>Name</strong></div>
                                    <div className="row justify-content-center">{store.singlePlanet.properties.name}</div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row"><strong>Terrain</strong></div>
                                    <div className="row justify-content-center">{store.singlePlanet.properties.terrain}</div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row"><strong>Climate</strong></div>
                                    <div className="row justify-content-center">{store.singlePlanet.properties.climate}</div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row"><strong>Diameter</strong></div>
                                    <div className="row justify-content-center">{store.singlePlanet.properties.diameter}</div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row"><strong>Rotation Period</strong></div>
                                    <div className="row justify-content-center">{store.singlePlanet.properties.rotation_period}</div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row"><strong>Orbital Period</strong></div>
                                    <div className="row justify-content-center">{store.singlePlanet.properties.orbital_period}</div>
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

                        