function crearMailRecordatorioReservas(usuario, reservas) {
  const mailRecordatorio = {}

  mailRecordatorio.to = usuario.mail

  mailRecordatorio.subject = 'Recordatorio Actividades Próximas ' + new Date().toLocaleDateString()

  mailRecordatorio.text = `${ usuario.nombre }, recuerde que las siguientes actividades de su lista se realizarán en los próximos días:\n\n`
  
  for(const reserva of reservas) {
    mailRecordatorio.text += `- ${ reserva.nombre }: ${ reserva.fechaHora.toLocaleString() }\n`
  }

  return mailRecordatorio
}

export { crearMailRecordatorioReservas }