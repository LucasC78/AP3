import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbaradmin from './Navbaradmin.js';
import { FaTrash, FaPen } from 'react-icons/fa';
import './ArticlesCard.css';

export default function EditArticle() {
    const [articles, setArticles] = useState([])
    const [affichage, setAffichage] = useState(false)

    articles.map((articles) => {console.log(articles)})
    
    const recup = async () => {
        await axios.get(`http://localhost:8000/articles`)
            .then(res => {
                console.log(res)
                setArticles(res.data)
                setAffichage(true)
            })
    }

    useEffect(() => {
        recup()
    }, [])

    return (
    <div>
        <Navbaradmin/><br/>
        <div className='body'>
            <h2> Les articles</h2>
            <br/>
            <div className="boxarticles">
                {affichage ?
                    articles.map(articles => (
                        <div key={`articles-${articles.id}`}>
                            <div className='box-title' >
                                Articles n° {articles.id}  {articles.name}
                            </div>
                            <div className='box-body'>
                                {articles.prix} €
                                <br />
                            <div>
                                <img className='img-size2' src={`${process.env.PUBLIC_URL}/images/${articles.image}`}/>
                                {/* src={`${process.env.PUBLIC_URL}/${articles.img}`} */}
                            </div>
                                <br/>
                                {articles.quantite} Qte
                            </div>
                            <div className='box-link1'>
                                <Link to={'/EditArticles/' + articles.id}><FaPen /></Link>
                                <Link to={'/DeleteArticles/'+ articles.id}><FaTrash /></Link>
                            </div>
                        </div>
                    ))
                    : <p>Chargement...</p>
                }
            </div>
        </div>
        <br/><br/><br/><br/>
    </div>
    )
}