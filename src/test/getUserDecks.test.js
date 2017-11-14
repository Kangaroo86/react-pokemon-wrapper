import getUserDecks from '../api/getUserDecks';
import mockData from '../mock-data/index';
import recordToUserDeck from '../api/utils/recordToUserDeck';
fetch = require('jest-fetch-mock');

describe('getUserDecks', () => {
  it('fetch user decks', () => {
    fetch.mockResponse(JSON.stringify(mockData));

    return getUserDecks({
      AIRTABLE_DATABASE_ID: 'SOME_DATABASE_ID',
      AIRTABLE_TOKEN: 'SOME_TOKEN'
    }).then(data => {
      expect(data).toEqual(mockData.records.map(recordToUserDeck));
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
