import React, { useEffect, useState } from 'react'
import { FONKOTANY } from '../../models/mock-fonkotany';
import FormFonkotany from './FormFonkotany';
import { hiddenList } from '../../helpers/borderField';
import { string } from 'zod';
import { useParams } from 'react-router-dom';

const FormEditFonkotany = () => {
    let { id } = useParams();
    
    const [fonkotany, setFonkotany] = useState({});
    
    useEffect(() => {   
        const foundFonkotany = FONKOTANY.find(f => f.id_fonkotany == id);
        if (foundFonkotany) {
            setFonkotany(foundFonkotany);
        }
        /*APIService.getPokemonById(+ID).then(pokemon => setPokemon(pokemon));*/
    }, [id]);

    return (
        <>
            <FormFonkotany fonkotany={fonkotany} isEditForm={true} />
        </>
    )
}

export default FormEditFonkotany
