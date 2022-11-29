import React from 'react'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import useMainStore from '../../../../store/useMainStore'
import gsap from 'gsap'
import {PointContext} from "./Point";

const Model = () => {

  const {modelRef: ref, position, rotation, modelName, modelRad: rad} = React.useContext(PointContext)

  const setFocusTarget = useMainStore.useSetFocusTarget()

  const gltf = useLoader(GLTFLoader, `/models/${modelName}`)

  const fixPosition = position.map(e => e * rad)

  const onModelClick = () => {
    setFocusTarget(null)
    gsap.to(ref.current.scale, {duration: .2, x: 0, y: 0, z: 0})
  }

  React.useEffect(() => {
    if (ref.current !== null) {
      ref.current.rotation.set(...rotation,'YXZ')
    }
  }, [ref.current])

  return (
    <primitive ref={ref} object={gltf.scene} position={fixPosition} scale={[0,0,0]} onClick={onModelClick}/>
  )
}

export default Model