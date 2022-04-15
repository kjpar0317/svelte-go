package handler

import (
	"github.com/gofiber/fiber/v2"
)

type Sentiment_info struct {
	Score       float64  `json:"score"`
	Comparative float64  `json:"comparative"`
	Calculation []string `json:"calculation"`
	Tokens      []string `json:"tokens"`
	Words       []string `json:"words"`
	Positive    []string `json:"positive"`
	Negative    []string `json:"negative"`
}

type Related_Info struct {
	DateTimeStamp     float64 `json:"dateTimeStamp"`
	Title             string  `json:"title"`
	MainContent       string  `json:"mainContent"`
	RelevantUpvotes   float64 `json:"relevantUpvotes"`
	RelevantDownvotes float64 `json:"relevantDownvotes"`
	Media             string  `json:"media"`
	Source            string  `json:"source"`
	Sentiment         Sentiment_info
}
type Sentiment_infos struct {
	Sentiment       float64 `json:"sentiment"`
	RelatedArticles []Related_Info
}

type Analysis_info struct {
	ExchangeId       string  `json:"exchange"`
	Date             string  `json:"date"`
	PriceInBTC       float64 `json:"priceInBtc"`
	RecomendedAction string  `json:"recomendedAction"`
	ReasonFound      string  `json:"reasonFound"`
	Sentiment        float64 `json:"sentiment"`
	PatternsFound    map[string]interface{}
}

func SetupAIRoutes(router fiber.Router) {
	aichart := router.Group("/ai")

	aichart.Get("/sentiment", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "success", "message": "API actions to server success", "data": "test"})
	})

	aichart.Get("/analysis", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "success", "message": "API actions to server success", "data": "test2"})
	})
}
