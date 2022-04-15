package handler

import (
	"github.com/gofiber/fiber/v2"
)

type Tag_info struct {
	Symbol string `json:"symbol"`
	Name   string `json:"name"`
	Icon   string `json:"icon"`
}
type Coin_infos struct {
	Title       string `json:"title"`
	Link        string `json:"link"`
	Description string `json:"description"`
	Source      string `json:"source"`
	Date        string `json:"date"`
	Tags        []Tag_info
}

type Coin_schedule struct {
	Id               string `json:"id"`
	Coin             string `json:"coin"`
	Date             string `json:"date"`
	Date_to          string `json:"date_to"`
	Name             string `json:"name"`
	Description      string `json:"description"`
	Is_conference    bool   `json:"is_conference"`
	Link             string `json:"link"`
	Proof_image_link string `json:"proof_image_link"`
}

// type Trend_Infos struct {
// 	Id                    string  `json:"id"`
// 	DataType              string  `json:"dataType"`
// 	Name                  string  `json:"name"`
// 	Symbol                string  `json:"symbol"`
// 	Rank                  float32 `json:"rank"`
// 	Status                string  `json:"status"`
// 	MarketCap             float32 `json:"marketCap"`
// 	SelfReportedMarketCap float32 `json:"selfReportedMarketCap"`
// 	priceChange           map[string]interface{}
// }
// type Coin_trend struct {
// 	meta   map[string]interface{}
// 	result []Trend_Infos
// }

func SetupCoinRoutes(router fiber.Router) {
	coin := router.Group("/coin")

	// Read all Notes
	coin.Get("/coinNews", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "success", "message": "Success API Call", "data": "test"})
	})

	// Read all Notes
	coin.Get("/coinSchedule", func(c *fiber.Ctx) error {
		search_coins := []string{"btc-bitcoin", "eth-ethereum", "usdt-tether", "xrp-xrp", "sol-solana", "ada-cardano", "luna-terra", "avax-avalanche", "doge-dogecoin", "dot-polkadot", "trx-tron", "etc-ethereum-classic", "xmr-monero", "waves-waves", "mkr-maker", "dash-dash", "bat-basic-attention-token", "kda-kadena", "omg-omg-network", "icx-icon", "zel-zelcash", "ren-republic-protocol", "bico-bicompany"}
		return c.JSON(fiber.Map{"status": "success", "message": "Success API Call", "data": search_coins})
	})

	// Read all Notes
	coin.Get("/coinTrends", func(c *fiber.Ctx) error {
		var data map[string]interface{}

		return c.JSON(fiber.Map{"status": "success", "message": "Success API Call", "data": data})
	})

	// coin.Get("/", middleware.Protected(), func(c *fiber.Ctx) error {
	// 	return c.JSON(fiber.Map{"status": "success", "message": "Notes Found", "data": "test"})
	// })
}
