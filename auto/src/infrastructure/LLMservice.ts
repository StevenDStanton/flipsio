import { Story } from '../domain/entities/Story';
import { Genre } from '../domain/valueObjects/Genres';
export interface LLMService {
  generateStory(prompt: string, genre: Genre): Promise<Story>;
}
