import Image from "next/image";
import heroImg from "@/assets/hero.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100dvh-80px)]">
      <h2 className="font-medium text-2xl mb-2">Gerencie sua empresa</h2>
      <h1 className="font-bold text-3xl mb-8 text-blue-600 md:text-4xl">
        Atendimentos, Clientes
      </h1>
      <Link href={"/websocket"}>
        <Image
          src={heroImg}
          alt="Imagem hero do dev controle"
          priority={true}
          quality={100}
          width={600}
          className="max-w-sm md:max-w-xl"
        />
      </Link>
    </main>
  );
}
