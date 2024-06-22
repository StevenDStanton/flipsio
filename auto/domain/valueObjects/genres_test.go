package valueObjects

import (
	"testing"
)

// Create a map for quick lookups
var genreMap = make(map[Genre]bool)

func init() {
	// Populate the map with genres
	for _, genre := range genres {
		genreMap[genre] = true
	}
}

func TestGetRandomGenre(t *testing.T) {
	const iterations = 10000
	genreCounts := make(map[Genre]int)

	// Run the function multiple times and count occurrences
	for i := 0; i < iterations; i++ {
		genre := GetRandomGenre()
		if _, ok := genreMap[genre]; !ok {
			t.Errorf("GetRandomGenre() = %v, want one of %v", genre, genres)
		}
		genreCounts[genre]++
	}

	// This is a very basic check to ensure that all genres are returned.
	//In the future I may want to write more complex test code to ensure
	//we have a good uniform distribution.
	for genre, count := range genreCounts {
		if count == 0 {
			t.Errorf("Genre %v was never returned", genre)
		}
		t.Logf("Genre %v was returned %d times", genre, count)
	}

}
