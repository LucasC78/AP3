import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FaTrash, FaPen } from 'react-icons/fa';
import './ArticlesCard.css';

export default function EditArticle() {
    const [article, setArticle] = useState([])
    const [affichage, setAffichage] = useState(false)

    const recup = async () => {
        await axios.get(`http://localhost:8000/articles`)
            .then(res => {
                console.log(res)
                setArticle(res.data)
                setAffichage(true)
            })
    }

    useEffect(() => {
        recup()
    }, [])

    return (
        <div className='body'>
            <h2> Les articles</h2>
            <div className="boxarticles">
                {affichage ?
                    article.map(articles => (
                        <div key={`articles-${articles.id}`}>
                            <div className='box-title' >
                                Articles n° {articles.id}  {articles.name}
                            </div>
                            <div className='box-body'>
                                {articles.prix}
                                <br />
                                {articles.image}
                                <br />
                                {articles.quantite}
                            </div>
                            <div className='box-link1'>
                                <Link to={'/Adminedit/' + articles.id}><FaPen /></Link>
                                <Link to={'/Admindelete/'+ articles.id}><FaTrash /></Link>
                            </div>
                        </div>
                    ))
                    : <p>Chargement...</p>
                }
            </div>
        </div>
    )
}