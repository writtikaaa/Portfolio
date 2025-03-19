

import './App.css'
import Layout from './components/layout/layout'
import About from './pages/About/About'
import TechStack from './pages/TechStack/TechStack'
import Projects from './pages/Projects/Projects'
import Education from './pages/Education/Education'
import WorkExp from './pages/workExp/WorkExp'
import Contact from './pages/Contact/Contact'
import { useTheme } from '../../context/ThemeContext'
import Tada from "react-reveal/Tada";


function App() {
  
  const {theme} = useTheme();
  

  return (
   <>
   <div id={theme}>
   <Layout/>
   <About/>
   <Education/>
   <TechStack/>
   <Projects/>
   <WorkExp/>
   <Contact/>
   </div>

   <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made With 😍 Writtika &copy; 2025</h4>
          </Tada>
        </div>
   </>
  )
}

export default App
