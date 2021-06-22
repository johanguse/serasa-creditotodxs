import { useState, useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { CardPlans } from "../components/CardPlans";
import { supabase } from "../services/supabase";

export function Dashboard() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState([]);

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
      <div className="mx-auto bg-grey-400">
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="container mx-auto px-4 bg-white-300 flex-1 p-3 overflow-hidden">
            <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
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
