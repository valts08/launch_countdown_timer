import Footer from "./components/Footer"
import LaunchComponent from "./components/LaunchComponent"
import BGStars from "../src/assets/images/bg-stars.svg"

function App() {

  return (
    <div className="relative bg-violet-950 h-[100dvh]">
      <img src={BGStars} alt="background" className="absolute w-10/10"/>
      <LaunchComponent />
      <Footer />
    </div>
  )
}

export default App
