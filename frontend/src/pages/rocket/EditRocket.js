import React, { useState, useEffect } from "react"
import { matchPath, useNavigate, useParams } from "react-router-dom"

import ControlGroup from "../../components/Form/ControlGroup"
import DropdownGroup from "../../components/Form/DropdownGroup"
import CustomForm from "../../components/Form/CustomForm"
import FormGroup from "../../components/Form/FormGroup"

import { useRocketReducer } from "../../components/Reducer/RocketReducer"
import { useHttpClient } from "../../hooks/http-hook"

import axios from "axios"

const COMPANIES = ["SpaceX", "BlueOrigin", "Nasa"]

const EditRocket = props => {
  const navigate = useNavigate();

  const { isLoading, sendRequest } = useHttpClient()
  let [loadedRocket, setLoadedRocket] = useState({})

  const match = useParams()

  // const match = matchPath(
  //   `/CompanyPage/EditRocket/:companyName/:rocketId`,
  //   `/CompanyPage/EditRocket/${props.params["*"]}`
  // )

  let companyName; 
  let rocketId;
  if (match) {
    companyName = match.companyName
    rocketId = match.rocketId
  }
 
  /* 
  The match variable looks like
  {
    "params": {
        "companyName": "Nasa",
        "rocketId": "61c9ddf106309ae93cf39d40"
    },
    "pathname": "/CompanyPage/EditRocket/Nasa/61c9ddf106309ae93cf39d40",
    "pathnameBase": "/CompanyPage/EditRocket/Nasa/61c9ddf106309ae93cf39d40",
    "pattern": {
        "path": "/CompanyPage/EditRocket/:companyName/:rocketId",
        "caseSensitive": false,
        "end": true
    }
  }
  */

  // let one =
  //   "http://localhost:5000/rockets/SpaceX/${props.params["*"]}";
  // let two =
  //   "http://localhost:5000/rockets/Blue Origin/${props.params["*"]}";
  // let three =
  //   "http://localhost:5000/rockets/Nasa/${props.params["*"]}";

  //   const requestOne = axios.get(one);
  //   const requestTwo = axios.get(two);
  //   const requestThree = axios.get(three);

  // axios
  //   .all([requestOne, requestTwo, requestThree])
  //   .then(
  //     axios.spread((...responses) => {
  //       const responseOne = responses[0];
  //       const responseTwo = responses[1];
  //       const responesThree = responses[2];

  //       // use/access the results
  //       console.log(responseOne, responseTwo, responesThree);
  //     })
  //   )
  //   .catch(errors => {
  //     // react on errors.
  //     console.error(errors);
  //   });

  useEffect(() => {
    const getRocket = async () => {
      try {
        const rocketData = await sendRequest(
          `/rockets/${companyName}/${rocketId}`
          //`http://localhost:5000/rockets/Blue Origin/${props.params["*"]}`
          //`http://localhost:5000/rockets/NASA/${props.params["*"]}`
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
    const editedRocket = {
      rocketID: loadedRocket._id,
      rocketName: rocketState.rocketName,
      companyName: rocketState.companyName,
      successLaunch: rocketState.successLaunch,
      failedLaunch: rocketState.failedLaunch,
      postponedLaunch: rocketState.postponedLaunch,
    }
    axios
      .post("/update/" + loadedRocket._id, editedRocket)
      .then(res => console.log(res.data))

    console.log("Edited rocket")
    const companyName = editedRocket.companyName.replace(" ", "")
    navigate(`/CompanyPage/${editedRocket.companyName}`)
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
