import React, { useState } from 'react';
import { createContext } from 'react';

interface ContextPropTypes {
	children: React.ReactNode;
}

const initialTheme = {
	dark: false,
};

export const ThemeContext = createContext(initialTheme);

export const ThemeProvider = (props: ContextPropTypes) => {
	return <ThemeContext.Provider value={initialTheme}>{props.children}</ThemeContext.Provider>;
};
