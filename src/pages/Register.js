import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const emailIdRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const nameRef = useRef()

    const submitForm = (e) => {
        e.preventDefault()
        setLoading(true)
        setErrorMessage("")

        if (emailIdRef.current.value === "" || passwordRef.current.value === "" || nameRef.current.value === "") {
            setErrorMessage("E-Mail Ou Senha Inválidos!")
            setLoading(false)
        }

        if (passwordRef.current.value != confirmPasswordRef.current.value) {
            setErrorMessage("Confirmação De Senha Inválida!")
            setLoading(false)
        }

        else {
            // Call API to check user credentials and save token in localstorage
            localStorage.setItem("token", "DumyTokenHere")
            setLoading(false)
            window.location.href = '/app/dashboard'
        }
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-md  shadow-xl">
                <div className="py-12 p-10 bg-base-100 rounded-xl">
                    <div className='flex justify-center	items-center'>
                        <img className="mask mask-circle w-10 mr-2" src="/logo.png" alt="UpKeep Logo" />
                        <h1 className='text-3xl font-semibold mb-2 text-center'>UpKeep</h1>
                    </div>
                    <h5 className='font-semibold mb-2 mt-2 text-center'>Cadastro</h5>
                    <form onSubmit={(e) => submitForm(e)}>

                        {/* Error Message container if any, after submitting form */}
                        <p className='mb-2 text-error text-center'>{errorMessage}</p>


                        <div className="mb-4">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-base-content">Nome Completo</span>
                                </label>
                                <input type="text" ref={nameRef} placeholder="Nome Completo" className="input input-primary input-bordered w-full " />
                            </div>

                            <div className="form-control mt-4 w-full">
                                <label className="label">
                                    <span className="label-text text-base-content">E-Mail</span>
                                </label>
                                <input type="text" ref={emailIdRef} placeholder="" className="input input-primary input-bordered w-full " />
                            </div>

                            <div className="form-control mt-4 w-full">
                                <label className="label">
                                    <span className="label-text text-base-content">Senha</span>
                                </label>
                                <input type="password" ref={passwordRef} placeholder="" className="input input-primary input-bordered w-full " />
                            </div>

                            <div className="form-control mt-4 w-full">
                                <label className="label">
                                    <span className="label-text text-base-content">Conformação De Senha</span>
                                </label>
                                <input type="password" ref={confirmPasswordRef} placeholder="" className="input input-primary input-bordered w-full " />
                            </div>

                        </div>

                        <div className='text-center'>
                            <Link to="/login"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link>
                        </div>
                        <div className='text-center'>
                            <Link to="/forgot-password"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Esqueceu A Senha?</span></Link>
                        </div>

                        <button type="submit" className={"btn mt-8 w-full btn-primary" + (loading ? " loading" : "")}>Cadastar-se</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register