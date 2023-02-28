import { useContext } from 'react';

import { ThemeContext } from '../components/theme/theme-provider';


const useTheme = () => useContext(ThemeContext)

export default useTheme;
