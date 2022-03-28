const user = [
  {
    _id: '1qw',
    login: 'steve.jobs@example.com',
    password: 'password',
  },
]

if (!localStorage.getItem('user')) {
  localStorage.setItem('user', JSON.stringify(user))
}

const getByLogin = (login, password) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem('user')).find(
          (user) => user.login === login,
        ),
        JSON.parse(localStorage.getItem('user')).find(
          (user) => user.password === password,
        ),
      )
    }, 2000)
  })

export default {
  getByLogin,
}
