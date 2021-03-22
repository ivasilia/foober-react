import style from './RegForm.css';

const RegForm = () => {
    return (
        <form action="/driver/register" method="POST" className = {style.regform}>
            <p><label for="username">Username</label>
            <input id="username" name="username" type="text" placeholder="username" className={style.newline}/></p>
            <p><label for="password">Password</label>
            <input id="password" name="password" type="password" placeholder="password"/></p>
            <p><label for="rePassword">Retype password</label>
            <input id="rePassword" name="rePassword" type="password" placeholder="Retype password"/></p>
            <input type="submit" value="Get your driver's license!" />
        </form>
    )
}

export default RegForm;