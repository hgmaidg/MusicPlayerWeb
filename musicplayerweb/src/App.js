// import React from "react";
import LuxMusic from "./Components/LuxMusic";

// export default function App() {
//   return (
//     <div>
//       <LuxMusic/>
//     </div>
//   );
// }

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Wrapper from './Components/Wrapper/Wrapper';
import { DefaultLayout } from './layouts/';
// import Controls from './layouts/Components/Controls';
import { privateRoutes } from './routes';
import Header from "./layouts/Components/Header/Header";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {privateRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Comp = route.component;
                        return (
                            <Route
                                path={route.path}
                                key={index}
                                element={
                                    <div>
                                        <Wrapper>
                                            {/* <Layout>
                                                <Comp />
                                            </Layout>
                                            <div className="control_music">
                                                <Controls />
                                            </div> */}
                                        </Wrapper>
                                        {/* <Header/> */}
                                    </div>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
