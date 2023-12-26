//! Unico lugar donde obtengo las variables de entorno.
export default function getParamsEnv() {
    const API_URL_BASE = import.meta.env.VITE_API_URL_BASE || 'http://localhost:3001/listador';
    // const VG_G = import.meta.env.VITE_VG_GENRES || '/genres';
    // const VG_GENRES = API_URL_BASE + VG_G;
    // const VG_P = import.meta.env.VITE_VG_PLATFORMS || '/platforms';
    // const VG_PLATFORMS = API_URL_BASE + VG_P;
    // const VG_V = import.meta.env.VITE_VG_VIDEOGAMES || '/videogames';
    // const VG_VIDEOGAMES = API_URL_BASE + VG_V;
    // const VG_E = import.meta.env.VITE_VG_EDIT || '/edit';
    // const VG_EDIT_GAME = API_URL_BASE + VG_E;
    // const VG_BACK = import.meta.env.VITE_VG_VER_BACK || '/versionback';
    // const VG_VER_BACK = API_URL_BASE + VG_BACK;
    // const VG_R = import.meta.env.VITE_VG_REMOVE || '/remove';
    // const VG_REMOVE = API_URL_BASE + VG_R;

    // const DETAIL_BASE = import.meta.env.VITE_DETAIL_BASE || '/detail';
    // const EDIT_BASE = import.meta.env.VITE_EDIT_BASE || '/edit';

    const HOME = import.meta.env.VITE_HOME || '/home';
    const IMG_LAND = import.meta.env.VITE_IMG_LAND || '/src/assets/Land.jpg';
    const ROOT = import.meta.env.VITE_ROOT || '/';
    // // const CREATE = import.meta.env.VITE_CREATE || '/create';
    // const DETAIL = import.meta.env.VITE_DETAIL || '/detail/:id';
    // const EDIT = import.meta.env.VITE_EDIT || '/edit/:id';
    //const ABOUT = import.meta.env.VITE_ABOUT || '/about';
    //const ERROR = import.meta.env.VITE_ERROR || '/error';

    // const IMG_404 = import.meta.env.VITE_IMG_404 || '/src/assets/Error404.jpeg';
    // const IMG_ERROR = import.meta.env.VITE_IMG_ERROR || '/src/assets/Error.jpeg';
    // const IMG_ESPERA = import.meta.env.VITE_IMG_ESPERA || '/src/assets/Loading.gif';
    // const IMG_ABOUT = import.meta.env.VITE_IMG_ABOUT || '/src/assets/Face.jpg';
    // const IMG_LINK = import.meta.env.VITE_IMG_LINKEDIN || '/src/assets/LINKEDIN.PNG';
    // const IMG_GIT = import.meta.env.VITE_IMG_GITHUB || '/src/assets/GIT.PNG';
    // const MY_LNK = import.meta.env.VITE_MY_LINKEDIN || 'https://www.linkedin.com/in/paulo-damian-vinci/';
    // const MY_GIT = import.meta.env.VITE_MY_GITHUB || 'https://github.com/PauloDamianVinci/videogames';
    // const IMG_HELP = import.meta.env.VITE_IMG_ABOUT || '/src/assets/Face.jpg';
    // const IMG_LOGO_NAV = import.meta.env.VITE_IMG_LOGO_NAV || '/src/assets/ImgNav.png';

    return { API_URL_BASE, HOME, IMG_LAND, ROOT }
}