import axios from 'axios'

export default class Login
{
    static checkIfUserExists(username)
    {
        if(username.length !== 11)
            return false;
        if(username === '89255258020')
            return true;
        return false;
    }

    static signUp(username, password)
    {
        return true;
    }

    static signIn(username, password)
    {
        if(username==='89255258020' && password==='qwerty')
            return true;
        return false;
    }

}


