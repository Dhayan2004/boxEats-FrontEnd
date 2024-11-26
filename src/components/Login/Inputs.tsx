import React, { useState } from 'react';
import './Login.css';
import { LockClosedIcon, UserIcon } from '@heroicons/react/16/solid';

function LoginInputs() {
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFocus = (inputName: string) => {
        setFocusedInput(inputName);
    };

    const handleBlur = (inputName: string) => {
        if (inputName === 'username' && username === '') {
            setFocusedInput(null);
        }
        if (inputName === 'password' && password === '') {
            setFocusedInput(null);
        }
    };

    return (
        <div className="login-form">
            <h2>Iniciar sesión</h2>
            <div className="divider"></div>
            <form>
                <div
                    className={`input-group ${focusedInput === 'username' || username ? 'focused' : ''}`}
                    onClick={() => handleFocus('username')}
                >
                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        id="username"
                        placeholder=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={() => handleFocus('username')}
                        onBlur={() => handleBlur('username')}
                    />
                    <UserIcon className="h-5 w-5 text-gray-500 icon" />
                </div>

                <div
                    className={`input-group ${focusedInput === 'password' || password ? 'focused' : ''}`}
                    onClick={() => handleFocus('password')}
                >
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => handleFocus('password')}
                        onBlur={() => handleBlur('password')}
                    />
                    <LockClosedIcon className="h-5 w-5 text-gray-500 icon" />
                </div>

                <button className="login-button">Iniciar sesión</button>

                <button className="google-button">
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google Logo"
                        className="google-icon"
                    />
                    Conectarse con Google
                </button>
            </form>

            <p className="signup-text">
                No tienes cuenta? <a href="/signup" className="signup-link">Registrarse</a>
            </p>
        </div>
    );
}

export default LoginInputs;
