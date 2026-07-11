const ejercicios = {
  brazos: {
    nombre: 'Brazos',
    ejercicios: [
      {
        nombre: 'Curl con Mancuernas',
        descripcion: '3 series de 10-12 repeticiones, concentrando el movimiento en el bíceps.',
        video: 'https://www.youtube.com/embed/ykJmrZ5v0Oo',
        nivel: 'Intermedio',
        image: '',
        pasos: [
          'Colócate con la espalda recta y los codos pegados al torso.',
          'Sube la mancuerna flexionando el codo sin mover el hombro.',
          'Baja controlando el movimiento hasta la extensión completa.'
        ]
      },
      {
        nombre: 'Press de Tríceps en Polea',
        descripcion: '4 series de 8-12 repeticiones, enfocado en la extensión de tríceps.',
        video: 'https://www.youtube.com/embed/2-LAMcpzODU',
        nivel: 'Intermedio',
        image: '',
        pasos: [
          'Coloca las manos en la empuñadura y mantén los codos cerca del cuerpo.',
          'Extiende los brazos hasta bloquear y vuelve despacio a la posición inicial.'
        ]
      },
      {
        nombre: 'Curl Martillo',
        descripcion: '3 series de 10 repeticiones para trabajar braquial y antebrazo.',
        video: 'https://www.youtube.com/embed/zC3nLlEvin4',
        nivel: 'Principiante',
        image: '',
        pasos: [
          'Sujeta las mancuernas con agarre neutro.',
          'Eleva las mancuernas manteniendo las palmas enfrentadas.',
          'Controla la bajada y repite.'
        ]
      },
      {
        nombre: 'Fondos en Paralelas',
        descripcion: '3 series al fallo; excelente para tríceps y pectoral inferior.',
        // Enlace actualizado y funcional
        video: 'https://www.youtube.com/embed/KSzjayT8tz0',
        nivel: 'Avanzado',
        image: '',
        pasos: [
          'Empieza apoyado en las paralelas.',
          'Desciende controlando hasta 90º en codos.',
          'Empuja hasta la extensión completa.'
        ]
      }
    ]
  },
  pecho: {
    nombre: 'Pecho',
    ejercicios: [
      {
        nombre: 'Press de Banca Plano',
        descripcion: '3 series de 8-10 reps. Enfoque en pectoral mayor.',
        video: 'https://www.youtube.com/embed/rT7DgCr-3pg',
        nivel: 'Intermedio',
        image: '',
        pasos: [
          'Acuéstate con la espalda apoyada y los pies en el suelo.',
          'Baja la barra tocando ligeramente el pecho.',
          'Empuja hasta la extensión completa manteniendo control.'
        ]
      },
      {
        nombre: 'Press Inclinado con Mancuernas',
        descripcion: '3 series de 10-12 reps. Enfoque en haz clavicular.',
        video: 'https://www.youtube.com/embed/8iPEnn-ltC8',
        nivel: 'Intermedio',
        image: '',
        pasos: [
          'Inclina el banco entre 30-45º.',
          'Empuja las mancuernas hacia arriba en línea recta.',
          'Baja controlando el movimiento.'
        ]
      },
      {
        nombre: 'Fondos en Paralelas para Pecho',
        descripcion: '3 series al fallo; inclínate ligeramente para enfatizar pecho.',
        // Enlace actualizado y funcional
        video: 'https://www.youtube.com/embed/KSzjayT8tz0',
        nivel: 'Avanzado',
        image: '',
        pasos: ['Inclínate hacia adelante durante el movimiento.', 'Controla el descenso y sube con fuerza.']
      },
      {
        nombre: 'Aperturas con Mancuernas',
        descripcion: '4 series de 12-15 reps para estirar y contraer el pectoral.',
        // Enlace actualizado y funcional
        video: 'https://www.youtube.com/embed/kgt1Ik1yXpk',
        nivel: 'Intermedio',
        image: '',
        pasos: ['Acostado en banco plano.', 'Abre los brazos en arco manteniendo el codo ligeramente flexionado.']
      }
    ]
  },
  espalda: {
    nombre: 'Espalda',
    ejercicios: [
      {
        nombre: 'Dominadas',
        descripcion: '4 series de 6-10 reps. Controla el movimiento.',
        video: 'https://www.youtube.com/embed/npyLB-7o19o',
        nivel: 'Avanzado',
        image: '',
        pasos: ['Agarra la barra con un agarre ancho.', 'Súbete hasta que la barbilla pase la barra.', 'Baja controlando.']
      },
      {
        nombre: 'Remo con Barra',
        descripcion: '3 series de 8-10 reps. Mantén la espalda neutra.',
        video: 'https://www.youtube.com/embed/OXH-ecu-Obw',
        nivel: 'Intermedio',
        image: '',
        pasos: ['Flexiona ligeramente las rodillas.', 'Tira de la barra hacia la línea del abdomen.']
      },
      {
        nombre: 'Jalón al Pecho',
        descripcion: '3 series de 10-12 reps. Excelente para amplitud dorsal.',
        video: 'https://www.youtube.com/embed/x2Y6Mb41zjY',
        nivel: 'Intermedio',
        image: '',
        pasos: ['Siéntate con la espalda recta.', 'Lleva la barra al pecho y controla la subida.']
      },
      {
        nombre: 'Pull-Over',
        descripcion: '3 series de 12 reps. Aísla la parte superior del torso.',
        video: 'https://www.youtube.com/embed/9YQ1YXKko8s',
        nivel: 'Intermedio',
        image: '',
        pasos: ['Acostado en banco.', 'Lleva el peso desde detrás de la cabeza hasta arriba.']
      }
    ]
  },
  pierna: {
    nombre: 'Pierna',
    ejercicios: [
      {
        nombre: 'Sentadilla con Barra',
        descripcion: '4 series de 6-10 reps. Técnica por encima del peso.',
        video: 'https://www.youtube.com/embed/aclHkVaku9U',
        nivel: 'Intermedio',
        image: '',
        pasos: ['Pies a la anchura de hombros.', 'Desciende hasta que los muslos estén paralelos.', 'Sube controlando.']
      },
      {
        nombre: 'Prensa de Pierna',
        descripcion: '3 series de 10-12 reps. Empuja con talones.',
        video: 'https://www.youtube.com/embed/IZxyjW7MPJQ',
        nivel: 'Principiante',
        image: '',
        pasos: ['Coloca los pies en la plataforma.', 'Empuja y controla la bajada.']
      },
      {
        nombre: 'Peso Muerto Rumano',
        descripcion: '3 series de 8-10 reps para femorales.',
        video: 'https://www.youtube.com/embed/2SHsk9AzdjA',
        nivel: 'Intermedio',
        image: '',
        pasos: ['Mantén la espalda recta.', 'Inclina la cadera y baja el peso cerca de las piernas.']
      },
      {
        nombre: 'Zancadas',
        descripcion: '3 series de 12 reps por pierna. Mejora equilibrio y coordinación.',
        video: 'https://www.youtube.com/embed/QOVaHwm-Q6U',
        nivel: 'Principiante',
        image: '',
        pasos: ['Da un paso largo hacia delante.', 'Baja hasta 90º y sube controlando.']
      }
    ]
  }
}

export default ejercicios