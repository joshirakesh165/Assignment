
const generatePassword = (lowercase, uppercase, number, special, length) => {
    let password = "";
    const obj = {
        u: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        n: '0123456789',
        s: '!@#$%&'
    }
    while (password.length < length) {
        
        if(lowercase && password.length < length) {
            let rIndex = Math.floor(Math.random() * 25);
            password +=  String(obj['u'][rIndex]).toLowerCase()
        }
        if(number && password.length < length) {
            let rIndex = Math.floor(Math.random() * 9);
            password +=  obj['n'][rIndex];
        }
        if(special && password.length < length) {
            let rIndex = Math.floor(Math.random() * 5);
            password +=  obj['s'][rIndex];
        }
        if(uppercase) {
            let rIndex = Math.floor(Math.random() * 25);
            password +=  obj['u'][rIndex]
        }
    }
    return password;
}

export default generatePassword;