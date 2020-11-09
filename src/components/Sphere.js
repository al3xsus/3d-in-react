import React from 'react'
import {Canvas} from 'react-three-fiber'


const Sphere = () => {
  return (
    <div className={"canvas-container"}>
      <Canvas>
        <ambientLight/>
        <pointLight position={[10, 10, 10]}/>
        <directionalLight intensity={0.5} />
        <mesh
          visible
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        >
          <sphereGeometry attach="geometry" args={[2, 32, 32]}/>
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>
      </Canvas>
    </div>
  )
}

export default Sphere