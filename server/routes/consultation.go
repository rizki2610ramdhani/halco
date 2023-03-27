package routes

import (
	"backend/handlers"
	"backend/pkg/middleware"
	"backend/pkg/mysql"
	"backend/repositories"

	"github.com/labstack/echo/v4"
)

func ConsultationRoutes(e *echo.Group) {
	consultationRepository := repositories.RepositoryConsultation(mysql.DB)
	h := handlers.HandlerConsultation(consultationRepository)

	e.POST("/consultation", middleware.Auth(h.CreateConsultation))
	e.GET("/consultation/:id", middleware.Auth(h.GetConsultation))
	e.GET("/consultations/:id", h.FindMyConsultations)
	e.GET("/consultations", h.FindConsultations)
	e.PATCH("/consultation/:id", h.UpdateConsultation)
	e.PATCH("/consultation-reject/:id", h.RejectCons)
}
