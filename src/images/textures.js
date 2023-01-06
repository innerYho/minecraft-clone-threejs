import {
    grassImg, woodImg,
    dirtImg, logImg, glassImg
} from './images'
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const groundTexture = new TextureLoader().load(grassImg)
const woodTexture = new TextureLoader().load(woodImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)

groundTexture.wrapS = RepeatWrapping //repetir textura horizontal
// woodTexture.wrapS = RepeatWrapping //repetir textura horizontal
// dirtTexture.wrapS = RepeatWrapping //repetir textura horizontal
// logTexture.wrapS = RepeatWrapping //repetir textura horizontal
// glassTexture.wrapS = RepeatWrapping //repetir textura horizontal

groundTexture.wrapT = RepeatWrapping //repetir textura vertical

glassTexture.magFilter = NearestFilter  //agranda la img y mantiene intactos los pixeles
groundTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
export { groundTexture, woodTexture, dirtTexture, logTexture, glassTexture }