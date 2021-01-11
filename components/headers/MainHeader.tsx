import { ReactElement, useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes';
import Link from 'next/link';

function MainHeader(): ReactElement {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked: boolean) => {
    const isDarkMode = checked;

    if (isDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <nav className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {mounted && (
                <Link href="/">
                  <img
                    className="block h-8 w-auto cursor-pointer"
                    src={isDarkMode ? 'vercel-white.svg' : 'vercel.svg'}
                    alt="Workflow"
                  />
                </Link>
              )}
            </div>
          </div>
          <div className="ml-6 flex items-center">
            {mounted && <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;
