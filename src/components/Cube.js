import React from 'react'
import {Canvas, useLoader} from 'react-three-fiber'
import {TextureLoader} from "three";
import MetalTextureURL from '../assets/dark-grunge-style-scratched-metal-surface.jpg';
import Controls from "./Controls";


const Cube = () => {
  const metalTexture = useLoader(TextureLoader, MetalTextureURL);
  return (
    <div className={"canvas-container"}>
      <Canvas>
        <ambientLight/>
        <pointLight position={[10, 10, 10]}/>
        <mesh visible
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
        >
          <Controls/>
          <boxBufferGeometry
            attach={"geometry"}
            args={[2, 2, 2]}></boxBufferGeometry>
          {/*<meshBasicMaterial*/}
          {/*  wireframe={true}*/}
          {/*  attach={"material"}*/}
          {/*  color={"white"}></meshBasicMaterial>*/}
          <meshStandardMaterial
            attach='material'
            map={metalTexture}
          />
        </mesh>
      </Canvas>
    </div>
  )
}

export default Cube