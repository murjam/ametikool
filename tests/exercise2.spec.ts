import { countName } from '../exercises/exercise2';

test.skip('exercise2: countName', () => {
    expect(countName('John')).toEqual(15);
    expect(countName('Ronald')).toEqual(6);
    expect(countName('Lisa')).toEqual(11);
});