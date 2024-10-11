import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import AccountPage from '../pages/AccountPage/AccountPage'
import ExercisePage from '../pages/ExercisePage/ExercisePage'
import PhilosophyPage from '../pages/PhilosophyPage/PhilosophyPage'
import TodoPage from '../pages/TodoPage/TodoPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/account/login" element={<LoginPage />} />
        <Route path="/account/register" element={<RegisterPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRoutes;
