import React, { useState } from 'react'
import Commune from '../../models/commune'
import FormCommune from '../../components/form_commune/FormCommune'

const FormAddCommune = () => {
    const [commune] = useState(new Commune())
  return (
    <>
        <FormCommune commune={commune} isEditForm={false} />
    </>
  )
}

export default FormAddCommune;
