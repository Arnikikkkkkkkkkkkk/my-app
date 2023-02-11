import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/form/form'
import useAuth from '../../hook/useAuth';

const LogIn = () => {
  const navigate = useNavigate('');

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { user, setAuth } = useAuth();

  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const [errorMassageLogin, setErrorMassageLogin] = useState('Логин не может быть пустым!');
  const [errorMassagePassword, setErrorMassagePassword] = useState('Пароль не может быть пустым!');
  const [errorMassageValidForm, setErrorMassageValidFrom] = useState(null)

  useEffect(() => {
    if(errorMassageLogin || errorMassageLogin) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [errorMassageLogin, errorMassagePassword])

  const handlerLogin = (event) => {
    const {target} = event
    setLogin(target.value)

    if(target.value.length <= 3) {
      setLoginDirty(true);
      setErrorMassageLogin('Логин не может быть меньше 3 символов!')
      if (!target.value) {
        setErrorMassageLogin('Логин не может быть пустым!');
      }
    } else {
      setLoginDirty(false);
      setErrorMassageLogin('')
    }
  };

  const handlerPassword = (event) => {
    const {target} = event;
    setPassword(target.value);

    if(target.value.length < 7) {
      setPasswordDirty(true);
      setErrorMassagePassword('Пароль не может быть меньше 7 символов!')
      if(!target.value) {
        setErrorMassagePassword('Пароль не может быть пустым!')
      }
    } else {
      setPasswordDirty(false);
      setErrorMassagePassword('');
    }
  }

  const handlerTransitSignUp = () => {
    navigate('/mini-spotyfi/signup')
  }

  const handlerOnSubmitForm = (event) => {
    event.preventDefault()

    const {target} = event;

    const authUser = {
      login: target.login.value,
      password: target.password.value,
    }

    if(user === null || (authUser.login !== user.login) && (authUser.password !== user.password)){
      setErrorMassageValidFrom('Пользователя не существует! Попробуйте еще раз или зарегистрируйтесь!')
    } else if ((authUser.login === user.login) && (authUser.password !== user.password)) {
      setErrorMassageValidFrom('Ошибка в пароле! Попробуйте еще раз!')
    } else if ((authUser.login !== user.login) && (authUser.password === user.password)) {
      setErrorMassageValidFrom('Ошибка в логине! Попробуйте еще раз!')
    } else {
      setAuth(true)
      setErrorMassageValidFrom(null);
      navigate(`/mini-spotyfi/${user.login}/player/`);
    }
  }

  const blurHandler = (event) => {
    const {target} = event
    switch(target.name) {
      case 'login': 
        setLoginDirty(true);
        if(target.value.length >= 3) {
          setLoginDirty(false);
          break
        }
        break;
      case 'password':
        setPasswordDirty(true);
        if(target.value.length >= 7) {
          setPasswordDirty(false);
          break
        }
        break;
      default: 
        break   
    }
  }

  const dataInput = [
    {
      id: 1,
      placeholder: 'Логин',
      type: 'text',
      name: 'login',
      required: true,
      value: login,
      dirty: loginDirty,
      onChange: handlerLogin,
      onBlur: blurHandler,
      autocomplete: 'off',
      massage: errorMassageLogin, 
    }, 
    {
      id: 2,
      placeholder: 'Пароль',
      type: 'password',
      name: 'password',
      required: true,
      value: password,
      dirty: passwordDirty,
      onChange: handlerPassword,
      onBlur: blurHandler,
      autocomplete: 'off',
      massage: errorMassagePassword,
    },
  ]

  return (
    <Form 
      dataInput={dataInput} 
      logIn='logIn' 
      goLogIn={handlerTransitSignUp} 
      onSubmit={handlerOnSubmitForm} 
      valid={formValid} autocomplete='off'
      errorMassage={errorMassageValidForm}/>
  )
} 

export default LogIn;
