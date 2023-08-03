import Image from 'next/image'
import Home from './pages/Home'
import Customizer from './pages/Customizer'
import Canvas from './canvas'

export default function App() {
  return (
    <main className="app transition-all ease-in">
      <Home/>
      <Customizer/>
      <Canvas/>    
      </main>
  )
}
