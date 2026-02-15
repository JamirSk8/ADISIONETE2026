// Diccionario de significados por indicador y valor con interpretación profunda
const significados = {
  ubicacion: {
    centrada: 'El Yo se percibe ubicado en un punto de equilibrio entre las demandas internas y externas (realidad y fantasía), lo que sugiere una estructura yoica organizada y adaptable.',
    izquierda: 'Existe un predominio de la vida interior con posible estancamiento o regresión hacia etapas pasadas, manifestando introversión y dependencia afectiva materna.',
    derecha: 'Revela una clara orientación hacia el entorno, búsqueda de contacto social o proyección futura, aunque puede encubrir impulsividad o necesidad de escape.',
    superior: 'Indica una tendencia hacia la fantasía y la intelectualización como mecanismo defensivo, priorizando el mundo de las ideas sobre la concreción afectiva.',
    inferior: 'Se manifiesta una necesidad de seguridad básica y apoyo externo, revelando sentimientos de arraigo pero también posible depresión o baja autoestima.'
  },
  tamano: {
    pequeno: 'La autopercepción se encuentra disminuida, con tendencia a la inhibición, retraimiento social y ansiedad frente a las exigencias del medio.',
    proporcionado: 'Refleja un adecuado autoconcepto y equilibrio en la relación del sujeto con su entorno, indicando estabilidad emocional.',
    muy_grande: 'Sugiere una compensación defensiva frente a sentimientos de inseguridad, manifestándose como expansión yoica, narcisismo o agresividad latente.'
  },
  presion: {
    fuerte: 'El trazo denota una alta carga energética o tensional, asertividad y, potencialmente, rigidez en el control de impulsos agresivos.',
    debil: 'Se observa una disminución de la energía vital, hipersensibilidad o estados ansiosos-depresivos que afectan la afirmación personal.',
    muy_fuerte: 'Implica una descarga tensional directa con baja tolerancia a la frustración, pudiendo indicar tendencias impulsivas o agresivas.'
  },
  linea: {
    temblorosa: 'Evidencia ansiedad situacional, inseguridad en la toma de decisiones y posible labilidad emocional subyacente.',
    reforzada: 'Señala un mecanismo de defensa obsesivo o ansiedad focalizada, intentando mantener la estructura y el control ante la incertidumbre.',
    recta: 'El sujeto utiliza la racionalización y el control excesivo para contener la afectividad, mostrando rigidez cognitiva.'
  },
  techo: {
    muy_grande: 'Prevalece la actividad mental y la fantasía, utilizando la intelectualización como refugio ante conflictos emocionales directos.',
    muy_pequeno: 'Predominio de lo concreto y pragmático sobre la capacidad de abstracción o fantasía creadora.',
    sin_techo: 'Se interpreta como una carencia en la esfera ideacional o cognitiva, pudiendo reflejar un pensamiento excesivamente concreto.'
  },
  puerta: {
    sin_puerta: 'Indica un bloqueo en la comunicación interpersonal, aislamiento defensivo y dificultad para establecer vínculos.',
    muy_pequena: 'Revela reticencia al contacto social, timidez y selectividad extrema en las relaciones interpersonales.',
    muy_grande: 'Manifiesta una necesidad imperiosa de contacto afectivo y dependencia emocional hacia el entorno.',
    abierta: 'Sugiere una disposición receptiva y apertura al intercambio emocional, aunque puede implicar vulnerabilidad.',
    cerrada_marcada: 'Actitud defensiva consciente frente al medio, preservando la intimidad con celo o desconfianza.'
  },
  ventanas: {
    sin_ventanas: 'Refleja introversión marcada, aislamiento y posible hostilidad pasiva hacia el entorno exterior.',
    con_barrotes: 'Denota defensividad, desconfianza y un control estricto sobre lo que se muestra y se recibe del exterior.',
    excesivas: 'Indica una necesidad ansiosa de interacción y validación externa, con dificultades para filtrar estímulos.'
  },
  chimenea: {
    con_humo: 'Se asocia a tensión interna y conflicto familiar o emocional que busca ser expresado o liberado.',
    sin_humo: 'Puede indicar falta de calidez afectiva en el hogar o inhibición en la expresión de conflictos familiares.'
  },
  base: {
    sin_base: 'Sugiere desarraigo, falta de estabilidad emocional y sensación de "estar en el aire" frente a la realidad.',
    flotante: 'Indica una débil conexión con la realidad concreta, predominando la fantasía o la inestabilidad psíquica.'
  },
  elementos: {
    camino: 'Simboliza la apertura y el control táctico en el acceso a la intimidad personal desde el mundo social.',
    cercas: 'Representa la necesidad de establecer límites defensivos y proteger el espacio personal frente a intrusiones.',
    sol: 'Se interpreta como la presencia de una figura de autoridad (paterna/materna) influyente o el deseo de calidez y afecto.',
    nubes: 'Señal de ansiedad flotante o preocupaciones latentes que ensombrecen el clima emocional actual.'
  },
  impresion: {
    armonico: 'El conjunto gráfico transmite integración de la personalidad, coherencia psíquica y ajuste emocional positivo.',
    torpe: 'Puede reflejar disfunción motriz, ansiedad interferente o bajo nivel de integración de los recursos yoicos.',
    infantil: 'Indica rasgos regresivos, inmadurez emocional y dependencia en la estructura de personalidad.',
    deforme: 'Alerta sobre una posible desorganización interna severa, pérdida del sentido de realidad o patología estructural.'
  },
  conflicto: {
    sombreado: 'Indicador clásico de ansiedad intensa ligada al área sombreada, revelando insatisfacción o culpa.',
    borrados: 'Refleja ambivalencia, autocrítica excesiva, duda obsesiva y deseo de rectificación constante.',
    fragmentacion: 'Signo de alerta sobre la integridad del Yo, sugiriendo disgregación o dificultades serias de síntesis.'
  }
};

// Mostrar significado al seleccionar
function mostrarSignificado(indicador, valor) {
  const sigDiv = document.getElementById('sig_' + indicador);
  if (!valor) { sigDiv.style.display = 'none'; sigDiv.textContent = ''; return; }
  if (Array.isArray(valor)) {
    sigDiv.innerHTML = valor.map(v => significados[indicador][v]).join('<br>');
    sigDiv.style.display = valor.length ? 'block' : 'none';
  } else {
    sigDiv.textContent = significados[indicador][valor] || '';
    sigDiv.style.display = valor ? 'block' : 'none';
  }
}

// Asignar listeners a los inputs
window.addEventListener('DOMContentLoaded', function() {
  [
    'ubicacion','tamano','presion','linea','techo','puerta','ventanas','chimenea','base','impresion'
  ].forEach(indicador => {
    document.querySelectorAll(`input[name='${indicador}']`).forEach(input => {
      input.addEventListener('change', function() {
        // Update visual selection for radio
        // Clear all selected in this group
        document.querySelectorAll(`input[name='${indicador}']`).forEach(r => r.parentElement.classList.remove('selected'));
        if(this.checked) this.parentElement.classList.add('selected');

        mostrarSignificado(indicador, this.value);
      });
    });
  });
  // Elementos agregados y conflicto (checkboxes)
  document.querySelectorAll("input[name='elementos']").forEach(input => {
    input.addEventListener('change', function() {
      // Update visual selection for checkbox
      if(this.checked) this.parentElement.classList.add('selected');
      else this.parentElement.classList.remove('selected');

      const seleccionados = Array.from(document.querySelectorAll("input[name='elementos']:checked")).map(i=>i.value);
      mostrarSignificado('elementos', seleccionados);
    });
  });
  document.querySelectorAll("input[name='conflicto']").forEach(input => {
    input.addEventListener('change', function() {
       // Update visual selection for checkbox
      if(this.checked) this.parentElement.classList.add('selected');
      else this.parentElement.classList.remove('selected');

      const seleccionados = Array.from(document.querySelectorAll("input[name='conflicto']:checked")).map(i=>i.value);
      mostrarSignificado('conflicto', seleccionados);
    });
  });
});

// Interpretación y guardado
function interpretarCasaTest(datos) {
  let items = [];
  
  // Diccionario para mostrar valores de forma legible
  const displayNames = {
    // Ubicación
    centrada: 'Centrada',
    izquierda: 'Izquierda',
    derecha: 'Derecha',
    superior: 'Superior (Alta)',
    inferior: 'Inferior (Baja)',
    // Tamaño
    pequeno: 'Pequeño',
    proporcionado: 'Proporcionado',
    muy_grande: 'Muy grande',
    // Presión
    fuerte: 'Fuerte',
    debil: 'Débil',
    muy_fuerte: 'Muy fuerte',
    // Línea
    temblorosa: 'Temblorosa',
    reforzada: 'Reforzada',
    recta: 'Recta',
    // Techo
    muy_grande: 'Muy grande',
    muy_pequeno: 'Muy pequeño',
    sin_techo: 'Sin techo',
    // Puerta
    sin_puerta: 'Sin puerta',
    muy_pequena: 'Muy pequeña',
    muy_grande: 'Muy grande',
    abierta: 'Abierta',
    cerrada_marcada: 'Cerrada / Marcada',
    // Ventanas
    sin_ventanas: 'Sin ventanas',
    con_barrotes: 'Con barrotes',
    excesivas: 'Excesivas',
    // Chimenea
    con_humo: 'Con humo',
    sin_humo: 'Sin humo',
    // Base
    sin_base: 'Sin base (Línea de suelo)',
    flotante: 'Flotante',
    // Impresión
    armonico: 'Armónico',
    torpe: 'Torpe',
    infantil: 'Infantil',
    deforme: 'Deforme'
  };

  const elementNames = {
      camino: 'Camino',
      cercas: 'Cercas',
      sol: 'Sol',
      nubes: 'Nubes'
  };

  // Helper
  const add = (label, val, dict) => {
    if (!val || !dict[val]) return;

    let specificVal = displayNames[val] || val;
    // Capitalize first letter if valid string and not already mapped
    if (!displayNames[val] && typeof val === 'string') {
        specificVal = val.charAt(0).toUpperCase() + val.slice(1).replace(/_/g, ' ');
    }
    
    items.push(`<b>${label} - ${specificVal}:</b> ${dict[val]}`);
  };

  if(datos.ubicacion) add('Ubicación', datos.ubicacion, significados.ubicacion);
  if(datos.tamano) add('Tamaño', datos.tamano, significados.tamano);
  if(datos.presion) add('Presión', datos.presion, significados.presion);
  if(datos.linea) add('Línea', datos.linea, significados.linea);
  if(datos.techo) add('Techo', datos.techo, significados.techo);
  if(datos.puerta) add('Puerta', datos.puerta, significados.puerta);
  if(datos.ventanas) add('Ventanas', datos.ventanas, significados.ventanas);
  if(datos.chimenea) add('Chimenea', datos.chimenea, significados.chimenea);
  if(datos.base) add('Base', datos.base, significados.base);
  
  // Elementos (array)
  if(datos.elementos && datos.elementos.length) {
    let elems = datos.elementos.map(e => elementNames[e] || e).join(', ');
    let inter = datos.elementos.map(e => significados.elementos[e]).join(' ');
    items.push(`<b>Elementos - ${elems}:</b> ${inter}`);
  }
  
  if(datos.impresion) add('Impresión', datos.impresion, significados.impresion);

  // Indicadores de conflicto
  let nivelConflicto = 'Sin indicadores de conflicto clínicamente relevantes.';
  if(datos.conflicto && datos.conflicto.length) {
    if(datos.conflicto.length === 1) nivelConflicto = 'Conflicto leve.';
    else if(datos.conflicto.length <= 2) nivelConflicto = 'Conflicto moderado.';
    else nivelConflicto = 'Conflicto severo.';
    let inter = datos.conflicto.map(c => significados.conflicto[c]).join(' ');
    items.push(`<b>Conflicto (${nivelConflicto}):</b> ${inter}`);
  } else {
      items.push(`<b>Conflicto:</b> ${nivelConflicto}`);
  }

  // Generate compact list HTML
  let resumen = `<ul class="casa-list">`;
  items.forEach(item => {
      resumen += `<li>${item}</li>`;
  });
  resumen += `</ul>`;
  
  return resumen;
}

// Manejo del formulario
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('casaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Obtener datos
    const datos = {
      ubicacion: document.querySelector("input[name='ubicacion']:checked")?.value,
      tamano: document.querySelector("input[name='tamano']:checked")?.value,
      presion: document.querySelector("input[name='presion']:checked")?.value,
      linea: document.querySelector("input[name='linea']:checked")?.value,
      techo: document.querySelector("input[name='techo']:checked")?.value,
      puerta: document.querySelector("input[name='puerta']:checked")?.value,
      ventanas: document.querySelector("input[name='ventanas']:checked")?.value,
      chimenea: document.querySelector("input[name='chimenea']:checked")?.value,
      base: document.querySelector("input[name='base']:checked")?.value,
      elementos: Array.from(document.querySelectorAll("input[name='elementos']:checked")).map(i=>i.value),
      impresion: document.querySelector("input[name='impresion']:checked")?.value,
      conflicto: Array.from(document.querySelectorAll("input[name='conflicto']:checked")).map(i=>i.value)
    };
    // Interpretar
    const resultado = interpretarCasaTest(datos);
    // Mostrar en pantalla
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('resultado').style.display = 'block';
    // Guardar en localStorage para resultados_integrados.html
    localStorage.setItem('casa_resultados', resultado);
    // Redirigir a resultados_integrados.html (opcional)
    setTimeout(()=>{ window.location.href = 'resultados_integrados.html'; }, 1200);
  });
});
