import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbaradmin from './Navbaradmin.js';
import { FaTrash, FaPen } from 'react-icons/fa';
import './ArticlesCard.css';

export default function ModifyUsers() {
    const [users, setUsers] = useState([])
    const [affichage, setAffichage] = useState(false)

    const recup = async () => {
        await axios.get(`http://localhost:8000/users`)
            .then(res => {
                console.log(res)
                setUsers(res.data)
                setAffichage(true)
            })
    }

    useEffect(() => {
        recup()
    }, [])

    return (
    <div>
        <Navbaradmin/>
        <div className='body'>
            <h2> Les utilisateurs</h2>
            <div className="boxarticles">
                {affichage ?
                    users.map(users => (
                        <div key={`users-${users.id}`}>
                            <div className='box-title' >
                                Utilisateur n° {users.id}  {users.pseudo}
                            </div>
                            <div className='box-body'>
                                {users.email} 
                                <br />
                                {users.statut}
                                {/* <br />
                                {users.quantite} */}
                            </div>
                            <div className='box-link1'>
                                <Link to={'/EditUsers/' + users.id}><FaPen /></Link>
                                <Link to={'/DeleteUsers/'+ users.id}><FaTrash /></Link>
                            </div>
                        </div>
                    ))
                    : <p>Chargement...</p>
                }
            </div>
        </div>
    </div>
    )
}