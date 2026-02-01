import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Dog from './components/Dog'

const App = () => {
  return (
    <div className="app">
      <Canvas camera={{ position: [0, 0, 1], fov: 50 }} shadows>
        <color attach="background" args={[ '#111111' ]} />
        <Suspense fallback={null}>
          <Dog />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
