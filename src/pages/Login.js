import axios from 'axios'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const emailIdRef = useRef()
    const passwordRef = useRef()

    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrorMessage("")

        if (emailIdRef.current.value === "" || passwordRef.current.value === "") {
            setErrorMessage("E-Mail Ou Senha Inválidos!")
            setLoading(false)
        }
        else {
            try {
                const { data } = await axios.post('auth/login', { email: 'demo@upkeep.com', password: 'password' })
                localStorage.setItem("token", data.data.token)
                window.location.href = '/app/dashboard'
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-md  shadow-xl">
                <div className="py-12 p-10 bg-base-100 rounded-xl">
                    <div className='flex justify-center	items-center'>
                        <img className="mask mask-circle w-10 mr-2" src="/logo.png" alt="UpKeep Logo" />
                        <h1 className='text-3xl font-semibold mb-2 text-center'>UpKeep</h1>
                    </div>
                    <h5 className='font-semibold mb-2 mt-2 text-center'>Login</h5>
                    <form onSubmit={(e) => submitForm(e)}>

                        {/* Error Message container if any, after submitting form */}
                        <p className='mb-2 text-error text-center'>{errorMessage}</p>


                        <div className="mb-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-base-content">E-Mail</span>
                                </label>
                                <input type="text" ref={emailIdRef} placeholder="demo@upkeep.com" className="input input-primary input-bordered w-full " />
                            </div>

                            <div className="form-control mt-4 w-full">
                                <label className="label">
                                    <span className="label-text text-base-content">Senha</span>
                                </label>
                                <input type="password" ref={passwordRef} placeholder="password" className="input input-primary input-bordered w-full " />
                            </div>
                        </div>

                        <div className='text-center'>
                            <Link to="/register"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Cadastre-se</span></Link>
                        </div>

                        <div className='text-center'>
                            <Link to="/forgot-password"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Esqueceu A Senha?</span></Link>
                        </div>

                        <button type="submit" className={"btn mt-8 w-full btn-primary" + (loading ? " loading" : "")}>Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login