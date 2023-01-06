import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import { useKeyboard } from "../hooks/useKeyboard"

const CHARACTER_SPEED = 5
const CHARACTER_JUMP_FORCE = 10

export const Player = () => {
    // const actions = useKeyboard()
    // console.log(actions)
    const { moveBackward,
        moveForward,
        moveLeft,
        moveRight,
        jump
    } = useKeyboard()

    const { camera } = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 0.5, 0] //necesario ponerlo un poco mas arriba del pasto para que no quede pegado
    }))

    // useRef para mantener la posición y no se actualice 
    const pos = useRef([0, 0, 0])
    useEffect(() => {
        api.position.subscribe(p => {
            pos.current = p
        })
    }, api.position)

    // useRef obtener la velocidad y no se actualice 
    const vel = useRef([0, 0, 0])
    useEffect(() => {
        api.velocity.subscribe(p => {
            vel.current = p
        })
    }, api.velocity)


    useFrame(() => {
        camera.position.copy(
            // indicar posición o dirección
            // mover la camara segun la posición del personahe
            new Vector3(
                pos.current[0], //x
                pos.current[1], //y
                pos.current[2], //z
            )
        )
        // api.velocity.set(0, 0, -1) // -1 para que vaya hacia adelante
        const direction = new Vector3()
        //caminar adelante y atras
        const frontVector = new Vector3(
            0, 0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        )
        // caminar hacia los lados
        const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0
        )

        direction.subVectors(frontVector, sideVector)
            .normalize().multiplyScalar(CHARACTER_SPEED)
            .applyEuler(camera.rotation) // esta rotando el vector en función hacia la dirección en la que se dirige la cámara

        api.velocity.set(
            direction.x,
            vel.current[1], //salto con una velocidad
            direction.z
        )

        // if (jump) {  //salto infinito
        //ajustar el salto del personaje
        if (jump && Math.abs(vel.current[1]) < 0.05) {
            api.velocity.set(
                vel.current[0],
                CHARACTER_JUMP_FORCE,
                vel.current[2]
            )
        }
    })
    return (
        <mesh ref={ref} />
    )
}