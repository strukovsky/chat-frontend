import axios from 'axios'

export default function checkIfUserExists(username)
{
    if(username.length !== 11)
        return false;
   /* axios.get('localhost:8000/api/v1/user/'+username)
        .then(function(){
            return true;
        })
        .catch(function () {
            return false;
        })*/
}

