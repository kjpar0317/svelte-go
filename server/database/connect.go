package database

import (
	"coininfos/server/config"
	// "coininfos/server/model"
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// ConnectDB connect to db
func ConnectDB() {
	var err error
	// DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	_, err = gorm.Open(mysql.Open(config.Config("DB_CONN_STR")), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	fmt.Println("Connection Opened to Database")
	// DB.AutoMigrate(&model.Product{}, &model.User{})
	// fmt.Println("Database Migrated")
}
