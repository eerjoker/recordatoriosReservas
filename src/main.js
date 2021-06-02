import { crearEnviadorDeMails } from './modulos/crearEnviadorDeMails.js'
import { crearCUEnviarRecordatorios } from './EnviarRecordatoriosReservas.js'
import { crearDaoReservas } from './persistencia/DaoReservas.js'
import { crearDaoUsuarios } from './persistencia/DaoUsuarios.js'
import { getCredencialesMail } from './CredencialesMail.js'
import TiposMail from './EnumTiposMail.js'

const credencialesMail = getCredencialesMail(TiposMail.SOCIOS)

const enviadorMails = crearEnviadorDeMails(credencialesMail.mail, credencialesMail.password)

const CU = crearCUEnviarRecordatorios(enviadorMails)

const daoReservas = crearDaoReservas()

const daoUsuarios = crearDaoUsuarios()

CU.ejecutar(2, daoReservas, daoUsuarios)

