import { Genre, Genres } from '../../src/domain/valueObjects/genre';

describe('Genre Value Object', () => {
  it('should return a random genre', () => {
    const genre = Genres.getRandomGenre();

    // Ensure the returned genre is defined and of the correct type
    expect(genre).toBeDefined();

    // TypeScript will ensure the genre is of type Genre
    const isValidGenre = (value: unknown): value is Genre => {
      return (Genres['genres'] as readonly string[]).includes(value as Genre);
    };

    expect(typeof genre).toBe('string');
    expect(isValidGenre(genre)).toBe(true);
  });
});
