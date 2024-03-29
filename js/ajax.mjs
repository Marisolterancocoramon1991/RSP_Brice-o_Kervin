
import {showSpinner, hideSpinner} from "./script.mjs";


    // toma la url servidor para crear la lista del punto                  1 listar
    function getUsersApi(callback) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.open('GET', 'http://localhost/labor3examen/servidorlabo.php', true);

        xhr.onload = function () {
            if (xhr.status == 200) {
                var jsonResponse = xhr.response;
                callback(null, jsonResponse);
            } else {
                callback('Peticion fallo con el estado ' + xhr.status, null);
            }
        };

        xhr.onerror = function () {
            callback('Error de Network', null);
        };

        xhr.send();
    }




    function agregarUsuariosApi(userData) {
        return fetch('http://localhost/labor3examen/servidorlabo.php/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data.id;
        })
        .catch(error => {
            hideSpinner();
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    /*
    async function modificarUsuarioApi(userId, updatedUserData) {

        const apiUrl = 'http://localhost/labor3examen/servidorlabo.php/';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: userId,
                    nombre: updatedUserData.nombre,
                    apellido: updatedUserData.apellido,
                    edad: updatedUserData.edad,
                    equipo: updatedUserData.equipo,
                    posicion: updatedUserData.posicion,
                    cantidadGoles: updatedUserData.cantidadGoles,
                    titulo: updatedUserData.titulo,
                    facultad: updatedUserData.facultad,
                    añoGraduacion: updatedUserData.anioGraduacion
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // Check if the response is a valid JSON
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const jsonResponse = await response.json();
                console.log('User modified successfully:', jsonResponse);
                return jsonResponse; // Return the modified user data if available
            } else {
                const textResponse = await response.text();
                console.log('Success response (non-JSON):', textResponse);
                return textResponse; // Return the non-JSON success response
            }
        } catch (error) {
            console.error('Error modifying user:', error.message);
            throw error;
        }
    }
    */

    function modificarUsuarioApi(userId, updatedUserData) {
        const apiUrl = 'http://localhost/labor3examen/servidorlabo.php/';

        return new Promise((resolve, reject) => {
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: userId,
                    nombre: updatedUserData.nombre,
                    apellido: updatedUserData.apellido,
                    edad: updatedUserData.edad,
                    equipo: updatedUserData.equipo,
                    posicion: updatedUserData.posicion,
                    cantidadGoles: updatedUserData.cantidadGoles,
                    titulo: updatedUserData.titulo,
                    facultad: updatedUserData.facultad,
                    añoGraduacion: updatedUserData.anioGraduacion
                }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                // Check if the response is a valid JSON
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    return response.json();
                } else {
                    return response.text();
                }
            })
            .then(data => {
                console.log('User modified successfully:', data);
                resolve(data); // Resolve the promise with modified user data or success response
            })
            .catch(error => {
                console.error('Error modifying user:', error.message);
                reject(error); // Reject the promise with the error
            });
        });
    }

    
    /*   
       


    function eliminarUsuarioApi(IdUsuario) {
        const url = 'http://localhost/labor3examen/servidorlabo.php';

        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: IdUsuario }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error deleting user: ${response.status}`);
            }
            return response.text(); // Receive the response as text
        })
        .then(data => {
            // Check if the response is "Exito"
            if (data.trim().toLowerCase() === 'exito') {
                console.log('User deleted successfully');
            } else {
                throw new Error('Error deleting user');
            }
        })
        .catch(error => {
        // console.error(error.message);
            throw error;
        });
    }

    */
  /*  function eliminarUsuarioApi(IdUsuario) {
        const url = 'http://localhost/labor3examen/servidorlabo.php';

        // Utiliza la función fetch para enviar una solicitud DELETE a la API
        return fetch(url, {
            method: 'DELETE',  // Método HTTP DELETE
            headers: {
                'Content-Type': 'application/json',  // Tipo de contenido JSON
            },
            body: JSON.stringify({ id: IdUsuario }),  // Cuerpo de la solicitud, convierte el objeto a JSON
        })
        .then(response => {
            // Verifica si la respuesta fue exitosa (código de estado 2xx)
            if (!response.ok) {
                throw new Error(`Error deleting user: ${response.status}`);
            }
            return response.text(); // Recibe la respuesta como texto
        })
        .then(data => {
            // Verifica si la respuesta es "Exito"
            if (data.trim().toLowerCase() === 'exito') {
                console.log('User deleted successfully');
            } else {
                throw new Error('Error deleting user');
            }
        })
        .catch(error => {
            // Captura y maneja cualquier error ocurrido durante el proceso
            throw error;
        });
    }
*/
/*
    function eliminarUsuarioApi(IdUsuario) {
        const url = 'http://localhost/labor3examen/servidorlabo.php';

        // Utiliza la función fetch para enviar una solicitud DELETE a la API
        return fetch(url, {
            method: 'DELETE',  // Método HTTP DELETE
            headers: {
                'Content-Type': 'application/json',  // Tipo de contenido JSON
            },
            body: JSON.stringify({ id: IdUsuario }),  // Cuerpo de la solicitud, convierte el objeto a JSON
        })
        .then(response => {
            // Verifica si la respuesta fue exitosa (código de estado 2xx)
            if (!response.ok) {
                throw new Error(`Error deleting user: ${response.status}`);
            }
            return response.text(); // Recibe la respuesta como texto
        })
        .then(data => {
            console.log('Response from server:', data); // Log de la respuesta del servidor
            // Verifica si la respuesta es "Exito"
            if (data.trim().toLowerCase() === 'exito') {
                console.log('User deleted successfully');
            } else {
                throw new Error('Error deleting user');
            }
        })
        .catch(error => {
            // Captura y maneja cualquier error ocurrido durante el proceso
            console.error('Error during delete request:', error);
            throw error;
        });
    }
*/

    function eliminarUsuarioApi(IdUsuario) {
        const url = 'http://localhost/labor3examen/servidorlabo.php';

        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: IdUsuario }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error deleting user: ${response.status}`);
            }
            return response.text(); // Receive the response as text
        })
        .then(data => {
            // Check if the response is "Exito"
            if (data.trim().toLowerCase() === 'exito') {
                console.log('User deleted successfully');
            } else {
                throw new Error('Error deleting user');
            }
        })
        .catch(error => {
            console.error(error.message);
            throw error;
        });
    }

    

export { getUsersApi, agregarUsuariosApi, modificarUsuarioApi, eliminarUsuarioApi};