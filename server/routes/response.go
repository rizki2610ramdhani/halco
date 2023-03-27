package routes

import (
	"backend/handlers"
	"backend/pkg/middleware"
	"backend/pkg/mysql"
	"backend/repositories"

	"github.com/labstack/echo/v4"
)

func ResponseRoutes(e *echo.Group) {
	responseRepository := repositories.RepositoryResponse(mysql.DB)
	h := handlers.HandlerResponse(responseRepository)

	e.POST("/response/:id", middleware.Auth(h.CreateResponse))
	e.GET("/response/:id", h.GetResponse)
}
