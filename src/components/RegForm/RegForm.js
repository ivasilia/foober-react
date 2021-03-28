import style from './RegForm.css';

const RegForm = () => {
    return (
        <form action="/driver/register" method="POST">
            <div className={style.inputField}><label htmlFor="email">Email</label>
            <input id="email" name="email" type="text"/></div>
            <div><label htmlFor="password">Password</label>
            <input id="password" name="password" type="password"/></div>
            <div><label htmlFor="rePassword">Retype password</label>
            <input id="rePassword" name="rePassword" type="password"/></div>
            <div><label htmlFor="submit-button">Register</label>
            <input id="submit-button" type="submit" className="submitButton" value=""/></div>
        </form>
    )
}

export default RegForm;