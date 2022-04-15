package router

import (
	route "coininfos/server/handler"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api", logger.New())

	// Setup the Node Routes
	route.SetupCoinRoutes(api)
	route.SetupAIRoutes(api)
}
