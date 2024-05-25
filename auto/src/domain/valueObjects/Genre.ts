import { __brand, Branded } from './BrandedTypes';

const genres: string[] = [
  'Fantasy',
  'Science Fiction',
  'Horror',
  'Space Opera',
  'Mystery',
  'Cyberpunk',
  'Romance',
  'Steampunk',
  'High Fantasy',
  'Low Fantasy',
  'Cthulhu Mythos',
  'LitRPG',
  'GameLit',
  'Hard Sci-Fi',
  'Soft Sci-Fi',
  'Military Sci-Fi',
  'Superhero',
  'Post-Apocalyptic',
] as const; // Marking it as a const makes it a tuple so we can use it as a type. - Even though we declare it as a const at the start we need this to correctly infer the tuple type property.

type Genre = (typeof genres)[number];

class Genres {
  private static readonly genres = genres;

  static getRandomGenre(): Genre {
    return this.genres[Math.floor(Math.random() * this.genres.length)];
  }
}

export { Genre, Genres };
