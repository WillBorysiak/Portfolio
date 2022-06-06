import React from 'react';
import { createContext, useState } from 'react';

interface ContextPropTypes {
	children: React.ReactNode;
}

const defaultState = {
	dark: true,
};

export const ThemeContext = createContext(defaultState);

export const ThemeProvider = (props: ContextPropTypes) => {
	return <ThemeContext.Provider value={defaultState}>{props.children}</ThemeContext.Provider>;
};
