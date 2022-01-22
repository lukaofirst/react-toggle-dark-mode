import { useState, useEffect } from 'react';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
    const [theme, setTheme] = useState(false);

    const getThemeFromLS = localStorage.getItem('theme');

    useEffect(() => {
        if (getThemeFromLS === null || getThemeFromLS === 'light') {
            setTheme(false);
        } else {
            setTheme(true);
        }
    }, [getThemeFromLS]);

    const onClickHandler = () => {
        if (getThemeFromLS === null || getThemeFromLS === 'light') {
            setTheme((prevTheme) => !prevTheme);
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme((prevTheme) => !prevTheme);
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div
            className={`container ${
                theme === false ? 'theme-light' : 'theme-dark'
            }`}
        >
            <h1>Actual Theme is: {theme === false ? 'Light' : 'Dark'}</h1>
            {theme && (
                <button type='button' className='btn' onClick={onClickHandler}>
                    <Brightness4Icon
                        sx={{ fontSize: 100 }}
                        style={{
                            fill: theme === false ? '#14004d' : '#d6d5db',
                        }}
                    />
                </button>
            )}
            {!theme && (
                <button type='button' className='btn' onClick={onClickHandler}>
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
