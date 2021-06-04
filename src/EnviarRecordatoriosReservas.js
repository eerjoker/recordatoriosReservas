import { crearMailRecordatorioReservas } from './MailRecordatorioReservas.js'

function crearCUEnviarRecordatorios (mailer) {

  async function enviarMailsPorUsuario(reservasPorUsuario, daoUsuarios) {
    const mails = []
    for(const idUsuario in reservasPorUsuario) {
      const usuario = daoUsuarios.getById(Number(idUsuario))
      if(usuario) {
        const mail = crearMailRecordatorioReservas(usuario, reservasPorUsuario[idUsuario])
        mails.push(mail)
      }
    }
    await mailer.enviarVariosConTexto(mails)
  }

  return {
    async ejecutar(diasAContemplar, daoReservas, daoUsuarios) {
      
      const reservasProximas = await daoReservas.getReservasActivasProximas(diasAContemplar)

      enviarMailsPorUsuario(reservasProximas, daoUsuarios)
    }
  }
}

export { crearCUEnviarRecordatorios }