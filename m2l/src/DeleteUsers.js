import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import { useParams, useNavigate, Link } from "react-router-dom";
import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Navbaradmin from './Navbaradmin.js';

export default function SuppressionUsers() {
    const { handleSubmit } = useForm();
    let { id } = useParams()
    let navigate = useNavigate()

    const SuppressionUsers = async () => {

        await axios.delete(`http://localhost:8000/users/` + id)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert("Suppression réussi")
                    navigate("/ModifyUsers");
                }
                else {
                    alert("Erreur de supression")
                }
            })
    }
    return (
    <div>
        <Navbaradmin/>
        <div>
            <form onSubmit={handleSubmit(SuppressionUsers)} >
                <h2> Êtes-vous sûr de vouloir supprimer cette utilisateur ?</h2>
                <input type="submit" value="Valider" />
                <Link to="/"> Annuler </Link>
            </form>
        </div>
    </div>
    )
}