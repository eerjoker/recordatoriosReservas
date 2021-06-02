import { crearErrorTipoMailInvalido } from './errors/ErrorTipoMailInvalido.js'
import TiposMail from "./EnumTiposMail.js";

function getCredencialesMail(tipo) {
  const credenciales = {}

  switch(tipo) {
    case TiposMail.SOCIOS:
      credenciales.mail = 'clubortemail@gmail.com'
      credenciales.password = 'wmhxyrhimevxswoz'
      break;
    default:
      throw crearErrorTipoMailInvalido()
  }

  return credenciales
}

export { getCredencialesMail }