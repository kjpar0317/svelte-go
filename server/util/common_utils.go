package util

import (
	"os"
	"strings"

	"github.com/gofiber/fiber/v2"
)

func CheckReferer(c *fiber.Ctx) bool {
	baseUrl := strings.Replace(c.BaseURL(), "http://", "", 1)
	baseUrl = strings.Replace(baseUrl, "https://", "", 1)

	if strings.HasPrefix(baseUrl, "127.0.0.1") || strings.HasPrefix(baseUrl, os.Getenv("REFERER_URL")) {
		return true
	}
	return false
}
