package model

import "gorm.io/gorm"

// User struct
type RapiHeaderInfo struct {
	gorm.Model
	MiUserid     string `json:"X-RapidAPI-Host"`
	MiUsernm     string `json:"userName"`
	MiUsernicknm string `json:"nickName"`
	MiPasswd     string `gorm:"not null" json:"password"`
	MiRoleCd     string `json:"roleCd"`
	MiDoneCd     string `json:"doneCd"`
	MiDoneId     string `json:"doneId"`
	MiPoint      int    `json:"point"`
	MiRegtime    string `json:"regtime"`
}
