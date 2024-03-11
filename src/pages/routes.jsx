import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./Home"
import { PokemonCardPage } from "./PokemonCard"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path={`/pokemon/:id`} element={<PokemonCardPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes } 