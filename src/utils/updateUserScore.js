import { supabase } from "../services/supabase";

export const updateUserScore = async (user) => {
  const randomScoreArray = [
    "120",
    "230",
    "450",
    "600",
    "780",
    "900",
    "550",
    "930",
    "350",
    "620",
    "680",
    "710",
  ];

  const randomScore = randomScoreArray[Math.floor(Math.random() * randomScoreArray.length)];
  await supabase.auth.update({
    data: { score: randomScore }
  })
};
