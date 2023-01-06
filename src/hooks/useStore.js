import { nanoid } from "nanoid"
import create from "zustand"

export const useStore = create(set => ({
    texture: 'dirt',
    cubes: [{
        id: nanoid(),
        pos: [1, 1, 1],
        texture: 'dirt'
    },
    {
        id: nanoid(),
        pos: [1, 10, 1],
        texture: 'glass'
    },
    ],
    addCube: (x, y, z) => {
        set(state => ({
            cubes: [...state.cubes, {
                id: nanoid(),
                texture: state.texture,
                pos: [x, y, z]
            }]
        }))
    }, removeCube: (x, y, z) => {
        set(state => ({
            cubes: state.cubs.filter(cube => {
                const [X, Y, Z] = cube.pos
                return X === x || Y === y || Z === z
            })
        }))
    },
    setTexture: () => { },
    saveWord: () => { },
    resetWord: () => { }
}))