'use server'

import { PrismaClient } from "@prisma/client"

export async function registerUser(formData) {
    const prisma = new PrismaClient()

    const resp = await prisma.users.create({
        data: {
            username: formData.get('nickname'),
            email: formData.get('email'),
            password: formData.get('password')
        }
    })
}