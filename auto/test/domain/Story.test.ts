// test/domain/Story.test.ts

import { Story } from '../../src/domain/entities/Story';
import { Genre, Genres } from '../../src/domain/valueObjects/Genres';

describe('Story Entity', () => {
  it('should create a story successfully', () => {
    const story = new Story(
      'A Great Title',
      'A synopsis',
      'Fantasy',
      ['magic', 'adventure'],
      'Once upon a time...',
    );

    expect(story.getTitle()).toBe('A Great Title');
    expect(story.getSynopsis()).toBe('A synopsis');
    expect(story.getContent()).toBe('Once upon a time...');
    expect(story.getGenre()).toBe('Fantasy');
    expect(story.getKeywords()).toEqual(['magic', 'adventure']);
  });
});
