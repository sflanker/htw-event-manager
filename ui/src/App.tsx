import './App.css'

function App() {
  return (
    <>
      <header className="title-banner">
        <div className="banner-content">
          <h1>Honolulu Tech Week Event Manager</h1>
          <nav className="banner-nav">
            {/* Navigation links will be added here */}
          </nav>
        </div>
      </header>
      <div className="splash-image-container">
        <img 
          src="/images/2024-0917-1700_Scaling-Hawaii_Photos_BRAE-SONY-472.jpg" 
          alt="Honolulu Tech Week" 
          className="splash-image"
        />
      </div>
      <main>
        <section>
          <p>
            Welcome to the Honolulu Tech Week Event Manager, your gateway to becoming a Honolulu Tech Week Event Host!
          </p>
        </section>
      </main>
    </>
  )
}

export default App
