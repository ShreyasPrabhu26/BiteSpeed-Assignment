import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    'https://qxsheqxqkwsbmdvhsiky.supabase.co',
    process.env.CONNECTION_STRING
)

module.exports = supabase;