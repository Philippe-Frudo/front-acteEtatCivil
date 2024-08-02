import React, { useState } from 'react'
import Region from '../../models/region'
import FormRegion from '../../components/form_region/FormRegion'

const FormAddRegion = () => {
    const [region] = useState(new Region());
  return (
    <>
        <FormRegion region={region} isEditForm={false} />
    </>
  )
}

export default FormAddRegion;