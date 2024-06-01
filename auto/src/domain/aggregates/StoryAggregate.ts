import { Story } from '../entities/Story';
import { Genres, Genre } from '../valueObjects/Genres';
import { StoryRepository } from '../interfaces/StoryRepository';
import { StoryGenerated } from '../events/StoryGenerated';
export class StoryAggregate {
  constructor(private storyRepository: StoryRepository) {}

  async generateStory(): Promise<Story> {
    const genre = Genres.getRandomGenre();
    const storyData = await this.fetchStoryFromOpenAI(genre);

    const story = new Story(
      storyData.title,
      storyData.synopsis,
      genre,
      storyData.keywords.split(','),
      storyData.content,
    );

    await this.storyRepository.save(story);

    const storyGeneratedEvent = new StoryGenerated(story);

    this.publishEvent(storyGeneratedEvent);

    return story;
  }

  private async fetchStoryFromOpenAI(genre: Genre): Promise<any> {}

  private publishEvent(event: StoryGenerated): void {
    console.log('Event published:', event);
  }
}
