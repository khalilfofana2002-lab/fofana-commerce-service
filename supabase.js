import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://ixetvhbkhboxfjlykclo.supabase.co";
const SUPABASE_KEY = "sb_publishable_c0KiidatgOYE_0wFk3hy2Q_sWRSsxHZ";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);