import React, { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom';
import FormActeAndBirthday from './../../components/form_acte/FormActeAndActBirthday';
import { makeRequest } from '../../services/axios';

// import ACTES from '../../models/mock-acte';
// import PersonneService from '../../services/servicePersonne';
// import ActeService from '../../services/serviceActe';



const FormAddActe = () => {

    const { id } = useParams();

    const [personne, setPersonne] = useState([]);
    const [acte, setActe] = useState([]);

    const [errorPerso, setErrorPerso] = useState(false);
    const [errorActe, setErrorActe] = useState(false);
    
    //GET ACTE PAR UN ID
    useEffect(() => {
        makeRequest.get(`/actes/${id}`).then(response => {
            if (!response.data) {
                console.log("Aucun donnée trouvé");
                setErrorActe(true); return
            }
            setErrorActe(false);
            setActe(response.data);
        })
        .catch(error => console.log(error) )
    }, [id]);

    

    //GET PERSONNE PAR UN ID
    useEffect(() => {   
        if (acte) {
            makeRequest.get(`/personnes/${acte?.id_acte}/`).then(response => {
                if (!response.data) {
                    console.log("Aucun donnée trouvé");
                    setErrorPerso(true); return
                }
                // console.log(response.data);
                setErrorPerso(false);
                setPersonne(response.data);
            })
            .catch(error => console.log(error) ) 
        }
    }, [acte]);

    // Resultat de Get
    let error = true;
    error = errorPerso && errorActe 

    return (
        <>
            {!error ? 
            (
                <FormActeAndBirthday personne={personne} acte={acte} isEditForm={true} error={error}/>
            ):(
                <p>Aucun donnee trouvé</p>
            )}
        </>
        )
}

export default FormAddActe;
