import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/form/form'
import useAuth from '../../hook/useAuth';

const SignUp = () => {
  const navigate = useNavigate('')
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState('');

  const { createUser } = useAuth();

  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [matchPasswordDirty, setMatchPasswordDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const [errorMassageLogin, setErrorMassageLogin] = useState('Логин не может быть пустым!');
  const [errorMassagePassword, setErrorMassagePassword] = useState('Пароль не может быть пустым!');
  const [errorMassageMatchPassword, setErrorMassageMatchPassword] = useState('Повтор не может быть пустым!');

  useEffect(() => {
    if(errorMassageLogin || errorMassagePassword|| errorMassageMatchPassword) {
      setFormValid(false)
    } else {
      setFormValid(true);
    }
  }, [errorMassageLogin, errorMassagePassword, errorMassageMatchPassword])

  const handlerLogin = (event) => {
    const {target} = event;
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

  const handlerMatchPassword = (event) => {
    const {target} = event;
    setMatchPassword(target.value)

    if(target.value.length < 7) {
      setMatchPasswordDirty(true);
      setErrorMassageMatchPassword('Повтор не может быть меньше 7 символов!');
      if(!target.value) {
        setErrorMassageMatchPassword('Повтор не может быть пустым!')
      }
    } else if (target.value !== password) {
      setMatchPasswordDirty(true);
      setErrorMassageMatchPassword('Пароли не совпадают!')
    } else {
      setMatchPasswordDirty(false);
      setErrorMassageMatchPassword('');
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
      case 'matchPassword': 
        setMatchPasswordDirty(true);
        if(target.value.length >= 7) {
          setMatchPasswordDirty(false);
          break
        }
        break;
      default: 
        break   
    }
  }

  const handlerFormValid = (event) => {
    event.preventDefault();

    const {target} = event;

    const newUser = {
      login: target.login.value,
      password: target.password.value,
    }

    createUser(newUser, () => {
      navigate('/mini-spotyfi/')
    })
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
    {
      id: 3,
      placeholder: 'Повторите пароль',
      type: 'password',
      name: 'matchPassword',
      required: true,
      value: matchPassword,
      dirty: matchPasswordDirty,
      onChange: handlerMatchPassword,
      onBlur: blurHandler,
      autocomplete: 'off',
      massage: errorMassageMatchPassword,
    },
  ]

  return (
    <Form 
      dataInput={dataInput} 
      signUp='signUp' 
      onSubmit={handlerFormValid} 
      valid={formValid}  
      autocomplete='off'/>
  )
}

export default SignUp;
