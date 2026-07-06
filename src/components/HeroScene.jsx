import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const dots = [
  [-2.6, 1.4, -1],
  [2.9, -1.1, -0.5],
  [1.9, 2.2, -1.4],
  [-2.3, -1.9, -0.8]
]

function Geometry() {
  const group = useRef()
  const ico = useRef()
  const inner = useRef()
  const ring = useRef()
  const orbit = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) {
      group.current.position.y = Math.sin(t * 0.6) * 0.18
      group.current.rotation.y += (mouse.current.x * 0.45 - group.current.rotation.y) * 0.04
      group.current.rotation.x += (mouse.current.y * -0.3 - group.current.rotation.x) * 0.04
    }
    if (ico.current) {
      ico.current.rotation.y = t * 0.18
      ico.current.rotation.x = t * 0.12
    }
    if (inner.current) {
      inner.current.rotation.y = -t * 0.24
      inner.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.04)
    }
    if (ring.current) {
      ring.current.rotation.z = t * 0.1
      ring.current.rotation.x = 1.15 + Math.sin(t * 0.3) * 0.08
    }
    if (orbit.current) {
      orbit.current.rotation.z = t * 0.06
    }
  })

  return (
    <group ref={group}>
      <mesh ref={ico}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial wireframe color="#9379BE" transparent opacity={0.5} />
      </mesh>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.02, 0]} />
        <meshStandardMaterial color="#CBBDE2" roughness={0.25} metalness={0.2} flatShading transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring} rotation={[1.15, 0, 0]}>
        <torusGeometry args={[2.6, 0.012, 16, 128]} />
        <meshBasicMaterial color="#AE9BD1" transparent opacity={0.45} />
      </mesh>
      <group ref={orbit}>
        {dots.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#9379BE" transparent opacity={0.7} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6.5], fov: 42 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 5]} intensity={0.7} color="#F3EFFB" />
      <pointLight position={[-5, -3, -4]} intensity={0.5} color="#9379BE" />
      <Geometry />
    </Canvas>
  )
}
