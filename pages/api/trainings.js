
export default function handler(req, res) {
  res.status(200).json(
    [
      {
          "id":1,
          "title": "Capacitación de Mujeres",
          "img": "/img/training/cap-mujeres.jpg"
      },
      {
          "id":2,
          "title": "Capacitación para Jovenes",
          "img": "/img/training/cap-jovenes.jpg"
      },
      {
          "id":3,
          "title": "Capacitación para Padres",
          "img": "/img/training/imagen1.jpg",
          "training":[
              { "item":"¿Cómo colaborar en el proceso de enseñanza y aprendizaje de mi hijo/a?"},
              { "item":"¿Comunicación asertiva, solución y manejo de conflictos para madres, padres y cuidadores."},
              { "item":"Educar en el esfuerzo y la responsabilidad."},
              { "item":"Hábitos saludables."},
              { "item":"Limites, premios y castigos."},
              { "item":"Prevención  de adicciones."},
              { "item":"Identificación de patrones de conducta suicida."},
              { "item":"La mujer en la sociedad."}
          ]
      },
      {
          "id":4,
          "title": "Capacitación para Profesores",
          "img": "/img/training/cap-profesores.jpg",
          "training":[
              { "item":"Canalización efectiva del estrés en los docentes" },
              { "item":"¿Cómo desarrollar inteligencias múltiple en el área saber?" },
              { "item":"¿Cómo superar el duelo en estudiantes repitentes?" },
              { "item":"¿Cómo prevenir la violencia en el ámbito educativo?" },
              { "item":"Comunicación asertiva con padres, madres y cuidadores" },
              { "item":"Detección, prevención y manejo de las adicciones en los estudiantes." },
              { "item":"Detección de diferentes tipos de abuso en personas menores de edad. ¿Cómo actuar desde los centros educativos?" },
              { "item":"Dinámicas, la mejor técnica de enseñar a aprender." },
              { "item":"El Coaching en el ámbito educativo: Mejoramiento del clima laboral." },
              { "item":"Estrategias para la promoción de la Paz." },
              { "item":"Educación Integral para la sexualidad." },
              { "item":"La inteligencia emocional en la labor del docente." },
              { "item":"Manejo y control del bullying en el ámbito educativo." },
              { "item":"Manejo y control de conductas disruptivas en el ámbito educativo." },
              { "item":"Desarrollo sostenible." }
          ]
      }
    ]
  )
}
