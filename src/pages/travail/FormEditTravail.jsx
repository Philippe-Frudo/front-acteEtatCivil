import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { TRAVAILS } from '../../models/mock-travail';
import FormTravail from './../../components/form_travail/FormTravail';

const FormEditTravail = () => {
    let { id } = useParams();
    
    const [travail, setTravail] = useState({});
    
    useEffect(() => {   
        const foundTravail = TRAVAILS.find(f => f.id_travail == id);
        if (foundTravail) {
            setTravail(foundTravail);
        }
        /*APIService.getPokemonById(+ID).then(pokemon => setPokemon(pokemon));*/
    }, [id]);

    return (
        <>
            <FormTravail travail={travail} isEditForm={true} />
        </>
    )
}

export default FormEditTravail;