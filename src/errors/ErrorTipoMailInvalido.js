import { crearErrorDatosInvalidos } from "./ErrorDatosInvalidos.js"

function crearErrorTipoMailInvalido() {
  const error = crearErrorDatosInvalidos('El tipo de mail indicado no es válido.')
  return error
}

export { crearErrorTipoMailInvalido }