package openai

import (
	"bytes"
	"encoding/json"
	"log"
	"net/http"
)

var urlMap = make(map[string]string)

func init() {
	urlMap["text"] = ""
	urlMap["image"] = ""
	urlMap["audio"] = "https://api.openai.com/v1/audio/speech"
}

func makeRequest(request string, requestType string) {
	requestBody, err := json.Marshal(request)
	checkFatalErrorExists("Error: Unable to create request payload", err)

	req, err := http.NewRequest("POST", urlMap[requestType], bytes.NewBuffer(requestBody))
	checkFatalErrorExists("Error: Unable to create HTTP request", err)

	req.Header.Set("Authorization", "Bearer "+OPENAI_API_KEY)
	req.Header.Set("Content-Type", "application/json")

	makeHttpRequest(req, outputFile)

}

func checkFatalErrorExists(message string, err error) {
	if err != nil {
		log.Fatalf("%s: %v", message, err)
	}
}
