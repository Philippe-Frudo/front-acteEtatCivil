import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import FormActeAndBirthday from './../../components/form_acte/FormActeAndActBirthday';
import ACTES from '../../models/mock-acte';


const FormAddActe = () => {
    const { id } = useParams()

    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/acte-etat-civil", {replace:true});
    }

    const [personne, setPersonne] = useState(null);
    const [acte, setActe] = useState(null);

    useEffect(() => {   
        const foundPersonne = PERSONNES.find(p => { p.id_person == id; return; } );
        if (foundPersonne) {
            setPersonne(foundPersonne);
        }
        /*PokemonService.getPokemonById(+ID).then(pokemon => setPokemon(pokemon));*/
    }, [id]);
    
    useEffect(() => {   
        const foundAct = ACTES.find(a => { id === a.id_person.toString(); return })
        if (foundAct) {
            setActe(foundAct); return; 
        }
        /*PokemonService.getPokemonById(+ID).then(pokemon => setPokemon(pokemon));*/
    }, [id]);

    
    return (
        <>
            <FormActeAndBirthday personne={personne} acte={acte} isEditForm={true} />
        </>
    )
}

export default FormAddActe;
