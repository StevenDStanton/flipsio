# Writers Grove

## Project Requirements

- Typescript
- Jest Testing Framework
- Domain Driven Architecture

## Project Phases

- Todo

  - [ ] Setup SQLite Database
  - [ ] Setup Frontend Hugo Blog
  - [ ] Real Cronjob
  - [ ] Random Genre from Array
  - [ ] Use Open AI to generate a json object that includes a story, title, synopsis, and keywords
  - [ ] Save generated story to DB
  - [ ] Generate pictures from story
  - [ ] Resize Images
  - [ ] Convert images to WebP
  - [ ] Save images to S3 CDN
  - [ ] Generate audio from story
  - [ ] Save story to S3 CDN
  - [ ] Generate Hugo Blogpost from saved story
  - [ ] Configure Github Workflow to push hugo blog to S3
  - [ ] Publish the post by triggering a github commit
  - [ ] Upload to Podcasts
  - [ ] Generate Video from images and audio
  - [ ] Upload Video to youtube

## Project Structure

### Mono Repo

This will be a mono repo that has both the auto story generation and the Hugo blog in a single repository.

I will use the github workflows to detect changes in each folder of the project to determine which set of workflows to run.

### Auto Story Generator Design

### Domain

```mermaid
graph TD
    A[/writersgrove-net/auto/]
    A --> B[/src/]
    B --> C[/domain/]
    C --> D[/entities/]
    D --> E[Story.ts]
    C --> F[/value-objects/]
    F --> G[Genre.ts]
    C --> H[/aggregates/]
    H --> I[StoryAggregate.ts]
    C --> J[/events/]
    J --> K[StoryGenerated.ts]
    C --> L[/repositories/]
    L --> M[StoryRepository.ts]

```

### Commands

```mermaid
graph TD
    B[/src/]
    B --> N[/application/]
    N --> O[/commands/]
    O --> P[GenerateStoryCommand.ts]
    O --> Q[ConvertStoryToAudioCommand.ts]
    O --> R[GenerateStoryImagesCommand.ts]
```

### Infrastructure

```mermaid
graph TD
    B[/src/]
    B --> S[/infrastructure/]
    S --> T[/repositories/]
    T --> U[HugoStoryRepository.ts]
    S --> V[/services/]
    V --> W[OpenAIServiceImpl.ts]
    V --> X[AudioServiceImpl.ts]
    V --> Y[ImageServiceImpl.ts]

```

### Tests and other files

```mermaid
graph TD
    A[/writersgrove-net/auto/]
    A --> B[/src/]
    B --> BA[index.ts]
    A --> AC[/test/]
    AC --> AD[domain/]
    AC --> AE[application/]
    AC --> AF[infrastructure/]
    AC --> AG[/mocks/]
    AG --> AH[OpenAIServiceMock.ts]
    A --> AI[.gitignore]
    A --> AJ[jest.config.js]
    A --> AK[package.json]
    A --> AL[tsconfig.json]
    A --> AM[README.md]
    A --> AN[/dist/]
```
