function login(username, password) {
    if (username === 'admin' && password === '123') return true;
    if (!username || username === '') toThrow('Username rong');
    if (password !== '123') return false;
    return false;
}
module.exports = login;
