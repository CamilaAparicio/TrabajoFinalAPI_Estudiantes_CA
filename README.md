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
## Ejemplo de uso:
```bash
{
    "_id": "68f121910f5544bba417c307",
    "nombre": "Camila",
    "apellido": "Aparicio",
    "email": "camila@oldmail.com",
    "cursos": [
      "Matemática",
      "Arte"
    ],
    "createdAt": "2025-10-16T16:47:13.998Z",
    "updatedAt": "2025-10-16T16:47:13.998Z",
    "__v": 0
  },
  {
    "_id": "68f125550f5544bba417c30d",
    "nombre": "Eduardo",
    "apellido": "Rodriguez",
    "email": "edurodriguez@example.com",
    "cursos": [
      "Ciencias",
      "Arte"
    ],
    "createdAt": "2025-10-16T17:03:17.018Z",
    "updatedAt": "2025-10-16T17:03:17.018Z",
    "__v": 0
  },
  {
    "_id": "68f125fd0f5544bba417c30f",
    "nombre": "Jessica",
    "apellido": "Salvatore",
    "email": "jessalvatore@duckmail.com",
    "cursos": [
      "Historia",
      "Ciencias"
    ],
    "createdAt": "2025-10-16T17:06:05.126Z",
    "updatedAt": "2025-10-16T17:06:05.126Z",
    "__v": 0
  }
]
```

---
## Créditos:
Este proyecto fue desarrollado por:
Aparicio, Camila Antonella
https://github.com/CamilaAparicio

