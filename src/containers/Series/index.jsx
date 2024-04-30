import { useState, useEffect } from 'react'

import Slider from '../../components/Slider'
import {
  getTodaySeries,
  getAirSeries,
  getPopSeries,
  getTopSeries
} from '../../services/getData'
import { Body } from './styles'

function Series() {
  const [todaySeries, setTodaySeries] = useState()
  const [airSeries, setAirSeries] = useState()
  const [popSeries, setPopSeries] = useState()
  const [topSeries, setTopSeries] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getTodaySeries(),
        getAirSeries(),
        getPopSeries(),
        getTopSeries()
      ])
        .then(([todaySeries, airSeries, popSeries, topSeries]) => {
          setTodaySeries(todaySeries)
          setAirSeries(airSeries)
          setPopSeries(popSeries)
          setTopSeries(topSeries)
        })
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [])

  return (
    <Body>
      {todaySeries && <Slider info={todaySeries} title={'Estreias'} />}
      {airSeries && <Slider info={airSeries} title={'No Ar'} />}
      {popSeries && <Slider info={popSeries} title={'Séries Populares'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
    </Body>
  )
}

export default Series
