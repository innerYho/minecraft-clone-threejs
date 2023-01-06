import { usePlane } from '@react-three/cannon'
import { useStore } from '../hooks/useStore.js'
import { groundTexture } from '../images/textures.js'

export function Ground() {
    const [ref] = usePlane(() => ({
        //sun
        rotation: [-Math.PI / 2, 0, 0],   //x, y, z
        position: [0, -0.5, 0]   //x, y, z
    }))

    const [addCube] = useStore(state => [state.addCube])

    groundTexture.repeat.set(100, 100)

    const handleClickGround = event => {
        // console.log(event.point) //obtiene el lugar en coordenadas en el que se le da click
        event.stopPropagation()  //evita que el objeto pase debajo del suelo
        const [x, y, z] = Object.values(event.point)
            .map(n => Math.ceil(n)) // redondearlo . ceil: hacia arriba

        addCube(x, y, z)
    }

    return (
        <mesh
            onClick={handleClickGround}
            ref={ref}
        >
            <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
            {/* <meshStandardMaterial attach="material" color='green' /> */}
            <meshStandardMaterial attach='material' map={groundTexture} />
        </mesh>
    )
}