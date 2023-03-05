import { useState } from 'react'
import './App.css'
import List from './components/List'
import Weather from './components/Weather'
import Banner from './components/Banner'
import BannerCard from './components/BannerCard'
import Bar from './components/Bar'
import NewsList from './components/NewsList'
import Stocks from './components/Stocks'
import TopNews from './components/TopNews'

/* 
  Макет был декомпозирован на компоненты.
*/

function App() {

  return (
    <>
      <section style={{ display: 'flex', flexDirection: 'row', border: '1px solid #eee' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TopNews />
          <NewsList />
          <Stocks />
        </div>
        <BannerCard title="Работа над ошибками" text="Смотрите на яндексе и запоминайте" />
      </section>

      <section style={{ display: 'flex', flexDirection: 'row', border: '1px solid #eee' }}>
        <Bar />
      </section>
      <section style={{ display: 'flex', flexDirection: 'row', border: '1px solid #eee' }}>
        <Banner img="" title="Banner" alt="Banner" />
      </section>
      <section style={{ display: 'flex', flexDirection: 'row', border: '1px solid #eee' }}>
        <Weather/>
        <List title="Посещаемое" />
        <List title="Карта Германии" />
        <List title="Телепрограмма" />
        <List title="Эфир" />
      </section>
    </>
  )
}

export default App
