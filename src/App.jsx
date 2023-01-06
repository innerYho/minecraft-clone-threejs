import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV as Fpv } from './components/FPV'
import { Player } from './components/Player'
import { Cubes } from './components/cubes'
function App() {

  return (
    <>
      <Canvas>
        {/* <h1>MiduCraft</h1> */}
        <Sky sunPosition={[100, 0, 0]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
    </>
  )
}

export default App