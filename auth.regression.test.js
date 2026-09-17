const login = require('./auth');
test('Regression: Dang nhap sai mat khau', () => {
    expect(login('admin', '999')).toBe(false);
});
test('Regression: Username rong sinh ra loi', () => {
    expect(() => login('', '123')).toThrow('Username rong');
});
