package main

import (
	"coininfos/server/router"
	"fmt"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/template/html"
	"github.com/joho/godotenv"
)

func main() {
	//template render engine
	engine := html.New("./dist", ".html")

	app := fiber.New(fiber.Config{
		Views: engine, //set as render engine
	})

	// .env 파일 로드 시도
	if err := godotenv.Load(); err != nil {
		fmt.Println("Error loading .env file:", err)
		return
	}

	port := os.Getenv("PORT")

	fmt.Println(port)

	if port == "" {
		port = "8080"
	}

	app.Use(logger.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost",
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization",
		AllowMethods:     "GET, HEAD, PUT, PATCH, POST, DELETE",
		AllowCredentials: true,
		MaxAge:           86400, // 24시간
	}))

	// swagger 등록
	// app.Get("/swagger/*", swagger.Handler)

	router.SetupRoutes(app)

	app.Static("/", "./dist")
	app.Get("/", mainPage)

	app.Listen(":" + port)
}

func mainPage(c *fiber.Ctx) error {
	return c.Render("index", nil)
}