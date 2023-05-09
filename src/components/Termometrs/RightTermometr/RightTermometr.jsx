import { useContext } from 'react';
import LanguageContext from '../../../providers/LanguageContext';
import TemperatureContext from '../../../providers/TemperatureContext';

export default function RightTermometr() {
  const { isEnglish } = useContext(LanguageContext);
  const { naclTemp } = useContext(TemperatureContext);
  return (
    <div className="col-4">
      <div id="wrapper2">
        <div id="termometer2">
          <div
            id="temperature2"
            style={{ height: `${naclTemp}%` }}
            data-value={`${naclTemp}°C`}
          ></div>
          <div id="graduations2"></div>
        </div>
        <div id="playground">
          <div id="range" style={{ display: 'none' }}>
            <input id="minTemp2" type="text" value="0" readOnly />
            <input id="nacl" type="range" min="0" max="50" value="0" readOnly />
            <input id="maxTemp2" type="text" value="50" readOnly />
          </div>
          <p style={{ display: 'none' }} id="unit2">
            Celcius C°
          </p>
        </div>
        <h2 style={{ alignItems: 'center' }}>
          <span>{isEnglish ? 'ELECTROLYTE' : 'ЕЛЕКТРОЛІТ'}</span>
          <br />
          <span>{isEnglish ? '(NaCl solution)' : '( розчин NaCl )'}</span>
        </h2>
      </div>
    </div>
  );
}
