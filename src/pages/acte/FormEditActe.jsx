import React, { useState, useEffect  } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import FormActeAndBirthday from './../../components/form_acte/FormActeAndActBirthday';
import ACTES from '../../models/mock-acte';
import PersonneService from '../../services/servicePersonne';
import ActeService from '../../services/serviceActe';


const FormAddActe = () => {
    const { id } = useParams();

    const [personne, setPersonne] = useState([]);
    const [acte, setActe] = useState([]);

    useEffect(() => {   
        PersonneService.getPersonneById(+id).then(personne => setPersonne(personne));
        
        ActeService.getActeById(+id).then(acte => setActe(acte));
    }, [id]);
  
    return (
        <>
            <FormActeAndBirthday personne={personne} acte={acte} isEditForm={true} />
        </>
    )
}

export default FormAddActe;
