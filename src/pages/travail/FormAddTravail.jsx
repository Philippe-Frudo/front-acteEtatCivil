import React, { useState } from 'react'
import Travail from '../../models/travail'
import FormTravail from '../../components/form_travail/FormTravail'

const FormAddTravail = () => {
    const [travail] = useState(new Travail());
  return (
    <>
        <FormTravail travail={travail} isEditForm={false} />
    </>
  )
}

export default FormAddTravail;