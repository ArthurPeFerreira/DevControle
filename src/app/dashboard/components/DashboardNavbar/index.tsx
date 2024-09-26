import { Conteiner } from "@/components/conteiner";
import Link from "next/link";

export function DashboardNavbar() {
  return (
    <Conteiner>
      <header className="w-full bg-gray-900 rounded-md gap-2 my-4 p-2 flex items-center">
        <Link
          className="text-white hover:font-bold duration-300"
          href={"/dashboard"}
        >
          Chamados
        </Link>
        <Link
          className="text-white hover:font-bold duration-300"
          href={"/dashboard/customer"}
        >
          Clientes
        </Link>
      </header>
    </Conteiner>
  );
}
