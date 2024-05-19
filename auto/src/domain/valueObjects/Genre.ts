export class Genre {
  private static readonly genres: string[] = [
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
  ];

  static getRandomGenre(): string {
    return this.genres[Math.floor(Math.random() * this.genres.length)];
  }

  // This function is not currently used in the codebase but exists for testing purposes
  static validateGenre(genre: string): void {
    if (!this.genres.includes(genre)) {
      throw new Error(`Invalid genre: ${genre}`);
    }
  }
}
