package handlers

import (
	consultationdto "backend/dto/consultation"
	dto "backend/dto/result"
	"backend/models"
	"backend/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type handlerConsultation struct {
	ConsultationRepository repositories.ConsultationRepository
}

func HandlerConsultation(ConsultationRepository repositories.ConsultationRepository) *handlerConsultation {
	return &handlerConsultation{ConsultationRepository}
}

func (h *handlerConsultation) CreateConsultation(c echo.Context) error {
	userLogin := c.Get("userLogin")
	userId := userLogin.(jwt.MapClaims)["id"].(float64)

	convAge, _ := strconv.Atoi(c.FormValue("age"))
	convHeight, _ := strconv.Atoi(c.FormValue("height"))
	convWeight, _ := strconv.Atoi(c.FormValue("weight"))
	request := consultationdto.ConsultationRequest{
		UserId:      int(userId),
		BornDate:    c.FormValue("bornDate"),
		Age:         convAge,
		Height:      convHeight,
		Weight:      convWeight,
		Subject:     c.FormValue("subject"),
		RequestDate: c.FormValue("requestDate"),
		Description: c.FormValue("description"),
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: "err1"})
	}

	consultation := models.Consultation{
		UserId:      request.UserId,
		BornDate:    request.BornDate,
		Age:         request.Age,
		Height:      request.Height,
		Weight:      request.Weight,
		Subject:     request.Subject,
		RequestDate: request.RequestDate,
		Description: request.Description,
		Status:      "waiting",
	}

	consultation, err = h.ConsultationRepository.CreateConsultation(consultation)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: "err2"})
	}

	consultation, _ = h.ConsultationRepository.GetConsultation(consultation.ID)

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: consultation})
}

func (h *handlerConsultation) GetConsultation(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	article, err := h.ConsultationRepository.GetConsultation(uint(id))
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: article})
}

func (h *handlerConsultation) FindMyConsultations(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	consultations, err := h.ConsultationRepository.FindMyConsultations(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: consultations})
}

func (h *handlerConsultation) FindConsultations(c echo.Context) error {

	consultations, err := h.ConsultationRepository.FindConsultations()
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: consultations})
}

func (h *handlerConsultation) UpdateConsultation(c echo.Context) error {
	var err error

	id, _ := strconv.Atoi(c.Param("id"))

	consultation, err := h.ConsultationRepository.GetConsultation(uint(id))

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	consultation.Status = "success"

	data, err := h.ConsultationRepository.UpdateConsultation(consultation)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: data})
}

func (h *handlerConsultation) RejectCons(c echo.Context) error {
	var err error

	id, _ := strconv.Atoi(c.Param("id"))

	consultation, err := h.ConsultationRepository.GetConsultation(uint(id))

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	consultation.Status = "reject"

	data, err := h.ConsultationRepository.UpdateConsultation(consultation)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: data})
}
