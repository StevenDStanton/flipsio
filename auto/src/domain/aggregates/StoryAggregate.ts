import { Story } from '../entities/Story';
import { Genres, Genre } from '../valueObjects/Genres';
import { StoryRepository } from '../interfaces/StoryRepository';
import { StoryGenerated } from '../events/StoryGenerated';
export class StoryAggregate {
  constructor(private storyRepository: StoryRepository) {}

  async generateStory(): Promise<Story> {
    const genre = Genres.getRandomGenre();
    const storyData = await this.fetchStoryFromOpenAI(genre);
    console.log(`Genre: ${genre}`);
    // const story = new Story(
    //   storyData.title,
    //   storyData.synopsis,
    //   genre,
    //   storyData.keywords.split(','),
    //   storyData.content,
    // );

    // await this.storyRepository.save(story);

    // const storyGeneratedEvent = new StoryGenerated(story);

    // this.publishEvent(storyGeneratedEvent);

    // return story;
    //fake reurn for testing
    return new Story(
      'The Story of the Story',
      'A story about a story.',
      genre,
      ['story', 'meta'],
      'Once upon a time, there was a story. It was a very interesting story.',
    );
  }

  private async fetchStoryFromOpenAI(genre: Genre): Promise<any> {}

  private publishEvent(event: StoryGenerated): void {
    console.log('Event published:', event);
  }
}
