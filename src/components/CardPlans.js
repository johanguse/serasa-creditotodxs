import { Link } from "react-router-dom";

export function CardPlans({ plan }) {
  return (
    <div className="flex flex-col">
      <div className="bg-white shadow-md rounded p-4">
        <div className="font-bold text-xl mb-2">Plano: {plan.name}</div>
        <p className="text-gray-700 text-base mb-2">
          {plan.description}
        </p>
        <p className="mb-2">Valor disponível:{' '}
          {plan.available_amount.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <div className="flex items-center justify-center my-2">
          <Link className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 inline-block mt-4 rounded" to={`/plans/${plan.id}`}>Contratar</Link>
        </div>
      </div>
    </div>
  );
}
