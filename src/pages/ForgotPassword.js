import { useState, useRef } from 'react'
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon'
import { Link } from 'react-router-dom'

function ForgotPassword() {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [linkSent, setLinkSent] = useState(false)
    const emailIdRef = useRef()

    const submitForm = (e) => {
        e.preventDefault()
        setLoading(true)
        setErrorMessage("")

        if (emailIdRef.current.value === "") {
            setErrorMessage("E-Mail Inválido!")
            setLoading(false)
        }
        else {
            setLinkSent(true)
            setLoading(false)
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
                    <h5 className='font-semibold mb-2 mt-2 text-center'>Recuperação De Senha</h5>
                    <form onSubmit={(e) => submitForm(e)}>

                        {
                            !linkSent ? (
                                <div>
                                    <p className='my-4 font-semibold text-center'>Enviaremos Um Link Para Recuperação Da Senha Para o Seu E-Mail</p>
                                    <p className='mb-2 text-error text-center'>{errorMessage}</p>


                                    <div className="mb-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-base-content">Email</span>
                                            </label>
                                            <input type="text" ref={emailIdRef} placeholder="" className="input input-primary input-bordered w-full " />
                                        </div>

                                    </div>
                                    <div className='text-center'>
                                        <Link to="/login"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link>
                                    </div>
                                    <button type="submit" className={"btn mt-4 w-full btn-primary" + (loading ? " loading" : "")}>Enviar LInk</button>
                                </div>
                            ) : (
                                <div className='text-center p-8'>
                                    <CheckCircleIcon className="h-16 w-16  inline-block" />
                                    <p className='my-3 font-semibold text-center'>Acesse Seu E-Mail Para Ter Acesso Ao Link De Recuperação De Senha</p>
                                    <Link to="/login"><button type="submit" className={"btn mt-8 w-full btn-primary"}>Login</button></Link>
                                </div>
                            )
                        }
                        {/* Error Message container if any, after submitting form */}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword