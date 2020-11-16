// import original file 
// file must share same name 
const { default: Axios } = require('axios');
const functions = require('./functions');

// to run before each test 
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());


// to run ONCE before each test 
// beforeAll(() => initDatabase());
// afterAll(() => initDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log("Checking Name...");

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});


test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSE VALUES 
// toBeNull matches only null
// toBeUndefined matches only undefined 
// toBeDefined is the opposite of toBeUndefined 
// toBeTruthy matches anything that an if statement treats as true 
// toBeFalsy matches anything that an if statement treats as false 

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
// null, 0, and undefined will all return falsy 
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
// toBe is for primitative types wont work on objects or arrays  
// need to use toEqual instead 
test('User should be brooklyn taylor object ', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brooklyn',
        lastName: 'Taylor'
    });
});

// Less than and greater than 
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// Regex 
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

//Arrays
test('tom should be in usernames', () => {
    usernames = ['bobby', 'tom', 'mike'];
    expect(usernames).toContain('tom');
});

//working with async data 
//use assertions with async 
//ASYNC NEEDS BOTH EXPECT AND RETURN TO WORK PROPERLY 
// Promise
// test('user fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham')
//         });
// });


// Async Await
test('user fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
})

