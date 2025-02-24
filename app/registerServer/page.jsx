import { registerUser } from "@/serverActions"
import { PrismaClient } from "@prisma/client"

export default function RegisterServer() {



    return (
        <div>
            <form action={registerUser} className="flex flex-col gap-y-4 max-w-72 mx-auto">
                <input name="nickname" type="text" placeholder="Ввеидите ник" />
                <input name="email" type="text" placeholder="Введите почту" />
                <input name="password" type="text" placeholder="Введите пароль" />
                <button>Регистрация</button>
            </form>
        </div>
    )
}
