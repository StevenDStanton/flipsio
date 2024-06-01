import { LLMService } from './LLMservice';
import { Genre } from '../domain/valueObjects/Genres';
import { Story } from '../domain/entities/Story';
import OpenAiApi from 'openai';

export class OpenAi implements LLMService {
  private OpenAiClient: OpenAiApi;

  constructor() {
    this.OpenAiClient = new OpenAiApi({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateStory(prompt: string, genre: Genre): Promise<Story> {
    const messages = this.prepareMessages(prompt);

    const completion = await this.OpenAiClient.chat.completions.create({
      model: 'gpt-4o',
      messages: messages,
    });
    const responseMessage = completion.choices[0].message.content;
    return new Story(
      responseMessage.title,
      responseMessage.synopsis,
      genre,
      responseMessage.keywords.split(','),
      responseMessage.content,
    );
  }

  prepareMessages(prompt: string): {
    role: 'user' | 'assistant' | 'system';
    name: string;
    content: string;
  }[] {
    const messages: {
      role: 'user' | 'assistant' | 'system';
      name: string;
      content: string;
    }[] = [
      {
        role: 'system',
        name: 'System',
        content:
          'You are an author. You will be provided with a prompt and return back a result based on the prompt. Your response should be formatted as a json object with the following keys: title, synopsis, keywords, and content. Keywords should contain around 5 words separated by commas. The content should be a short story.',
      },
    ];

    messages.push({
      role: 'user',
      name: 'Client',
      content: prompt,
    });

    return messages;
  }
}
