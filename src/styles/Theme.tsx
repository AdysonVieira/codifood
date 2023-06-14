import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const defaultTheme = {
  colors: {
    primary: '#646cff',
    primaryDark: '#535bf2',
    gradient: 'linear-gradient(160deg, #76e4ff 0%,#646cff 50%, #e00ee7 100%)',
    background: '#101828',
    white: '#fff',
    gray: {
      g25: '#FCFCFD',
      g50: '#F9FAFB',
      g100: '#F2F4F7',
      g200: '#EAECF0',
      g300: '#D0D5DD',
      g400: '#98A2B3',
      g500: '#667085',
      g600: '#475467',
      g700: '#344054',
      g800: '#1D2939',
      g900: '#101828',
    },
    error: {
      err400: '#F97066',
      err500: '#F04438',
    }, 
    success: {
      succ400: '#32D583'
    }
  },
  fontSize: {
    text: {
      s: '1.2rem',
      m: '1.4rem',
      l: '1.6rem',
      xl: '1.8rem'
    },
    title: {
      s: '1.6rem',
      m: '2.8rem',
      l: '4.8rem',
      xl: '5.6rem',
      xxl: '6.4rem'
    }
  },
  breakpoints: {
    s: '48rem',
    m: '78rem',
    l: '144rem',
    xl: '192rem',
  },
}
interface ThemeProps {
  children: ReactNode
}

const Theme = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  ) 
}

export default Theme;