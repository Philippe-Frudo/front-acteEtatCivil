import React from 'react'

const FormAddAct = () => {
    return (
        <>
            <div className="content-mere">
                <h3 className="card-acte">Acte</h3>
                <fieldset>
                    <div >
                        <label htmlFor="type_acte" className="form-group-label">Type d'acte:</label>
                        <select className="form-group-input select type_acte" name="type_acte" id="type_acte">
                            <option value="#">Naissance</option>
                            <option value="#">Mariage</option>
                            <option value="#">Divorce</option>
                        </select>
                        <span className="msg-error"></span>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="lieu_acte" className="form-group-label">Lieu d'acte:</label>
                            <input type="text" className="form-group-input lieu_acte" name="lieu_acte" id="lieu_acte" placeholder="Lieu de l'acte" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group form-group-2">
                        <div>
                            <label htmlFor="date_acte" className="form-group-label">Date de l'acte:</label>
                            <input type="date" className="form-group-input date_acte" name="date_acte" id="date_act" placeholder="Date de l'acte" />
                            <span className="msg-error"></span>
                        </div>
                        <div>
                            <label htmlFor="heure_acte" className="form-group-label">Heure:</label>
                            <input type="time" className="form-group-input heure_acte" name="heure_acte" id="heure_acte" placeholder="Heure de l'acte" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group">
                    </div>

                </fieldset>
            </div >
        </>
    )
}

export default FormAddAct
