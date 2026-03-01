import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import AIAnalyst from './components/AIAnalyst'
import SampleScan from './components/SampleScan'
import Capabilities from './components/Capabilities'
import PoweredBy from './components/PoweredBy'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <AIAnalyst />
        <SampleScan />
        <Capabilities />
        <PoweredBy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
