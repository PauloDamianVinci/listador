// ! Vista principal del programa. .
import axios from 'axios';
import { useState, useEffect } from "react";
// Variables de entorno:
import getParamsEnv from "../../functions/getParamsEnv.js";
const { API_URL_BASE } = getParamsEnv();
// Estilos:
import style from "./Home.module.css";
const { mainTitle, containerLoading, container, img } = style;

const Home = () => {
  const [selectedFileCuentas, setSelectedFileCuentas] = useState(null);
  const [selectedFileMovim, setSelectedFileMovim] = useState(null);
  const [keyCuentas, setKeyCuentas] = useState(0); // Clave única para la carga de cuentas
  const [keyMovim, setKeyMovim] = useState(0); // Clave
  const [loadingFile, setLoadingFile] = useState(false);
  const [selectedFileNameCuentas, setSelectedFileNameCuentas] = useState("");
  const [selectedFileNameMovim, setSelectedFileNameMovim] = useState("");

  const handleFileChangeCuentas = (event) => {
    setSelectedFileCuentas(event.target.files[0]);
    setSelectedFileNameCuentas(event.target.files[0]?.name || "");
    setKeyCuentas(keyCuentas + 1);
  };
  const handleFileChangeMovim = (event) => {
    setSelectedFileMovim(event.target.files[0]);
    setSelectedFileNameMovim(event.target.files[0]?.name || "");
    setKeyMovim(keyMovim + 1);
  };

  const handleStartProcess = () => {
    if (!selectedFileCuentas || !selectedFileMovim) {
      console.log("-> Se deben cargar los archivos antes de iniciar el proceso.");
      return;
    }
    if (loadingFile) { return; }

    setLoadingFile(true);

    console.log("Procesando archivo de cuentas...");
    const formDataCounts = new FormData();
    formDataCounts.append('file', selectedFileCuentas);

    console.log("selectedFileCuentas: ", selectedFileCuentas);


    // ESTO DEBO RESOLVER: ME DA ERROR Siempre es "Access to XMLHttpRequest at 'https://desafio-bancario.vercel.app/listador/sendfilecuentas' from origin 'https://desafio-bancario-jcw5.vercel.app' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."
    axios.post(API_URL_BASE + "/accounts", formDataCounts)
      .then(response => {
        console.log("Respuesta!!!: ", response.data);
        if (response.data.rx === "ok") {
          console.log("-> Archivo cargado correctamente. ", response.data.total, " registros");
          console.log("Procesando archivo de movimientos...");
          const formDataMov = new FormData();
          formDataMov.append('file', selectedFileMovim);
          return axios.post(API_URL_BASE + "/movim", formDataMov)
        } else {
          console.log("ERR: ", response.data);
          console.log(response.data.msg);
          return;
        }
      })
      .then(response => {
        if (response.data.rx === "ok") {
          console.log("-> Archivo cargado correctamente. ", response.data.total, " registros procesados");
          console.log("-> Cuentas con saldo negativo: ", response.data.totalNeg, ". Saldos menores a -10.000: ", response.data.menoresDiezMil);
          console.log("Generando bajada de archivo Errores.dat...");
          return axios.get(API_URL_BASE + "/results")
        } else {
          console.log("ERR2: ", response.data);
          console.log(response.data.msg);
          return;
        }
      })
      .then(response => {
        // Crear un Blob con el contenido del archivo
        const blob = new Blob([response.data], { type: 'text/plain' });
        // Crear un enlace de descarga
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'Errores.dat';
        // Simular el clic en el enlace para iniciar la descarga
        document.body.appendChild(link);
        link.click();
        // Limpiar el enlace y liberar recursos
        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
        console.log("-> Archivo descargado.");
        setLoadingFile(false);
        return;
      })
      .catch(error => {
        // POR ACA SALE EL AXIOS INICIAL!!
        console.log("ERR3: ", error);
        let msg = '';
        if (!error.response) {
          msg = error.message;
        } else {
          msg = "Error fetching data: " + error.response.status + " - " + error.response.data;
        }
        setLoadingFile(false);
      });
  }

  return (
    <div>
      <div>
        <input
          key={keyCuentas}
          type="file"
          onChange={handleFileChangeCuentas}
          // id="input_file"
          // style="display:none;"
          accept=".dat" />
        <span>{selectedFileNameCuentas}</span>
        {/* <button onClick={handleUploadCuentas}>Cargar archivo de cuentas</button> */}
      </div>
      <div>
        <input key={keyMovim} type="file" onChange={handleFileChangeMovim} accept=".dat" />
        <span>{selectedFileNameMovim}</span>
        {/* <button onClick={handleUploadMovim}>Cargar archivo de movimientos</button> */}
      </div>
      <div>
        <button onClick={handleStartProcess}>Iniciar proceso</button>
      </div>
    </div>
  );


}
export default Home;