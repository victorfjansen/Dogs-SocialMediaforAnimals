import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../Api'
import Erro from '../Helper/Erro'
import Head from '../Helper/Head'

const LoginPasswordLost = () => {
  const login = useForm()
  const { data, loading, error, request } = useFetch()
  async function handleSubmit(event) {
    event.preventDefault()
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      })
      await request(url, options)
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu sua senha" />

      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />

          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
          {error && <Erro error={error} />}
        </form>
      )}
    </section>
  )
}

export default LoginPasswordLost
