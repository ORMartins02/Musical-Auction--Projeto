import { useContext } from "react"
import { UserPage } from "../../components/user"
import { UserContext } from "../../contexts/ApiContext"


export const User = () => {
  const {checkToken} = useContext(UserContext)
  checkToken()
  return(
    <>
    < UserPage/>
    </>
  )
}
