import Options from "./component/Options";
import PhoneOS from "./component/Phone";
import {Routes, Route } from "react-router-dom";
import TabletOS from "./component/Tablet";
import PcOS from "./component/Pc";
import Windows from "./component/os/windows";


function Support() {
  return (
    <div>
        <Routes>
            <Route exact path="/support" element={<Options/>}/>
            <Route exact  path="/support/pc" element={<PcOS/>}/>
            <Route exact  path="/support/tablet" element={<TabletOS/>}/>
            <Route exact  path="/support/phone" element={<PhoneOS/>}/>
            <Route exact  path="/support/:device/:os" element={<Windows/>}/>


        </Routes>
    </div>
  );
}
export default Support;
