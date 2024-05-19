# Writers Grove

## Project Requirements

- The project is in Typescript
- The Project will use Jest for Testing
- The project will use clean code best practices with clear names avoiding names like utility and always selecting meaningful names
- The project will be domain driven so the story which is the main part of phase 1 will have save, and generate functions built right into it so we can just call them
- We will use dotenv, OpenAI's api library, and youtube api

## Project Phases

- Phase 1: Text
  - A real cronjob on a linux server will run (not a fake javascript one) every hour and start the process
  - A random genre from an array list will be selected and passed in to the generator when it is ran
  - The system will reach out to Open AI to generate a json object that includes a story, title, synopsis, and keywords
  - The system will take the returned story and populate it into a template for a Hugo Markdown blog post
  - The system will then publish the post by triggering a github commit and push which will have github handle the rest
  - Phase 2 action will be triggered
- Phase 2: Audio
  - The story will be sent to OpenAI's text to speech translator
  - The audio will be uploaded to an s3 bucket and also uploaded as a podcast to youtube
  - Phase 3 action will triggered
- Phase 3: Video
  - The story will have 5 images generated from OpenAI
  - The story will then use ffmpeg to creeate a video with the audio and images
  - The video will be uplaoded to youtube

## Project Structure

### Mono Repo

This will be a mono repo that has both the auto story generation and the Hugo blog in a single repository.

I will use the github workflows to detect changes in each folder of the project to determine which set of workflows to run.

### Auto Story Generator

/writersgrove-net/auto
│
├── /src
│ ├── /domain
│ │ ├── entities
│ │ │ └── Story.ts
│ │ ├── value-objects
│ │ │ └── Genre.ts
│ │ ├── aggregates
│ │ │ └── StoryAggregate.ts
│ │ ├── events
│ │ │ └── StoryGenerated.ts
│ │ ├── repositories
│ │ │ └── StoryRepository.ts
│ │
│ ├── /application
│ │ └── commands
│ │ ├── GenerateStoryCommand.ts
│ │ ├── ConvertStoryToAudioCommand.ts
│ │ └── GenerateStoryImagesCommand.ts
│ │
│ ├── /infrastructure
│ │ ├── repositories
│ │ │ └── HugoStoryRepository.ts
│ │ ├── services
│ │ │ ├── OpenAIServiceImpl.ts
│ │ │ ├── AudioServiceImpl.ts
│ │ │ └── ImageServiceImpl.ts
│ │
│ ├── /config
│ │ └── config.ts
│ │
│ └── index.ts
│
├── /test
│ ├── domain
│ ├── application
│ ├── infrastructure
│ └── /mocks
│ └── OpenAIServiceMock.ts
│
├── .gitignore
├── jest.config.js
├── package.json
├── tsconfig.json
└── README.md
