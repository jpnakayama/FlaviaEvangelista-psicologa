import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import { AboutMe } from "pages/AboutMe";
import { MyServices } from "pages/MyServices";
import { Home } from "pages/Home";
import { Articles } from "pages/Articles";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sobremim" element={<AboutMe />}></Route>
        <Route path="/atendimento" element={<MyServices />}></Route>
        <Route path="/artigos" element={<Articles />}></Route>
      </Route>
    </Routes>
  )
}