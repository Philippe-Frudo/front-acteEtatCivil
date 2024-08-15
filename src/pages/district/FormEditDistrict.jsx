import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormDistrict from './../../components/form_district/FormDistrict';
import { makeRequest } from '../../services/axios';
// import DistrictService from '../../services/serviceDistrict';
// import DISTRICT from '../../models/mock-district';

const FormEditDistrict = () => {
    const { id } = useParams();
    
    const [error, setError] = useState(false);
    const [district, setDistrict] = useState({});
    
    useEffect(() => {   
        makeRequest.get(`/districts/${id}`)
        .then(resp => { 
            if (!resp.data) {
                setError(true)
            }
            setDistrict(resp.data); 
        })
        .catch(error => {console.log(error);})
    }, [id]);

    return (
        <>
            {!error ? 
            (
                <FormDistrict district={district} isEditForm={true} />
            ):(
                <p>Aucun donnee trouvé</p>
            )}
        </>
    )
}

export default FormEditDistrict