package main

import (
	"backend/database"
	"backend/pkg/mysql"
	"backend/routes"
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	//load .env file
	err := godotenv.Load()
	if err != nil {
		fmt.Println(err)
		panic("Failed to load .env file")
	}

	//declare e as a new object router
	e := echo.New()

	// untuk mengakses data yg akan dikirimkan ke frontEnd
	// Middleware CORS (Cross-Origin Resource Sharing) digunakan untuk mengizinkan atau membatasi akses dari sebuah sumber daya web (website) pada domain yang berbeda
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.POST, echo.PATCH, echo.DELETE},
		AllowHeaders: []string{"X-Requested-With", "Content-Type", "Authorization"},
	}))

	//database initialized and auto migrations
	mysql.DatabaseInit()
	database.RunMigration()

	//set route group
	routes.RouteInit(e.Group("/api/v1"))

	//set static folder
	e.Static("/uploads", "./uploads")

	//running server
	port := os.Getenv("PORT")
	fmt.Println("Server running on port " + port)
	e.Logger.Fatal(e.Start("localhost:" + port))

}
