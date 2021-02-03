import { useEffect, useState } from "react"
import { getPastLaunches, getCompany } from './service'
import { Header, Form, Launches } from './Components/components'



const App = () => {
  const [launches, setLaunches] = useState([])
  const [year, setYear] = useState('')

  console.log(launches)
  const [company, setCompany] = useState([])

  useEffect(() => {
    getPastLaunches().then(res => {
      setLaunches(res.data)
    }) 
  }, [])

  useEffect(() => {
    getCompany().then(res => {
      setCompany(res.data)
    })
  }, [])
  return (
    <>
      <Header company={company} />
      <Form launches={launches} setLaunches={setLaunches} setYear={setYear} />
      <Launches launches={launches.filter(launch => launch.date_utc.startsWith(year))} />
    </>
  )
}
export default App;
