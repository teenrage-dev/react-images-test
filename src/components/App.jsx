import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { ImageFullScreen } from 'pages/ImageFullScreen/ImageFullScreen';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/images"
          element={
            <div>
              <Outlet />
            </div>
          }
        >
          <Route path=":imageId" element={<ImageFullScreen />} />
        </Route>
      </Routes>
    </>
  );
};
