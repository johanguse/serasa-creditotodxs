import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { supabase } from "../services/supabase";

export function PlanDetails() {
  const handleId = useParams();

  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    console.log(handleId.planId);
    fetchPlans().catch(console.error);
  }, []);

  const fetchPlans = async () => {
    let { data: plans, error } = await supabase
      .from("plans")
      .select("*")
      .eq('id', handleId.planId);
    if (error) console.log("error", error);
    else setPlans(plans);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
    return canBeSubmitted();
  };

  return (
    <>
      <div className="mx-auto bg-gray-100">
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="container mx-auto px-4 bg-white-300 flex-1 p-3 overflow-hidden">
            <div className="mt-8 text-center">
              <div className="flex flex-col">
                {plans.map((plan) => (

                  <div className="bg-white shadow-md rounded p-4">
                    <div class="font-bold text-xl mb-2">Plano: {plan.name}</div>
                    <p class="text-gray-700 text-base mb-2">
                      {plan.description}
                    </p>
                    <p className="mb-2">Valor disponível:{' '}
                      {plan.available_amount.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                    <div className="text-left my-5 p-5 bg-gray-100">
                      <h3 className="mb-3 font-semibold text-lg">Nossos termos</h3>
                      <p>Nunc tellizzle mammasay mammasa mamma oo sa, pulvinar away, condimentizzle eget, vehicula izzle, diam. Etiam sizzle shiz a sizzle hendrerizzle i saw beyonces tizzles and my pizzle went crizzle. Pellentesque pot magna in erizzle shizzle my nizzle crocodizzle ullamcorpizzle. Pimpin' lobortizzle fermentum mah nizzle. Morbi pizzle. Pizzle quizzle fizzle sheezy crazy iaculizzle for sure. Integizzle sagittizzle viverra urna. Curabitizzle mammasay mammasa mamma oo sa that's the shizzle quizzle purizzle. Morbi venenatizzle fo sizzle amet tellizzle. Yippiyo lobortizzle shizzle my nizzle crocodizzle shizzle my nizzle crocodizzle fizzle. Cizzle uhuh ... yih! natoque izzle izzle crunk bling bling parturient montizzle, gangsta ridiculus mofo.
                        <br /><br />
                        Boom shackalack ac metus sure arcu interdum aliquam. Tellivizzle for sure. Ass shiz ante. Shizzlin dizzle i saw beyonces tizzles and my pizzle went crizzle pede, boofron izzle, condimentizzle mah nizzle, its fo rizzle quizzle, massa. Vestibulizzle yo mamma. Shiz vehicula ultricizzle leo. Funky fresh fo shizzle, orci rizzle yippiyo mammasay mammasa mamma oo sa, enim lacizzle for sure funky fresh, in eleifend dizzle nulla nec metus. Maecenizzle that's the shizzle sollicitudin velit. Fo shizzle things maurizzle, nonummy in, yippiyo doggy, bibendum varizzle, dizzle. In fo shizzle my nizzle, ligula dope pretizzle hendrerizzle, velizzle i saw beyonces tizzles and my pizzle went crizzle posuere nisl, rizzle ghetto justo lorizzle fizzle fo shizzle augue. Yo izzle dope sizzle odio fermentizzle cool. Quisque shiznit tempor nizzle. Nizzle shiznit hendrerit mauris. Boofron vehicula. Crizzle hizzle leo shiznit mi. Etizzle pellentesque. Dawg hizzle dang crunk dictumst. Pot et leo nizzle fo shizzle my nizzle i'm in the shizzle eleifend. Stuff erizzle i'm in the shizzle, pulvinar quis, fringilla fo shizzle my nizzle, consectetuer bling bling, nisl. Morbi vizzle its fo rizzle yippiyo shizznit tempus fringilla.
                        <br /><br />
                        In fo shizzle mah nizzle fo rizzle, mah home g-dizzle ligula nizzle est. Shut the shizzle up own yo'. Etiam tempizzle. Donizzle izzle ghetto we gonna chung check out this imperdiet gizzle. Go to hizzle vel ipsizzle. Doggy iaculis black ass sizzle. Praesent sheezy ipsizzle gangster break it down ullamcorpizzle. Funky fresh nizzle i saw beyonces tizzles and my pizzle went crizzle. Shit lobortis boofron rizzle . Morbi eget justo. Etizzle bling bling dui pot magna elementizzle lobortis. Morbi fizzle, arcu non uhuh ... yih! porta, owned est adipiscing nunc, for sure ornare that's the shizzle dolizzle sizzle gangsta break it down. Morbi crunk. Fo shizzle ass bizzle primis izzle faucibus orci luctus fo shizzle for sure posuere gangster Curae; Vestibulum vehicula, pimpin' laorizzle break yo neck, yall hendrerizzle, risizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle gravida nunc, a fermentum black metus boofron nibh. Mofo pretizzle erat at bow wow wow. Phasellus gangster. Cum phat natoque penatibus et fo shizzle my nizzle own yo' montes, nascetur ridiculizzle mus. Prizzle et massa pizzle quizzle gangster congue. Donec non crazy.
                      </p>
                    </div>
                    <div className="mx-4">
                      <label class="inline-flex items-center mt-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-orange-600" onClick={onCheckboxClick} /><span class="ml-2 underline">Aceito os termos</span>
                      </label>
                    </div>
                    <div class="flex items-center justify-center my-2">
                      {
                        !isDisabled
                          ? <Link className="text-white px-6 py-2 inline-block mt-4 rounded bg-green-500 hover:bg-green-400" to={`/plans/${plan.id}`}>Contratar</Link>
                          : <p className="text-white px-6 py-2 inline-block mt-4 rounded bg-gray-500 cursor-not-allowed">Aceite os termos</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 mb-6 flex-col">
              <Link className="inline-flex items-center bg-gray-100 text-xlborder-0 py-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="ml-1 mr-2">Voltar</span>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
