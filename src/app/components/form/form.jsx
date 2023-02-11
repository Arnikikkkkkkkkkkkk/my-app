import React from 'react';

import Input from '../../UI/input/input';
import FormLogo from '../../UI/logo/form-logo';

import styles from './form.module.scss';

const Form = (
  {
    dataInput, 
    signUp, 
    logIn, 
    goLogIn, 
    onSubmit, 
    valid, 
    autocomplete,
    errorMassage,
  }) => (
    <form onSubmit={onSubmit} className={styles.form} action="/" method="POST" autoComplete={autocomplete} noValidate>
      <FormLogo className={styles.logo}/>
      <div className={styles.items}>
        {dataInput.map((input) => (
          <div key={input.id} className={styles.item}>
            <Input  
              classInput={`${styles.input} js-input`}
              invalid={styles.invalid}
              type={input.type} 
              placeholder={input.placeholder}
              name={input.name}
              value={input.value}
              dirty={input.dirty}
              onBlur={input.onBlur}
              onChange={input.onChange}
              autocomplete={input.autocomplete}
              required={input.required}/>
            {(input.dirty && input.massage) && <div className={`${styles.error} ${styles.input_position}`}>{input.massage}</div>}  
          </div> 
        ))}
      </div>
      <div className={styles.controller}>
        {logIn === 'logIn' && 
          <>
            <button className={`${styles.button} ${styles.submit}`} disabled={!valid} type='submit'>Войти</button>
            <button className={styles.button} type='button' onClick={goLogIn}>Зарегистрироваться</button>
          </>
      }
        {signUp === 'signUp' && <button className={`${styles.button} ${styles.submit}`} disabled={!valid} type='submit'>Зарегистрироваться</button>}
      </div>
      {errorMassage && <div className={`${styles.error} ${styles.form_position}`}>{errorMassage}</div>}
    </form>
)

export default Form;
