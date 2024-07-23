import React from 'react'
// import "./user-add.css";

const UserAdd = () => {
  return (
    // { /* <!-- =========== Modal add user ========== --> */ }
    <div class="modal add-user" id="add-user">
        <div class="modal-container">
            <div class="modal-header">
                <div>
                    <h3 class="modal-title">Ajout utilisateur</h3>
                    <span class="modal-subtitle"></span>
                </div>
                <div>
                    <button type="submit" class="btn btn-close" id="close-modale-add">X</button>
                </div>
            </div>
            
            <form class="form" id="add-user">
                <div class="content-user">
                    <div class="form-group image">
                        <p class="remove-img">X</p>
                        <div>
                            <label for="file" class="form-group-label file-img">Photo:
                                <input type="file" class="form-group-input file" name="file" id="file"placeholder="file" hidden/>
                                <div class="upload-image">
                                    <img src="#" alt="image user"/>
                                </div>
                            </label>
                            <span class="msg-error"></span>
                        </div>
                    </div>
                    <div class="form-group">
                    <div>
                            <label for="name" class="form-group-label">Nom:</label>
                            <input type="name" class="form-group-input name" name="name" id="name"placeholder="Nom"/>
                            <span class="msg-error"></span>
                    </div>
                    </div>
                    <div class="form-group">
                    <div>
                            <label for="fname" class="form-group-label">Prénom:</label>
                            <input type="fname" class="form-group-input fname" name="fname" id="fname"placeholder="Prénom"/>
                            <span class="msg-error"></span>
                    </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <label for="" class="form-group-label sex">Sexe</label>
                            <label class="sex-group">
                                <input type="radio" name="sex" id="sex" class="form-group-input" value="M" checked />Masculin
                            </label>
                            <label class="sex-group">
                                    <input type="radio" name="sex" id="sex" class="form-group-input" value="F" />Feminin
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                    <div>
                            <label for="email" class="form-group-label">E-mail:</label>
                            <input type="email" class="form-group-input email" name="email" id="email"placeholder="E-mail" />
                            <span class="msg-error"></span>
                    </div>
                    </div>
                    <div class="form-group">
                    <div>
                            <label for="password" class="form-group-label">Mot de passe:</label>
                            <input type="password" class="form-group-input password" name="password" id="password" placeholder="Mot de passe" />
                            <span class="msg-error">Msg error</span>
                    </div>
                    </div>
                    <div class="form-group">
                    <div >
                            <label for="confirm-password" class="form-group-label">Confirmer le mot de passe:</label>
                            <input type="password" class="form-group-input confirm-password" name="confirm-password" id="confirm-password"placeholder="Mot de passe" />
                            <span class="msg-error">Msg error</span>
                    </div>
                    </div>
                    { /* <!-- <div class="form-group">
                    <div >
                            <label for="message" class="form-group-label">Message:</label>
                            <textarea type="text" class="form-group-input message" name="message" rows="4"></textarea>
                            <span class="msg-error">Msg error</span>
                    </div>
                    </div>
                    <div class="form-group">
                    <div >
                            <label for="select" class="form-group-label">Message:</label>
                            <select class="form-group-input select" name="select" id="select">
                                <option value="#">A</option>
                                <option value="#">A</option>
                                <option value="#">A</option>
                            </select>
                            <span class="msg-error">Msg error</span>
                    </div>
                    </div> --> */ }
                    <div class="action-group">
                        <button type="submit" class="btn btn-save" id="save">Envoyer</button>
                        <button type="submit" class="btn btn-clear" id="clear">Annuler</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

  )
}

export default UserAdd
