Api de gestión de estudiantes

# Hola! Bienvenido a la api de Gestion de Alumnos

## Descripción
Aquí vas a poder organizar la información de los estudiantes!
### Los datos serán:
| Campo     | Tipo    | Descripción                     |
|-----------|---------|---------------------------------|
| nombre    | String  | Nombre del estudiante           |
| apellido  | String  | Apellido del estudiante         |
| email     | String  | Email único y válido            |
| cursos    | Array   | Lista de cursos predefinidos    |

---
## Funcionalidad
- **CRUD de estudiantes**: Crear, leer, actualizar y eliminar estudiantes.

- **Filtro por curso**: Consultar estudiantes inscritos en un curso específico mediante parámetros de consulta.

- **Validaciones**:
  - Los cursos deben ser uno de los siguientes: Matemática, Historia, Ciencias, Arte.
  - El email del estudiante debe ser único y válido.
---
## Tecnologias utilizadas:
- **Backend**: Node.js, Express.js.
- **Base de Datos**: MongoDB con Mongoose.
---
## Cómo instalar y usar
```bash 
git clone https://github.com/CamilaAparicio/TrabajoFinalAPI_Estudiantes_CA.git
```
---
## Estructura del proyecto

```plaintext
PROYECTOFINALAPI
|--config/              #configuración de la base de datos
|     |-db.js           
|--models/              #modelos de MongoDB
|     |-Estudiante.js
|--routes/
|     |-estudiantes.js
|--.env                  # variables de entorno
|--app.js
|--package.json
|--vercel.json           #Conexión con Vercel
```
---
## Endpoints:
|  Método   |     Endpoint    |         Descripción             |
|-----------|-----------------|---------------------------------|
|   GET     |/estudiantes     |Obtiene todos los datos de los estudiantes, con un filtro opcional por curso                                              |
|   GET     |/estudiantes/:id | Obtiene los estudiantes por id  |
|   POST    |/estudiantes     | Crea un nuevo estudiante        |
|    PUT    |/estudiantes/:id | Actualiza un estudiante por id  |
|  DELETE   |/estudiantes/:id | Elimina un estudiante por id    |

---
## Créditos:
Este proyecto fue desarrollado por:
Aparicio, Camila Antonella
https://github.com/CamilaAparicio

