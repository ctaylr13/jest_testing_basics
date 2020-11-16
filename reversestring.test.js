const reverseString = require('./reversestring');

test('reverseString Function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses w/ Uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});