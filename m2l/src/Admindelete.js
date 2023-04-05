import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';


const Supprimer = () => {
    const [articles, setArticles] = useState([]);

    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8000/display',
      );
      setArticles(result.data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete('http://localhost:8000/display/${id}');
            console.log(res.data);
            fetchData();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <ul>
                {articles.map((articles) => (
                    <li key={articles.id}>
                        <p><hr/>nom : {articles.name} <br/> prix : {articles.prix} <br/> image : {articles.image} <br/> Quantité : {articles.quantite}</p>
                        <button onClick={() => handleDelete(articles.id)}>Supprimé</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Supprimer;