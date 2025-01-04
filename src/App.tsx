import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
//pages
import MainPage from "./pages/mainPage/mainPage";
import routes from "./data/routes";
import MainLayout from "./common/layouts/mainLayout/mainLayout";

import Gg_MainPage from "./pages/_serviceParts/goshunGulluk/mainPage/mainPage";
import Gg_StuffPage from "./pages/_serviceParts/goshunGulluk/stuffPage/stuffPage";
import Gg_DutyPage from "./pages/_serviceParts/goshunGulluk/dutyPage/dutyPage"
import { store } from "./store/store";
import { ConfigProvider } from "antd";
import antCustomConfig from "./config/antCustomConfig";
import SandboxPage from "./pages/sandboxPage/sandboxPage";
import Gg_GarawulPage from "./pages/_serviceParts/goshunGulluk/garawulPage/garawulPage";

const App = () => {

  return (
    <Provider store={store}>
      <ConfigProvider
        {...antCustomConfig}
        >
        <MainLayout>
          <Routes>
            <Route path="/sb" element={<SandboxPage/>}/>
            <Route path={routes.start} element={<MainPage/>}/>
            <Route path={routes.goshunGullugy.home} element={<Gg_MainPage/>}/>
            <Route path={routes.goshunGullugy.stuff} element={<Gg_StuffPage/>}/>
            <Route path={routes.goshunGullugy.duty} element={<Gg_DutyPage/>}/>
            <Route path={routes.goshunGullugy.garawul} element={<Gg_GarawulPage/>}/>
          </Routes>
        </MainLayout>
      </ConfigProvider>
    </Provider>  
    
  )
}

export default App;