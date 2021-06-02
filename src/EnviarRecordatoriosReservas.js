import { crearMailRecordatorioReservas } from './MailRecordatorioReservas.js'

function crearCUEnviarRecordatorios (mailer) {

  function obtenerReservasProximas(reservas, diasLimite) {
    const reservasPorUsuario = {}
    const maniana = new Date()
    maniana.setDate(maniana.getDate() + 1)
    const fechaLimite = new Date()
    fechaLimite.setDate(fechaLimite.getDate() + diasLimite)

    for(const reserva of reservas) {
      if(reserva.fechaHora.getDate() <= fechaLimite.getDate()
        && reserva.fechaHora.getMonth() <= fechaLimite.getMonth()
        && reserva.fechaHora.getFullYear() <= fechaLimite.getFullYear()
        && reserva.fechaHora.getDate() >= maniana.getDate()
        && reserva.fechaHora.getMonth() >= maniana.getMonth()
        && reserva.fechaHora.getFullYear() >= maniana.getFullYear()
      ) {
        if(Array.isArray(reservasPorUsuario[reserva.idUsuario])) {
          reservasPorUsuario[reserva.idUsuario].push(reserva)
        } else {
          reservasPorUsuario[reserva.idUsuario] = [reserva]
        }
      }
    }
    return reservasPorUsuario
  }

  async function enviarMailPorUsuario(reservasPorUsuario, daoUsuarios) {
    for(const idUsuario in reservasPorUsuario) {
      const usuario = daoUsuarios.getById(Number(idUsuario))
      if(usuario) {
        const mail = crearMailRecordatorioReservas(usuario, reservasPorUsuario[idUsuario])
        await mailer.enviarConTexto(usuario.mail, mail.asunto, mail.contenido)
      }
    }
  }

  return {
    ejecutar(diasAContemplar, daoReservas, daoUsuarios) {
      
      const reservas = daoReservas.getReservasActivas()

      const reservasProximas = obtenerReservasProximas(reservas, diasAContemplar)

      enviarMailPorUsuario(reservasProximas, daoUsuarios)
    }
  }
}

export { crearCUEnviarRecordatorios }