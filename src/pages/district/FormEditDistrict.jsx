import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { DISTRICT } from '../../models/mock-district';
import FormDistrict from './../../components/form_district/FormDistrict';

const FormEditDistrict = () => {
    let { id } = useParams();
    
    const [district, setDistrict] = useState({});
    
    useEffect(() => {   
        const foundDistrict = DISTRICT.find(f => f.code_district == id);
        if (foundDistrict) {
            setDistrict(foundDistrict);
        }
        /*APIService.getPokemonById(+ID).then(pokemon => setPokemon(pokemon));*/
    }, [id]);

    return (
        <>
            <FormDistrict district={district} isEditForm={true} />
        </>
    )
}

export default FormEditDistrict