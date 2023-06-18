import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';

import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authOpertions from '../../redux/thunk/thunk'
import { errorMessage, responseMessage } from '../../redux/selectors/selectors';
import { setUserData, setUserType } from "../../services/token"


const SignupSchema = yup.object({
    email: yup.string()
        .email("Пожалуйста, введите корректный электронный адрес.")
        .required("Поле 'Email' обязательно к заполнению"),
    username: yup.string()
        .required("Пожалуйста введите свое имя"),
    password: yup.string()
        .required("Поле 'Пароль' обязательно к заполнению")
        .min(6, "Пароль должен содержать не менее 6-ти символов"),
    password_2: yup.string()
        .required('Подтвердите новый пароль')
        .oneOf([yup.ref('password')], 'Пароль и подтверждение пароля должны быть одинаковы!'),
    type: yup.string()
        .required('Пожалуйста введите свою роль')
});

const SignUp = () => {
    const [type, setType] = useState('');
    const [closedModalWindow, setClosedModalWindow] = useState(true)
    const dispatch = useDispatch()
    const router = useNavigate()
    const errorMsg = useSelector(errorMessage)
    const responseSuccessMessage = useSelector(responseMessage)


    const { authRegisterUser, authLoginUser } = authOpertions
    //        setUserData(JSON.stringify(res.data))

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors } }
        = useForm({
            resolver: yupResolver(SignupSchema)
        });
    const onSubmit = async (data) => {
        const transformData = Object.assign(data)
        try {
            await dispatch(authRegisterUser(transformData))
            setUserData(data.username)
            setUserType(data.type)
            // router.push('/')
        } catch (err) {
            console.log(err)
        }
    };
    const handleChangeType = (event) => {
        setType(event.target.value === 1 ? 'User' : 'Service');
    };

    useEffect(() => {
        if (errorMsg) {
            setError("username", {
                type: 'custom',
                message: errorMsg
            })
            setTimeout(() => {
                setError("username", {
                    type: 'custom',
                    message: ''
                })
            }, 2000)
        }
    }, [errorMsg])
    useEffect(() => {
        responseSuccessMessage ? setClosedModalWindow(false) : setClosedModalWindow(true)
    }, [responseSuccessMessage])


    return (
        <div className={styles.modal_content}>
            <div className={closedModalWindow ? styles.signUpForm : styles.notVisibleSignUpForm}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.mainText}>Регистрация</div>
                    <div >
                        <input
                            className={styles.inputAuth}
                            {...register("email")}
                            placeholder="Email *" />
                        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                    </div>
                    <div>
                        <input
                            className={styles.inputAuth}
                            {...register("username")}
                            placeholder="Ваше имя *" />
                        {errors.username && <p style={{ color: "red" }}> {errors.username.message}</p>}
                    </div>
                    <div className={''}>
                        <input
                            className={styles.inputAuth}
                            {...register("password")}
                            placeholder="Пароль *"
                        // type={visibility ? 'text' : 'password'} 
                        />
                        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

                    </div>
                    <div className={''}>
                        <input
                            className={styles.inputAuth}
                            {...register("password_2")}
                            placeholder="Повторите Пароль *"
                        // type={visibility2 ? 'text' : 'password'} 
                        />
                        {errors.password_2 && <p style={{ color: "red" }}>{errors.password_2.message}</p>}

                    </div>
                    <div  className={styles.selectAuthWrap}>
                        <select
                            className={styles.selectAuth}
                            id="selectType"
                            defaultValue="User"
                            name="User"
                            {...register("type")}
                        >
                            <option value="" disabled>Select Type</option>
                            <option value="user">User</option>
                            <option value="service">Service</option>
                        </select>
                    </div>
                    <div className={styles.secondaryTextAuth}>
                        <p>Уже есть аккаунт? <Link to="/sign-in">Войти</Link></p>
                    </div>
                    <button
                        type="submit"
                        className={styles.buttonAuth}
                    >Зарегистрироваться </button>
                    <div className={styles.secondaryTextAuth}>
                        <Link to="/">Отмена</Link>
                    </div>
                </form>


            </div>
            <div className={closedModalWindow ? styles.notVisibleModalWindow : styles.visibleModalWindow}>
                <p>Thanks for registration. Activate your account via link in your email.</p>
                <Link to="/sign-in">Войти</Link>
            </div>
        </div>
    );
};

export default SignUp;
