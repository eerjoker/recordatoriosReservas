const usuario1 = { id: 100, nombre: 'Usuario1', mail: '@mail.com'}
const usuario2 = { id: 101, nombre: 'Usuario2', mail: '@mail.com'}
const usuarios = [ usuario1, usuario2 ]

function crearDaoUsuarios() {
  return {
    getById: (id) => {
      return usuarios.filter(u => u.id === id)[0]
    }
  }
}

export { crearDaoUsuarios }