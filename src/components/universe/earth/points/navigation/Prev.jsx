import React from "react";

import {degToRad} from "../../../../../lib";
import {CarouselContext} from "../Carousel";

const Prev = () => {
  const {len, setShownObject} = React.useContext(CarouselContext)
  const onClick = () => {
    setShownObject(state => (state + len - 1) % len)
  }
  return (
    <mesh position={[-.2,.2,0]} rotation={[0, 0,degToRad(90)]} onClick={onClick}>
      <coneGeometry args={[.01, .02, 32]}/>
      <meshStandardMaterial color='#FFFFFF'/>
    </mesh>
  )
}

export default Prev