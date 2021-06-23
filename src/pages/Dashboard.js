import { useState, useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { CardPlans } from "../components/CardPlans";
import { supabase } from "../services/supabase";
import { useQuery } from "../utils/useQuery";

export function Dashboard() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState([]);
  const query = useQuery();

  useEffect(() => {
    fetchPlans().catch(console.error);
  }, []);

  const fetchPlans = async () => {
    let { data: plans, error } = await supabase
      .from("plans")
      .select("*")
      .lte("min_score", user?.user_metadata.score);
    if (error) console.log("error", error);
    else setPlans(plans);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="mx-auto bg-gray-100">
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="container mx-auto px-4 bg-white-300 flex-1 p-3 overflow-hidden">
          {query.get("hired") && (
          <div className="bg-green-800 mx-auto text-center px-2 py-10 font-bold text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-8 text-center mx-auto" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Seu plano foi contratado com sucesso!<br/>Em breve você recebera um e-mail com mais detalhes.
          </div>
          )}
            <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 text-center">
              {plans.length ? (
                plans.map((plan) => <CardPlans key={plan.id} plan={plan} />)
              ) : (
                <span className={"h-full flex justify-center items-center"}>
                  Infelizmente não temos uma oferta de crédito para você!
                </span>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
