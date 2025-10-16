import { findFirstName } from '../exercises/exercise1';

test('exercise1: findFirstName', () => {
    expect(findFirstName('John Smith')).toEqual('John');
    expect(findFirstName('Ants Angerjas')).toEqual('Ants');
    expect(findFirstName('Mati Nude')).toEqual('Mati');
});