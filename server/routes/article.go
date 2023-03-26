package routes

import (
	"backend/handlers"
	"backend/pkg/middleware"
	"backend/pkg/mysql"
	"backend/repositories"

	"github.com/labstack/echo/v4"
)

func ArticleRoutes(e *echo.Group) {
	articleRepository := repositories.RepositoryArticle(mysql.DB)
	h := handlers.HandlerArticle(articleRepository)

	e.POST("/article", middleware.Auth(middleware.UploadFile(h.CreateArticle)))
	e.GET("/article/:id", h.GetArticle)
	e.GET("/articles", h.FindArticles)
	e.PATCH("/article/:id", middleware.Auth(middleware.UploadFile(h.UpdateArticle)))
	e.DELETE("/article/:id", middleware.Auth(h.DeleteArticle))
	e.GET("/articles/:id", h.FindMyArticles)
}
