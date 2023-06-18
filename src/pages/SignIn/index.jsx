import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import authLoginOperations from '../../redux/thunk/thunk'
import { errorMessage } from '../../redux/selectors/selectors';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getUserData } from '../../services/token';
import { useNavigate } from 'react-router-dom';


const SignupSchema = yup.object({
    username: yup.string()
        .required("Заполните поле"),
    password: yup.string()
        .required("Поле 'Пароль' обязательно к заполнению")
});


const SignInPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const errorMsg = useSelector(errorMessage)
    const [userName, setUserName] = useState('')
    // const [visibility, setVisibility] = useState(false);
    const { authLoginUser } = authLoginOperations
    // const handleVisibility = () => {
    //     setVisibility(!visibility)
    // }
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors } }
        = useForm({
            resolver: yupResolver(SignupSchema)
        });
    const onSubmit = async (data) => {
        try {
            await dispatch(authLoginUser(data))
            navigate("/")

        } catch (e) {
            console.log(e)
        }

    };
    useEffect(() => {
        setUserName(getUserData())
    }, [])

    useEffect(() => {
        if (errorMsg) {
            setError("password", {
                type: 'custom',
                message: errorMsg
            })
            setTimeout(() => {
                setError("password", {
                    type: 'custom',
                    message: ''
                })
            }, 2000)
        }
    }, [errorMsg])
    return (
        <div>
            <div className={styles.modal_content}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.mainText}>Вход </div>
                    <div>
                        <input
                            className={styles.inputAuth}
                            {...register("username")}
                            placeholder="Логин"
                            // value={`${userName}` || ''}
                        />
                        {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
                    </div>

                    <div className={''}>
                        <input
                            className={styles.inputAuth}
                            {...register("password")}
                            placeholder="Пароль"
                            type={'text'} />
                        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

                    </div>
                    <div className={styles.secondaryTextAuth}>
                        <p>
                            Еще не зарегистрированы?
                        </p>
                        <p>
                            <Link to='/sign-up'>Создать аккаунт</Link>
                        </p>
                    </div>


                    <button
                        type="submit"
                        className={styles.buttonAuth}
                    >Войти</button>
                    <div className={styles.secondaryTextAuth}>
                        <Link to="/">Отмена</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;