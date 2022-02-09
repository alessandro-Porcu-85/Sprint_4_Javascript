const { getAllDirectors } = require('./films');
//--UNIT TEST--//
test('watch all movie director', () => {
    const text = getAllDirectors('movies.director');
    expect(text).toBe('movies.director');
});

//--INTEGRATION TEST--//

test('watch all movie director', () => {
    const text = getAllDirectors('', null);
    expect(text).toBe(' (movies.director)');
});