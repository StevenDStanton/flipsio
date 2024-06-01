import { Story } from '../entities/Story';
import { StoryRepository } from '../interfaces/StoryRepository';
import sqlite3 from 'sqlite3';

export class SQLiteStoryRepository implements StoryRepository {
  private db: sqlite3.Database;

  constructor(databaseFile: string) {
    console.log(databaseFile, typeof databaseFile);
    this.db = new sqlite3.Database(databaseFile);
    this.initializeDatabase();
  }

  async save(story: Story): Promise<void> {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO stories (id, title, synopsis, genre, keywords, content)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      this.db.run(
        query,
        [
          story.getTitle(),
          story.getSynopsis(),
          story.getGenre().toString(),
          story.getKeywords().join(','),
          story.getContent(),
        ],
        (err) => {
          if (err) {
            return reject(err);
          }
          resolve();
        },
      );
    });
  }

  private initializeDatabase(): void {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS stories (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        synopsis TEXT NOT NULL,
        genre TEXT NOT NULL,
        keywords TEXT NOT NULL,
        content TEXT NOT NULL
      );
    `;

    this.db.run(createTableQuery, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Table "stories" is ready.');
      }
    });
  }
}
