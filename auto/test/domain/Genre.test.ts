import { Genre } from '../../src/domain/valueObjects/Genre';

describe('Genre Value Object', () => {
  it('should return a random genre', () => {
    const genre = Genre.getRandomGenre();
    Genre.validateGenre(genre); // Ensure the returned genre is valid
  });

  it('should validate a valid genre', () => {
    expect(() => Genre.validateGenre('Fantasy')).not.toThrow();
  });

  it('should fail validation for an invalid genre', () => {
    expect(() => Genre.validateGenre('Invalid Genre')).toThrow(
      'Invalid genre: Invalid Genre',
    );
  });
});
