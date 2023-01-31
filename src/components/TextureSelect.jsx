import { useEffect, useState } from 'react';
import { useKeyboard } from '../hooks/useKeyboard';
import { useStore } from '../hooks/useStore';
import * as images from '../images/images'

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false);
    const [texture, setTexture] = useStore(state =>
        [state.texture, state.setTexture]);

    // custom hook
    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = useKeyboard()

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)
        setVisible(true)
    })

    useEffect(() => {
        // cambiar la textura una vez seleccionada
        const options = {
            dirt, grass, glass, wood, log
        }

        const selectedTexture = Object.entries(options).find(([texture, isEnabled]) => isEnabled)

        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }
        // console.log(selectedTexture)

    }, [dirt, grass, glass, wood, log])

    if (!visible) return null

    return (
        <div className='texture-selector'>
            {
                Object.entries(images).map(([imgKey, img]) => {
                    return (
                        <img className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
                            key={imgKey}
                            src={img}
                            alt={imgKey}
                        // onClick={() => setTexture(textureName)}
                        />
                    )
                })
            }
        </div>
    )
}