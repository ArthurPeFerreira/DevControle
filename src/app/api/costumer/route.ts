import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Não Autorizado!" }, { status: 401 });
  }

  const { name, email, phone, address, userId } = await request.json();

  try {
    await prisma.customer.create({
      data: {
        name,
        phone,
        email,
        address: address ? address : "",
        userId,
      },
    });
    return NextResponse.json({ error: "Cliente Cadastrado" });
  } catch (error) {
    return NextResponse.json(
      { error: "Falha ao Criar Cliente!" },
      { status: 400 }
    );
  }
}
