import { mostCommonFirstName } from '../exercises/exercise4';

test.skip('exercise4: mostCommonFirstName', async () => {
    await expect(mostCommonFirstName()).resolves.toEqual('Michael');
}, 120000);