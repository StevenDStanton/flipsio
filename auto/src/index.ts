import 'dotenv/config';
import { SQLiteStoryRepository } from './domain/repositories/SQLiteStoryRepository';
import { StoryAggregate } from './domain/aggregates/StoryAggregate';

const storyRepository = new SQLiteStoryRepository(
  process.env.DATABASE_FILE as string,
);
const storyAggregate = new StoryAggregate(storyRepository);

(async () => {
  const story = await storyAggregate.generateStory();
  console.log('Story generated:', story);
})();
