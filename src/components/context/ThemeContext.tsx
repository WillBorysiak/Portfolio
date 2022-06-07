import React from 'react';
import { createContext, useState } from 'react';

interface ContextPropTypes {
	children: React.ReactNode;
}

interface StateType {
	isDark: boolean;
	setIsDark: any;
}

const defaultState: any = true;

export const ThemeContext = createContext<StateType>(defaultState);

export const ThemeProvider = (props: ContextPropTypes) => {
	const [isDark, setIsDark] = useState(defaultState);

	return <ThemeContext.Provider value={{ isDark, setIsDark }}>{props.children}</ThemeContext.Provider>;
};
