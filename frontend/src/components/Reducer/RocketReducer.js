import React, { useReducer } from "react"

const rocketReducer = (state, action) => {
  switch (action.type) {
    case "COMPANY_NAME":
      return {
        ...state,
        companyName: action.companyName,
      }
    case "ROCKET_NAME":
      return {
        ...state,
        rocketName: action.rocketName,
      }
    case "SUCCESS_LAUNCH":
      return {
        ...state,
        successLaunch: action.successLaunch,
      }
    case "FAILED_LAUNCH":
      return {
        ...state,
        failedLaunch: action.failedLaunch,
      }
    case "POSTPONED_LAUNCH":
      return {
        ...state,
        postponedLaunch: action.postponedLaunch,
      }
    default:
      return state
  }
}

export const useRocketReducer = initState => {
  const [rocketState, dispatch] = useReducer(rocketReducer, initState)

  const companyNameHandler = companyName => {
    dispatch({
      type: "COMPANY_NAME",
      companyName,
    })
  }

  const rocketNameHandler = rocketName => {
    dispatch({
      type: "ROCKET_NAME",
      rocketName,
    })
  }

  const successLaunchHandler = successLaunch => {
    dispatch({
      type: "SUCCESS_LAUNCH",
      successLaunch,
    })
  }

  const failedLaunchHandler = failedLaunch => {
    dispatch({
      type: "FAILED_LAUNCH",
      failedLaunch,
    })
  }

  const postponedLaunchHandler = postponedLaunch => {
    dispatch({
      type: "POSTPONED_LAUNCH",
      postponedLaunch,
    })
  }

  return {
    rocketState,
    companyNameHandler,
    rocketNameHandler,
    successLaunchHandler,
    failedLaunchHandler,
    postponedLaunchHandler,
  }
}
