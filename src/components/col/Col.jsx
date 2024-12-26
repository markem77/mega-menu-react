import React from 'react'
import "./col.css"
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { GiAlarmClock } from "react-icons/gi";
import { LuLightbulb } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
import { TfiLightBulb } from "react-icons/tfi";
import { PiBellRingingThin } from "react-icons/pi";
import { GiRadarSweep } from "react-icons/gi";
import { TfiBriefcase } from "react-icons/tfi";
import { GoQuestion } from "react-icons/go";



export default function Col() {

    
  return (
    <div className="col_container">
        <div className="col_icons">
            <div className="col_ic1">
            <a href="#"><HiOutlineDocumentChartBar style={{ color: 'black', fontSize: '33px'}}/></a>
            <a href="#"><GiAlarmClock style={{ color: 'black', fontSize: '33px' }}/></a>
            <a href="#"><LuLightbulb style={{ color: 'black', fontSize: '33px' }}/></a>
            <div className="line"></div>
            <a href="#"><TiMessages style={{ color: 'black', fontSize: '33px' }}/></a>
            <a href="#"><TfiLightBulb style={{ color: 'black', fontSize: '33px' }}/></a>
            <a href="#"><PiBellRingingThin style={{ color: 'black', fontSize: '33px' }}/></a>
            </div>
            <div className="col_ic2">
                <a href="#"><GiRadarSweep style={{ color: 'black', fontSize: '33px' }}/></a>
                <a href="#"><TfiBriefcase style={{ color: 'black', fontSize: '33px' }}/></a> 
                <a href="#"><GoQuestion style={{ color: 'black', fontSize: '33px' }}/></a>
            </div>
        </div>
    </div>
  )
}
