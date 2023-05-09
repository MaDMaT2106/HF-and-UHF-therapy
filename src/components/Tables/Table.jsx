import { useContext, useEffect, useState } from 'react';
import TypeContext from '../../providers/TypeContext';
import LanguageContext from '../../providers/LanguageContext';
import TemperatureContext from '../../providers/TemperatureContext';
import TimeContext from '../../providers/TimeContext';
import { electricTable, magneticTable } from '../../values/values.js';

export default function Table() {
  const { isElectric, tableIsShown } = useContext(TypeContext);
  const { isEnglish } = useContext(LanguageContext);
  const { setGlTemp, setNaclTemp } = useContext(TemperatureContext);
  const { currentIndex, setCurrentIndex, intervalId, setIntervalId } =
    useContext(TimeContext);
  const { isRunning, setIsRunning } = useState(false);
  const { lastShownIndex, setLastShownIndex } = useState(0);

  useEffect(() => {
    let id;

    if (tableIsShown) {
      // Якщо tableIsShown = true, тоді починаємо з поточного рядка
      id = setInterval(() => {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }, 60000);
      setIntervalId(id);
    } else {
      // Якщо tableIsShown = false, тоді починаємо з першого рядка
      setCurrentIndex(0);
    }

    return () => clearInterval(id);
  }, [tableIsShown]);

  const tableToShow = isElectric ? electricTable : magneticTable;

  return (
    <div style={tableIsShown ? { display: 'block' } : { display: 'none' }}>
      <h3>
        {isElectric && (
          <span>
            {isEnglish ? 'Electric UHF field' : 'Електричне поле УВЧ'}
          </span>
        )}
        {!isElectric && (
          <span>{isEnglish ? 'Magnetic UHF field' : 'Магнітне поле УВЧ'}</span>
        )}
      </h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              t, <span>{isEnglish ? 'min' : 'хв'}</span>
            </th>
            <th scope="col">
              T -{' '}
              <span>
                {isEnglish ? 'dielectric (glycerol)' : 'діелектрик (гліцерин)'}
              </span>
              , °C
            </th>
            <th scope="col">
              T -{' '}
              <span>
                {isEnglish
                  ? 'electrolyte (NaCl solution)'
                  : 'електроліт (pозчин NaCl)'}
              </span>
              , °C
            </th>
          </tr>
        </thead>
        <tbody>
          {tableToShow.slice(0, currentIndex + 1).map((row, index) => {
            if (tableIsShown) {
              setGlTemp(row.gl);
              setNaclTemp(row.nacl);
            }
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{row.gl}</td>
                <td>{row.nacl}</td>
              </tr>
            );
          })}
          {/* {tableToShow.map((row, index) => {
            return (
              <tr
                data-epc_id={index}
                //  style={{ display: 'none' }}
              >
                <th scope="row">{index}</th>
                <td className="gl">{row.gl}</td>
                <td className="nacl">{row.nacl}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
}
