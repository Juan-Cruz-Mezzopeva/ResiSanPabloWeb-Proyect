# ResiSanPabloWeb-Proyect

Proyecto para crear una web para la residencia "Casa San Pablo" que cumplira con los siguientes requerimientos, o por lo menos lo sera en principio, en este primer commit se detallan algunos objetivos generales Iniciales

# Requerimientos para la Web de la Residencia Estudiantil

## I. Requerimientos Funcionales (Lo que la web debe hacer):

### A. Landing Page (Página de Inicio):

* **Información General:**
    * Descripción clara de qué es la residencia estudiantil y su propósito.
    * Misión y valores de la organización (alineados con la iglesia).
    * Beneficios de vivir en la residencia para los estudiantes.
    * Información de contacto (dirección, teléfono, correo electrónico).
    * Imágenes o videos de la residencia para dar una impresión visual.
* **Llamada a la Acción (Call to Action - CTA):**
    * Botones claros para "Postular Ahora" o "Más Información".
    * Enlace a la página de donaciones.

### B. Página de Ex-Alumnos:

* **Visualización de Perfiles:**
    * Mostrar una galería o lista de estudiantes que han pasado por la residencia.
    * Cada perfil debe incluir una foto del ex-alumno.
    * Una breve descripción del ex-alumno (puede incluir su carrera, año de residencia, o un mensaje).
* **Línea de Tiempo:**
    * Los perfiles de los ex-alumnos deben mostrarse en orden cronológico (por ejemplo, por año de egreso).

### C. Página de Postulaciones:

* **Formulario de Postulación:**
    * Campos para la información personal del postulante (nombre completo, fecha de nacimiento, DNI, etc.).
    * Información de contacto (correo electrónico, teléfono).
    * Información académica (carrera que estudia, universidad, año de ingreso).
    * Preguntas específicas relevantes para la postulación (motivos para ingresar, intereses, etc.).
    * Posibilidad de adjuntar documentos (CV, carta de presentación, etc. - opcional).
    * Aceptación de términos y condiciones y política de privacidad.
    * Botón para enviar la postulación.
* **Mensaje de Confirmación:**
    * Mostrar un mensaje al postulante indicando que su postulación ha sido recibida correctamente.

### D. Sección de Administración:

* **Autenticación:**
    * Sistema de login seguro para el administrador (usuario y contraseña).
* **Gestión de Ex-Alumnos:**
    * Formulario para agregar nuevos ex-alumnos (foto, nombre, descripción, año de residencia).
    * Opción para editar la información de ex-alumnos existentes.
    * Opción para eliminar ex-alumnos.
* **Gestión de Postulaciones:**
    * Listado de todas las postulaciones recibidas.
    * Posibilidad de ver los detalles completos de cada postulación.
    * Opciones para marcar postulaciones como "Revisada", "Aceptada", "Rechazada" (opcional).
    * Posibilidad de descargar las postulaciones (opcional).

### E. Página de Donaciones:

* **Información sobre la Donación:**
    * Explicación de por qué son importantes las donaciones y cómo se utilizarán los fondos.
    * Mostrar el impacto de las donaciones en la vida de los estudiantes.
* **Opciones de Donación:**
    * Integración con plataformas de pago seguras (Mercado Pago, PayPal, etc.).
    * Posibilidad de realizar donaciones únicas o recurrentes (opcional).
    * Diferentes montos preestablecidos para donar (opcional).
    * Formulario para ingresar un monto personalizado.
* **Mensaje de Agradecimiento:**
    * Mostrar un mensaje de agradecimiento al donante después de realizar la donación.

## II. Requerimientos No Funcionales (Cómo debe ser la web):

* **Diseño y Experiencia de Usuario (UX/UI):**
    * Diseño atractivo, moderno y profesional.
    * Identidad visual coherente con la imagen de la iglesia y la residencia.
    * Navegación intuitiva y fácil de usar en todos los dispositivos.
    * Diseño responsive (adaptable a diferentes tamaños de pantalla: computadoras, tablets y móviles).
    * Optimización para una buena velocidad de carga.
    * Accesibilidad web (cumplir con estándares para personas con discapacidad - opcional pero recomendable).
* **Rendimiento y Seguridad:**
    * La web debe ser rápida y estable.
    * Implementar medidas de seguridad para proteger la información de los usuarios y del administrador.
    * Certificado SSL para garantizar una conexión segura (HTTPS).
    * Copia de seguridad regular de la base de datos y los archivos del sitio web.
* **SEO (Optimización para Motores de Búsqueda):**
    * Estructura de la web amigable para los motores de búsqueda.
    * Optimización de títulos, descripciones y palabras clave relevantes.
    * Creación de un sitemap.xml y robots.txt.

## III. Requerimientos Técnicos:

* **Plataforma de Desarrollo:**
    * Definir la tecnología a utilizar (ej: WordPress con plugins, desarrollo a medida con PHP/Python/Node.js y una base de datos como MySQL o PostgreSQL).
* **Hosting y Dominio:**
    * Contratar un servicio de hosting confiable.
    * Registrar un nombre de dominio adecuado para la residencia.
* **Base de Datos:**
    * Necesaria para almacenar la información de los ex-alumnos, las postulaciones y posiblemente los datos de donaciones.
* **Integración de Pagos:**
    * Implementar la API de la plataforma de pagos elegida.
* **Seguridad:**
    * Implementar medidas de seguridad a nivel de servidor y de aplicación.
* **Certificado SSL:**
    * Adquirir e instalar un certificado SSL.

## IV. Requerimientos de Contenido:

* **Textos:**
    * Redacción de los textos para todas las páginas (descripción de la residencia, información para postulantes, llamados a la acción, etc.).
    * Textos para las descripciones de los ex-alumnos.
    * Textos persuasivos para la página de donaciones.
* **Imágenes y Videos:**
    * Fotografías de la residencia (exterior, interior, habitaciones, áreas comunes).
    * Logotipo de la organización y/o la iglesia.
    * Fotos de los ex-alumnos.
    * Posiblemente videos promocionales o testimonios (opcional).

## V. Requerimientos de Mantenimiento:

* **Actualizaciones:**
    * Plan para mantener actualizada la plataforma y los plugins (si se usa WordPress).
    * Actualizaciones de seguridad.
* **Soporte Técnico:**
    * Definir quién se encargará del soporte técnico en caso de problemas.

## Próximos Pasos Sugeridos:

1.  **Priorizar los requerimientos:** Decide cuáles son los requerimientos esenciales para el lanzamiento inicial (MVP - Minimum Viable Product) y cuáles pueden implementarse en fases posteriores.
2.  **Definir el presupuesto:** Establece cuánto se puede invertir en el desarrollo y mantenimiento de la web.
3.  **Elegir la plataforma de desarrollo:** Investiga las diferentes opciones (WordPress, desarrollo a medida, etc.) y elige la que mejor se adapte a tus necesidades, presupuesto y conocimientos técnicos (o la disponibilidad de un desarrollador).
4.  **Buscar un profesional o equipo de desarrollo:** Si no tienes los conocimientos técnicos, busca un diseñador y desarrollador web que pueda llevar a cabo el proyecto.
5.  **Crear un plan de proyecto:** Define los plazos y las etapas del desarrollo.
