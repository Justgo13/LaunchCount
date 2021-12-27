import React, { useState } from "react"
import { useEffect } from "react"

import ControlGroup from "../../components/Form/ControlGroup"
import DropdownGroup from "../../components/Form/DropDownGroup"
import CustomForm from "../../components/Form/CustomForm"
import FormGroup from "../../components/Form/FormGroup"

import { useRocketReducer } from "../../components/Reducer/RocketReducer"
import { useHttpClient } from "../../hooks/http-hook"

import axios from "axios"

// This is temporary until we get actual data in the database
const ROCKETS = [
  {
    id: "1",
    name: "Falcon 9",
    launches: [
      {
        category: "success",
        value: 5,
        color: "#00ff00",
      },
      {
        category: "failures",
        value: 12,
        color: "#ff0000",
      },
      {
        category: "postponed",
        value: 6,
        color: "#fefe20",
      },
    ],
  },
  {
    id: "2",
    name: "Falcon Heavy",
    launches: [
      {
        category: "success",
        value: 5,
        color: "#00ff00",
      },
      {
        category: "failures",
        value: 12,
        color: "#ff0000",
      },
      {
        category: "postponed",
        value: 6,
        color: "#fefe20",
      },
    ],
  },
  {
    id: "3",
    name: "StarShip",
    launches: [
      {
        category: "success",
        value: 5,
        color: "#00ff00",
      },
      {
        category: "failures",
        value: 12,
        color: "#ff0000",
      },
      {
        category: "postponed",
        value: 6,
        color: "#fefe20",
      },
    ],
  },
]

const COMPANIES = ["SpaceX", "Blue Origin", "NASA"]

const EditRocket = props => {
  const { isLoading, sendRequest } = useHttpClient()
  let [loadedRocket, setLoadedRocket] = useState({})

  useEffect(() => {
    const getRocket = async () => {
      try {
        const rocketData = await sendRequest(
          `http://localhost:5000/rockets/SpaceX/${props.params["*"]}`
        )
        setLoadedRocket(rocketData)
      } catch (err) {}
    }

    getRocket()
  }, [sendRequest, setLoadedRocket])

  let {
    rocketState,
    companyNameHandler,
    rocketNameHandler,
    successLaunchHandler,
    failedLaunchHandler,
    postponedLaunchHandler,
  } = useRocketReducer({
    rocketName: "",
    companyName: "",
    successLaunch: 0,
    failedLaunch: 0,
    postponedLaunch: 0,
  })

  useEffect(() => {
    // pre-populate with existing rocket data
    companyNameHandler(loadedRocket.companyName)
    rocketNameHandler(loadedRocket.rocketName)
    successLaunchHandler(loadedRocket.successLaunch)
    failedLaunchHandler(loadedRocket.failedLaunch)
    postponedLaunchHandler(loadedRocket.postponedLaunch)
  }, [loadedRocket])

  const submitHandler = e => {
    e.preventDefault()
    console.log(rocketState);

    const newrocket = {
      rocketID: loadedRocket._id,
      rocketName: rocketState.rocketName,
      companyName: rocketState.companyName,
      successLaunch: rocketState.successLaunch,
      failedLaunch: rocketState.failedLaunch,
      postponedLaunch: rocketState.postponedLaunch,
    }
    axios
      .post("http://localhost:5000/update/" + loadedRocket._id, newrocket)
      .then(res => console.log(res.data))

    console.log("Edited rocket")
  }

  // create the list for the rocket stat dropdowns
  let ROCKET_STAT_NUMBERS = []
  for (let i = 0; i < 100; i++) {
    ROCKET_STAT_NUMBERS.push(i)
  }

  return (
    <React.Fragment>
      {isLoading && (
        <div>
          <h3>Loading data</h3>
        </div>
      )}

      {!isLoading && rocketState && (
        <div className="container">
          <h2 className="display-3">Edit Rocket</h2>
          <CustomForm submitHandler={submitHandler}>
            <ControlGroup
              labelText="Rocket Name"
              htmlFor="rocketName"
              changeHandler={rocketNameHandler}
              value={rocketState.rocketName}
            />

            <DropdownGroup
              labelText="Company"
              htmlFor="companyName"
              dropdownToggleText={rocketState.companyName}
              dropdownChoices={COMPANIES}
              setDropdownState={companyNameHandler}
            />

            <FormGroup className="rocket-stats">
              <DropdownGroup
                labelText="Successful launches"
                htmlFor="successLaunches"
                dropdownToggleText={rocketState.successLaunch}
                dropdownChoices={ROCKET_STAT_NUMBERS}
                setDropdownState={successLaunchHandler}
                dropdownVariant="success"
              />

              <DropdownGroup
                labelText="Failed launches"
                htmlFor="failedLaunches"
                dropdownToggleText={rocketState.failedLaunch}
                dropdownChoices={ROCKET_STAT_NUMBERS}
                setDropdownState={failedLaunchHandler}
                dropdownVariant="danger"
              />

              <DropdownGroup
                labelText="Postponed launches"
                htmlFor="postponedLaunches"
                dropdownToggleText={rocketState.postponedLaunch}
                dropdownChoices={ROCKET_STAT_NUMBERS}
                setDropdownState={postponedLaunchHandler}
                dropdownVariant="warning"
              />
            </FormGroup>
          </CustomForm>
        </div>
      )}
    </React.Fragment>
  )
}

export default EditRocket
