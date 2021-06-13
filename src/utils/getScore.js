import { supabase } from '../supabase'

export const fetchUserScore = async (session) => {
  const { data, error } = await supabase
    .from('profiles')
    .select(`score`)
    .eq('id', session.user.id)
    .single();
  
    if (error) {
      console.log(error.message);
      throw error;
    }
  
    return data || [];
};
