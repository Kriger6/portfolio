import App from './components/App'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)