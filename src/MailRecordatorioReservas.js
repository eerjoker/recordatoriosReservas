function crearMailRecordatorioReservas(usuario, reservas) {
  const mailRecordatorio = {}

  mailRecordatorio.asunto = 'Recordatorio Actividades Próximas ' + new Date().toLocaleDateString()

  mailRecordatorio.contenido = `${ usuario.nombre }, recuerde que las siguientes actividades de su lista se realizarán en los próximos días:\n\n`
  
  for(const reserva of reservas) {
    mailRecordatorio.contenido += `- ${ reserva.nombre }: ${ reserva.fechaHora.toLocaleString() }\n`
  }

  return mailRecordatorio
}

export { crearMailRecordatorioReservas }