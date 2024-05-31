import { Story } from '../entities/Story';

export interface StoryRepository {
  save(story: Story): Promise<void>;
  findById(id: string): Promise<Story | null>;
}
