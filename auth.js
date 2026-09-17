function login(username, password) {
    if (username === 'admin' && password === '9999') return true;
    if (!username || username === '') throw new Error('Username rong');
    if (password !== '123') return false;
    return false;
}
module.exports = login;
