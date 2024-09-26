import { Conteiner } from "@/components/conteiner";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Clients } from "./components/clientsCard";

export default async function Costumer() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <Conteiner>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Clientes</h1>
          <Link
            href="/dashboard/customer/new"
            className="bg-blue-500 px-4 py-1 rounded text-white"
          >
            Novo Cliente
          </Link>
        </div>
        <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <Clients />
          <Clients />
          <Clients />
          <Clients />
        </section>
      </main>
    </Conteiner>
  );
}
