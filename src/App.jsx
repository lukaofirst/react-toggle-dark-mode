import { useState, useEffect } from 'react';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');

        if (theme === null || theme === 'light') {
            setTheme(false);
        } else {
            setTheme(true);
        }
    }, []);

    const onClickDarkTheme = () => {
        setTheme((prevTheme) => !prevTheme);
        localStorage.setItem('theme', 'dark');
    };

    const onClickLightTheme = () => {
        setTheme((prevTheme) => !prevTheme);
        localStorage.setItem('theme', 'light');
    };

    return (
        <div
            className={`container ${
                theme === false ? 'theme-light' : 'theme-dark'
            }`}
        >
            <h1>Actual Theme is: {theme === false ? 'Light' : 'Dark'}</h1>
            {theme && (
                <button
                    type='button'
                    className='btn'
                    onClick={onClickLightTheme}
                >
                    <Brightness4Icon
                        sx={{ fontSize: 100 }}
                        style={{
                            fill: theme === false ? '#14004d' : '#d6d5db',
                        }}
                    />
                </button>
            )}
            {!theme && (
                <button
                    type='button'
                    className='btn'
                    onClick={onClickDarkTheme}
                >
                    <Brightness7Icon
                        sx={{ fontSize: 100 }}
                        style={{
                            fill: theme === false ? '#14004d' : '#d6d5db',
                        }}
                    />
                </button>
            )}
        </div>
    );
}

export default App;
