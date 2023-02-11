import { useContext } from 'react';

import { AuthContext } from '../components/auth/auth-provider';

const useAuth = () => useContext(AuthContext)

export default useAuth;
