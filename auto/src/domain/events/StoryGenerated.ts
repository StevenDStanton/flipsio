import { Story } from '../entities/Story';

class StoryGenerated {
  constructor(public story: Story) {}

  getStory(): Story {
    return this.story;
  }
}

export { StoryGenerated };
