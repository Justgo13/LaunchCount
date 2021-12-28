import React, { useState, useCallback } from "react"
import axios from "axios"

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false)

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true)

      try {
        let res

        switch (method) {
          case "GET":
            res = await axios.get(url)
            break
          case "POST":
            res = await axios.post(url, body)
            break
          case "PATCH":
            res = await axios.patch(url, body)
            break
          case "DELETE":
            res = await axios.delete(url)
            break
          default:
            console.log(`Unhandled method ${method}`)
            break
        }

        setIsLoading(false)
        return res.data
      } catch (err) {
        setIsLoading(false)
        console.log("Error in http request")
      }
    },
    []
  )

  return { isLoading, sendRequest }
}
