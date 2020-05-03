import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffe401',
    },
  },
  typography: {
    h2: {
      fontWeight: 500,
    },
  },
});
export default theme