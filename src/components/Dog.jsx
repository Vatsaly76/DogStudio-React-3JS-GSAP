import React from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
const Dog = () => {
    const dog = useGLTF('/models/dog.drc.glb')
    return (
        <>
            <ambientLight intensity={0.4} />
            <primitive object={dog.scene} scale={0.5} position={[0, 0, 0]} />
            <directionalLight intensity={10} color={0xFFFFFF} position={[0, 5, 5]} />
            <OrbitControls enableZoom={true} />

        </>
    )
}

export default Dog
useGLTF.preload('/models/dog.drc.glb')
