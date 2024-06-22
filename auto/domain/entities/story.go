package entities

import (
	"fmt"

	v "github.com/StevenDStanton/flipsio/auto/domain/valueObjects"
)

type Story struct {
	Title    string
	Synopsis string
	Genre    v.Genre
	Keywords []string
	Content  string
}

func NewStory(title, synopsis string, genre v.Genre, keywords []string, content string) *Story {
	return &Story{
		Title:    title,
		Synopsis: synopsis,
		Genre:    genre,
		Keywords: keywords,
		Content:  content,
	}
}

func CreateStory() {
	genre := v.GetRandomGenre()
	storyPrompt := generateStoryPrompt(genre)

}

func generateStoryPrompt(genre v.Genre) string {
	return fmt.Sprintf("Write a short %s story about a ", genre)
}
