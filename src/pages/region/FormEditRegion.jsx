import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { REGION } from '../../helpers/mock-region';
import FormRegion from './../../components/form_region/FormRegion';

const FormEditRegion = () => {
    let { id } = useParams();
    
    const [region, setRegion] = useState({});
    
    useEffect(() => {   
        const foundRegion = REGION.find(f => f.code_region == id);
        if (foundRegion) {
            setRegion(foundRegion);
        }
        /*APIService.getPokemonById(+ID).then(pokemon => setPokemon(pokemon));*/
    }, [id]);

    return (
        <>
            <FormRegion region={region} isEditForm={true} />
        </>
    )
}

export default FormEditRegion