import { SQLiteStoryRepository } from '../src/domain/repositories/SQLiteStoryRepository';
import { StoryAggregate } from '../src/domain/aggregates/StoryAggregate';
import { Story } from '../src/domain/entities/Story';
import { Genres } from '../src/domain/valueObjects/Genres';

jest.mock('dotenv/config');
jest.mock('../src/domain/repositories/SQLiteStoryRepository');
jest.mock('../src/domain/aggregates/StoryAggregate');

describe('Index Module', () => {
  let storyRepositoryMock: jest.Mocked<SQLiteStoryRepository>;
  let storyAggregateMock: jest.Mocked<StoryAggregate>;

  beforeEach(() => {
    storyRepositoryMock = new SQLiteStoryRepository(
      'test.db',
    ) as jest.Mocked<SQLiteStoryRepository>;
    storyAggregateMock = new StoryAggregate(
      storyRepositoryMock,
    ) as jest.Mocked<StoryAggregate>;

    (SQLiteStoryRepository as jest.Mock).mockReturnValue(storyRepositoryMock);
    (StoryAggregate as jest.Mock).mockReturnValue(storyAggregateMock);
  });

  it('should generate a story', async () => {
    const mockStory = new Story(
      'The Story of the Story',
      'A story about a story.',
      Genres.getRandomGenre(),
      ['story', 'meta'],
      'Once upon a time, there was a story. It was a very interesting story.',
    );
    storyAggregateMock.generateStory.mockResolvedValue(mockStory);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await require('../src/index');

    expect(storyAggregateMock.generateStory).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('Story generated:', mockStory);

    consoleSpy.mockRestore();
  });
});
