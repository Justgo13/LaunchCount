import React from "react"
import uuid from "react-uuid"
import { useNavigate } from "react-router-dom"

import Button from "../components/Button"

import "bootstrap/dist/css/bootstrap.css"
import "../styles/mainPage.css"

const ORIGINZATIONS = ["SpaceX", "BlueOrigin", "Nasa"]



const MainPage = () => {
  const navigate = useNavigate()
  const companyClickHandler = company => {
    navigate(`/CompanyPage/${company}`)
  }
  return (
    <div className="container">
      <h1 className="display-2">Rocket Launch Counter</h1>
      <div>
        {ORIGINZATIONS.map(org => {
          return (
            <Button key={uuid()}
              className="red-inverse"
              onClick={() => {
                companyClickHandler(`${org}`)
              }}
            >
              <h4 className="display-5">{org}</h4>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default MainPage
