export function Clients() {
  return (
    <div className="border border-gray-500 rounded-lg bg-slate-100 p-2 flex flex-col items-start gap-2 shadow-md">
      <p className="">
        <span className="font-bold">Nome:</span> Lucas
      </p>
      <p>
        <span className="font-bold">Email:</span> lucas@teste.com
      </p>
      <p>
        <span className="font-bold">Telefone:</span> 45-999101910
      </p>
      <button className="bg-red-500 text-white rounded px-2">Deletar</button>
    </div>
  );
}
