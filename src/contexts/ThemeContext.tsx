import { createContext, useState } from 'react';

interface ThemeContextProps {
    isDark: boolean;
    setIsDark: (newStatus: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function ThemeContextProvider({ children }: any) {
    const [isDark, setIsDark] = useState<boolean>(true);

    return (
        <ThemeContext.Provider
            value={{
                isDark: isDark,
                setIsDark: setIsDark,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
