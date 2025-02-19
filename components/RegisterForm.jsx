'use client'

import { useState } from "react"

export default function RegisterForm() {

    const [status, setStatus] = useState(false)


    async function registerUser(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await fetch('/api/registerUser', {
            method: 'POST',
            body: formData
        })

        if (resp.ok) {
            setStatus(true)
        }
    }

    return (
        <div>
            <form className="flex flex-col gap-y-4 max-w-72 mx-auto" onSubmit={(e) => registerUser(e)}>
                <input name="nickname" type="text" placeholder="Ввеидите ник" />
                <input name="email" type="text" placeholder="Введите почту" />
                <input name="password" type="text" placeholder="Введите пароль" />
                <button>Регистрация</button>
            </form>
            {
                status && (<p>Успешно</p>)
            }
        </div>


    )
}
