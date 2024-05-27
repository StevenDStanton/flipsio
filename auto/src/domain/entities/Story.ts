import { Genre } from '../valueObjects/Genres';
class Story {
  constructor(
    private title: string,
    private synopsis: string,
    private genre: Genre,
    private keywords: string[],
    private content: string,
  ) {}

  //getters
  getTitle(): string {
    return this.title;
  }
  getSynopsis(): string {
    return this.synopsis;
  }
  getGenre(): Genre {
    return this.genre;
  }
  getKeywords(): string[] {
    return this.keywords;
  }
  getContent(): string {
    return this.content;
  }
}
