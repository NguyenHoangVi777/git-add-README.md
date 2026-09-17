const login = require('./auth');
test('Smoke Test: Dang nhap dung account admin/123 tra ve true', () => {
    expect(login('admin', '123')).toBe(true);
});
