import {Introduction , Experience , Projects , Contact} from './components/index'
import {Box, Header} from './components/Root/index'
export default function App() {
  return (
    <Box>
    <Header/>
      <Introduction/>
      <Experience/>
      <Projects/>
      <Contact/>
    </Box>
  )
}