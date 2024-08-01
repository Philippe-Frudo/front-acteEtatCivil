import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormDistrict from './../../components/form_district/FormDistrict';
import DistrictService from '../../services/serviceDistrict';
// import DISTRICT from '../../models/mock-district';

const FormEditDistrict = () => {
    const { id } = useParams();
    
    const [district, setDistrict] = useState({});
    
    useEffect(() => {   
        DistrictService.getDistrictById(+id).then(district => setDistrict(district));
    }, [id]);

    return (
        <>
            <FormDistrict district={district} isEditForm={true} />
        </>
    )
}

export default FormEditDistrict