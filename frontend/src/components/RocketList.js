import React from "react"
import uuid from "react-uuid"


import RocketItem from "./RocketItem"

import "../styles/company.css"

const RocketList = ({rockets}) => {
  return (
    <div className="row">
      {rockets.map(rocket => (
        <RocketItem key={uuid()} companyName={rocket.companyName} rocketName={rocket.name} launchData={rocket.launches} rocketId={rocket.id} />
      ))}
    </div>
  )
}

export default RocketList
