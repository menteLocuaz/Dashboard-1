import React from 'react';
import './featuinfo.css';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';



export  function Featureinfo() {
  return (
    <div className='feature'>
        <div className="featureItem">
            <span className="featureTiTle">ventas</span>
            <div className="freatureMoneyConteiner">
                <span className="fetureMoney">$2,49</span>
                <span className="fetureMoneyRate">
                    $-11,49 <ArrowDownwardOutlinedIcon className='fetureIncon negative'/>
                </span>
            </div>
            <span className="fetureSub">Comparacion De La Ultima Semana</span>
        </div>
        <div className="featureItem">
            <span className="featureTiTle">ventas</span>
            <div className="freatureMoneyConteiner">
                <span className="fetureMoney">$11,49</span>
                <span className="fetureMoneyRate">
                    $0,49 <CompareArrowsOutlinedIcon className='fetureIncon negative'/>
                </span>
            </div>
            <span className="fetureSub">Comparacion De La Ultima Semana</span>
        </div>
        <div className="featureItem">
            <span className="featureTiTle">ventas</span>
            <div className="freatureMoneyConteiner">
                <span className="fetureMoney">$12,49</span>
                <span className="fetureMoneyRate">
                    $9,49 <ArrowUpwardOutlinedIcon className='fetureIncon '/>
                </span>
            </div>
            <span className="fetureSub">Comparacion De La Ultima Semana</span>
        </div>

    </div>

  );
}
