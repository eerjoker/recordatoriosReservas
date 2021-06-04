const hoy = new Date()
const maniana = new Date()
maniana.setDate(maniana.getDate() + 1)
const enDosDias = new Date()
enDosDias.setDate(enDosDias.getDate() + 2)
const fechaEnTresDias = new Date()
fechaEnTresDias.setDate(fechaEnTresDias.getDate() + 3)

const reserva1 = { nombre: 'Reserva1', idUsuario: 100, fechaHora: maniana, activa: true } // llega en el mail
const reserva2 = { nombre: 'Reserva2', idUsuario: 101, fechaHora: maniana, activa: true } // llega en el mail
const reserva3 = { nombre: 'Reserva3', idUsuario: 100, fechaHora: enDosDias, activa: true } // llega en el mail
const reserva4 = { nombre: 'Reserva4', idUsuario: 101, fechaHora: enDosDias, activa: true } // llega en el mail
const reserva5 = { nombre: 'Reserva5', idUsuario: 100, fechaHora: hoy, activa: true } // no se envía
const reserva6 = { nombre: 'Reserva6', idUsuario: 101, fechaHora: hoy, activa: true } // no se envía
const reserva7 = { nombre: 'Reserva7', idUsuario: 100, fechaHora: fechaEnTresDias, activa: true } // no se envía
const reserva8 = { nombre: 'Reserva8', idUsuario: 101, fechaHora: fechaEnTresDias, activa: true } // no se envía
const reserva9 = { nombre: 'Reserva9', idUsuario: 100, fechaHora: maniana, activa: false } // no se envía
const reserva10 = { nombre: 'Reserva10', idUsuario: 101, fechaHora: maniana, activa: false } // no se envía
const reservas = [ reserva1, reserva2, reserva3, reserva4, reserva5, reserva6, reserva7, reserva8, reserva9, reserva10 ]

function crearDaoReservas() {
  return {
    getReservasActivas: () => {
      return reservas.filter(r => r.activa === true)
    },
    getReservasActivasProximas(diasLimite) {
      const reservasActivas = this.getReservasActivas()
      const reservasPorUsuario = {}
      const maniana = new Date()
      maniana.setDate(maniana.getDate() + 1)
      const fechaLimite = new Date()
      fechaLimite.setDate(fechaLimite.getDate() + diasLimite)
  
      for(const reserva of reservasActivas) {
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
  }
}

export { crearDaoReservas }