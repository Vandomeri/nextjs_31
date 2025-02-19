import { PrismaClient } from "@prisma/client"

export async function POST(request) {
    const formData = await request.formData()
    console.log(formData.get('username'))
    const prisma = new PrismaClient()

    const resp = await prisma.users.create({
        data: {
            username: formData.get('nickname'),
            email: formData.get('email'),
            password: formData.get('password')
        }
    })

    return Response.json(resp)
}   