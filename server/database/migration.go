package database

import (
	"backend/models"
	"backend/pkg/mysql"
	"fmt"
)

func RunMigration() {

	//auto migration models to database
	err := mysql.DB.AutoMigrate(
		&models.User{},
		&models.Article{},
	)
	if err != nil {
		fmt.Println(err)
		panic("Migration Failed")
	}

	fmt.Println("Migration Success")

}
