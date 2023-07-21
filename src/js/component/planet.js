import React, { useContext, useEffect } from "react";
import {useParams} from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = () => {
    const params = useParams()
    const { store, actions } = useContext(Context)
    console.log(params)

    useEffect(() => {
        actions.getSinglePlanet(params.uid)
    }, [])

    return (

    )
}