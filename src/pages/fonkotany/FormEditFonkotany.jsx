import React, { useEffect, useState } from 'react'
import FormFonkotany from '../../components/form_fonkotany/FormFonkotany';
import { useParams } from 'react-router-dom';
import { makeRequest } from '../../services/axios';
// import FONKOTANY from '../../models/mock-fonkotany';

const FormEditFonkotany = () => {
    const { id } = useParams();
    
    const [error, setError] = useState(false);
    const [fonkotany, setFonkotany] = useState([]);

    useEffect(() => {   
        makeRequest.get(`/fonkotany/${id}`)
        .then(resp => { 
            if (!resp.data) {
                setError(true)
            }
            setFonkotany(resp.data); 
        })
        .catch(error => {console.log(error);})
    }, [id]);


    return (
        <>
         {!error ? 
            (
                <FormFonkotany fonkotany={fonkotany} isEditForm={true} />
            ):(
                <p>Aucun donnee trouvé</p>
            )}
        </>
    )
}

export default FormEditFonkotany
