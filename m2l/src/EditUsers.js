import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Navbaradmin from './Navbaradmin.js';

export default function EditUsers() {
    let { id } = useParams()

    const { handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const [pseudo, setPseudo] = useState("")
    const [email, setEmail] = useState("")
    const [statut, setStatut] = useState("")

    const recup = async () => {
        await axios.get(`http://localhost:8000/users/` + id)
            .then(res => {
                setPseudo(res.data[0].pseudo)
                setEmail(res.data[0].email)
                setStatut(res.data[0].statut)
            })
    }

    const editUsers= async () => {
        await axios.put(`http://localhost:8000/users/` + id, {
            pseudo: pseudo,
            email: email,
            statut: statut,
            
        })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert("Envoie réussi")
                    navigate("/");
                }
                else {
                    alert("Erreur d'envoi")
                }
            })
    }
    
    useEffect(() => {
        recup()
    }, [])

    return (
    <div>
        <Navbaradmin/>
        <div className='container'>
            <h2> Editer un article</h2>

            <form onSubmit={handleSubmit(editUsers)}>
            
                <label>Nom : </label>
                <input defaultValue={pseudo} onChange={(e) => setPseudo(e.target.value)} />
                <br/>
                <label>Email : </label>
                <input defaultValue={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Statut : </label>
                <input defaultValue={statut} onChange={(e) => setStatut(e.target.value)} />

                {(errors.pseudo || errors.email || errors.statut ) ? <span>Tous les champs doivent être remplis</span> : ""}

                <input type="submit" />
            </form>
        </div>
    </div>
    )
}
