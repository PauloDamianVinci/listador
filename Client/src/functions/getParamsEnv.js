//! Unico lugar donde obtengo las variables de entorno.
export default function getParamsEnv() {
    const API_URL_BASE = import.meta.env.VITE_API_URL_BASE || 'http://localhost:3001/listador';
    const HOME = import.meta.env.VITE_HOME || '/home';
    const IMG_LAND = import.meta.env.VITE_IMG_LAND || '/src/assets/Land.jpg';
    const ROOT = import.meta.env.VITE_ROOT || '/';

    return { API_URL_BASE, HOME, IMG_LAND, ROOT }
}