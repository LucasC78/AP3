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
    const [password, setPassword] = useState("")

    const recup = async () => {
        await axios.get(`http://localhost:8000/users/` + id)
            .then(res => {
                setPseudo(res.data[0].pseudo)
                setEmail(res.data[0].email)
                setPassword(res.data[0].password)
            })
    }

    const editUsers= async () => {
        await axios.put(`http://localhost:8000/articles/` + id, {
            pseudo: pseudo,
            email: email,
            password: password,
            
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

                <label>Prix : </label>
                <input defaultValue={email} onChange={(e) => setEmail(e.target.value)} />

                <label>image : </label>
                <input defaultValue={password} onChange={(e) => setPassword(e.target.value)} />

                {(errors.pseudo || errors.email || errors.password ) ? <span>Tous les champs doivent être remplis</span> : ""}

                <input type="submit" />
            </form>
        </div>
    </div>
    )
}
