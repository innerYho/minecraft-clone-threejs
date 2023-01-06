import { useBox } from "@react-three/cannon"
import * as textures from '../images/textures'
export const Cube = ({
    //  id, 
    position, texture }) => {
    const [ref] = useBox(() => ({
        type: 'Static', position
    }))

    //traer texturas
    const activeTexture = textures[texture + 'Texture']

    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry" />
            {/* <meshStandardMaterial color='pink' attach='material' /> */}
            <meshStandardMaterial map={activeTexture} attach='material' />
        </mesh>
    )
}