import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { REGION } from '../../helpers/mock-region';
import FormRegion from './../../components/form_region/FormRegion';

import Regionservice from '../../services/serviceRegion';


const FormEditRegion = () => {
    let { id } = useParams();
    
    const [region, setRegion] = useState([]);
    useEffect(() => {   
        // const foundRegion = REGION.find(f => f.code_region == id);
        Regionservice.getRegionById(+id).then(region => setRegion(region) );
    }, [id]);

    console.log(region);
    

    return (
        <>
            <FormRegion region={region} isEditForm={true} />
        </>
    )
}

export default FormEditRegion