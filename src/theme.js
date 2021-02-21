import {createMuiTheme} from '@material-ui/core/styles'
import Configuration from './Services/Api/Configuration'

let {DefaultFont, DefaultDirection} = Configuration

let theme = createMuiTheme({
  direction: DefaultDirection,
  palette: {
    primary: {
      light: '#95fccd',
      medium: '#19b679',
      mainLight: '#39ab77',
      main: '#037f53',
      dark: '#005539',
      contrastText: '#000'
    },
    secondary: {
      light: '#edf6fe',
      main: '#cfe6fc',
      dark: '#adcbe3',
      contrastText: '#000'
    },
    error: {
      light: '#fff2f4',
      main: '#dc3545',
      dark: '#c32130',
      contrastText: '#000'
    },
    success: {
      main: '#28a745',
      light: '#20c997'
    },
    info: {
      main: '#17a2b8',
      light: '#edf7ff'
    },
    warning: {
      light: '#fff9ec',
      main: '#ffc107',
      dark: '#FF8412'
    },
    text: {
      primary: '#292e3c',
      secondary: '#92929d',
      dark: '#181b1e',
      hint: '#98a9bc'
    }
  },
  typography: {
    'fontFamily': DefaultFont,
    'htmlFontSize': 16,
    'fontSize': 14,
    'fontWeightLight': 300,
    'fontWeightRegular': 400,
    'fontWeightBold': 700
  }
})
export default theme
