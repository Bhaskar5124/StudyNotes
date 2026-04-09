import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import AndLogical from './components/AndLogical'
import Effect from './components/Effect'
import Timer from './components/Timer'
import FocusableInput from './components/Ref'
import Mem from './components/Mem'
import Callback from './components/Callback'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import A from './components/A'
import E from './components/D'
import ProductList from './components/ApiCall'
import ProductListAxios from './components/AxiosApiCall'
import Hello, { Hello2, Hello3 } from './components/Hello'
import HomeHook from './components/CustomHook'
import ControlledInput from './components/ControlledInput'
import SetStorage from './components/SetStorage'
import Storage from './components/Storage'
import CounterRedux from './components/CounterRedux'

function App() {

  return (
    <>
    {/* <Hello2/> */}
    {/* <Hello3/> */}
    {/* <Hello/> */}
    {/* <Counter/> */}
    {/* <AndLogical/> */}
    {/* <Effect/> */}
    {/* <Timer/> */}
    <FocusableInput/>
    {/* <Mem/> */}
    {/* <Callback/> */}
    {/* <A/> */}
    {/* <E/> */}
    {/* <ProductList/> */}
    {/* <ProductListAxios/> */}
    {/* <HomeHook/> */}
    {/* <ControlledInput/> */}
    {/* <SetStorage/> */}
    {/* <Storage/> */}


      {/* <CounterRedux/> */}

    {/* <Header/>
    <Outlet/>
    <Footer/> */}
    </>
  )
}

export default App
