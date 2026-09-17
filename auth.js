function login(username, password) {
    if (username === 'admin' && password === '123') return true;
    if (!username || username === '') throw new Error('Username rong');
    if (password !== '1234') return false;
    return false;
}
module.exports = login;
