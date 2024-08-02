import React, { useState } from 'react'
import District from '../../models/district'
import FormDistrict from '../../components/form_district/FormDistrict'

const FormAddDistrict = () => {
    const [district] = useState(new District());
  return (
    <>
        <FormDistrict district={district} isEditForm={false} />
    </>
  )
}

export default FormAddDistrict;