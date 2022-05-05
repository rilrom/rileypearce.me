// Dependencies
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

// Components
import { SunIcon, MoonIcon } from './Icons';

const ThemeSwitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Switch
      checked={isDark}
      size="md"
      iconOn={<SunIcon filled />}
      iconOff={<MoonIcon filled />}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  );
}

export default ThemeSwitch;