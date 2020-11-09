import {extend, useFrame, useThree} from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import React, {useRef} from "react";

extend({OrbitControls})

const Controls = () => {
  const controls = useRef()
  const {camera, gl} = useThree()
  useFrame(() => {
    controls.current.update()
  })
  return (
    <orbitControls
      ref={controls}
      autoRotate={true}
      args={[camera, gl.domElement]}></orbitControls>
  )
}

export default Controls