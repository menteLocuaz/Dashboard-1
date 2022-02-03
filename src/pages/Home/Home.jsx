import './home.css';
import React from 'react';
import { Featureinfo } from '../../component/Featureinfo/Featureinfo';
import Chart from '../../component/Chart/Chart';
import { Userdata } from'../.../../../Data';
import { WidgetsSm } from '../../component/WidgetsSm/WidgetsSm';
import {WidgetLg} from '../../component/Widgetslg/Widgetslg';

export  function Home() {
  return (
  <div className="home">
      <Featureinfo/>
      <Chart data={Userdata} title="Analisis De usuario" grd dataKey="Usuarios Activos"/>
      <div className="homewidgets">
        <WidgetLg/>
        <WidgetsSm/>
      
      </div>

  </div>);
}
