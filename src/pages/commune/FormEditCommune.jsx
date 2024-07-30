import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { COMMUNE } from '../../models/mock-commune';
import FormCommune from './../../components/form_commune/FormCommune';

const FormEditCommune = () => {
    let { id } = useParams();
    
    const [commune, setCommune] = useState({});
    
    useEffect(() => {   
        const foundCommune = COMMUNE.find(f => f.code_commune == id);
        if (foundCommune) {
            setCommune(foundCommune);
        }
        /*APIService.getPokemonById(+ID).then(pokemon => setPokemon(pokemon));*/
    }, [id]);

    return (
        <>
            <FormCommune commune={commune} isEditForm={true} />
        </>
    )
}

export default FormEditCommune