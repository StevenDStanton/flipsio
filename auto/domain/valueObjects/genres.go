package valueObjects

import "math/rand"

type Genre string

const (
	Fantasy         Genre = "Fantasy"
	ScienceFiction  Genre = "Science Fiction"
	Horror          Genre = "Horror"
	SpaceOpera      Genre = "Space Opera"
	Mystery         Genre = "Mystery"
	Cyberpunk       Genre = "Cyberpunk"
	Romance         Genre = "Romance"
	Steampunk       Genre = "Steampunk"
	HighFantasy     Genre = "High Fantasy"
	LowFantasy      Genre = "Low Fantasy"
	CthulhuMythos   Genre = "Cthulhu Mythos"
	LitRPG          Genre = "LitRPG"
	GameLit         Genre = "GameLit"
	HardSciFi       Genre = "Hard Sci-Fi"
	SoftSciFi       Genre = "Soft Sci-Fi"
	MilitarySciFi   Genre = "Military Sci-Fi"
	Superhero       Genre = "Superhero"
	PostApocalyptic Genre = "Post-Apocalyptic"
)

var genres = []Genre{
	Fantasy, ScienceFiction, Horror, SpaceOpera, Mystery,
	Cyberpunk, Romance, Steampunk, HighFantasy, LowFantasy,
	CthulhuMythos, LitRPG, GameLit, HardSciFi, SoftSciFi,
	MilitarySciFi, Superhero, PostApocalyptic,
}

func GetRandomGenre() Genre {
	return genres[rand.Intn(len(genres))]
}
