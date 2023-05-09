import { useContext, useState, useEffect } from 'react';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import LanguageContext from '../../providers/LanguageContext';
import TypeContext from '../../providers/TypeContext';
import TimeContext from '../../providers/TimeContext';

import elec from '../../../public/media/електричне-поле.gif';
import elecAnim from '../../../public/media/електричне-поле-анімований.gif';
import magnet from '../../../public/media/магнітне-поле.gif';
import magnetAnim from '../../../public/media/магнітне-поле-анімований.gif';

const ImageBlock = () => {
  const { isEnglish } = useContext(LanguageContext);
  const { isElectric, tableIsShown, setTableIsShown } = useContext(TypeContext);
  const { time, setTime } = useContext(TimeContext);

  useEffect(() => {
    if (!tableIsShown) {
      setTime(0);
    }
  }, [time]);

  return (
    <div className="col-4">
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {isElectric && (
            <img className="image" src={!tableIsShown ? elec : elecAnim} />
          )}

          {!isElectric && (
            <img className="image" src={!tableIsShown ? magnet : magnetAnim} />
          )}
          <div className="under-image-text">
            <span>{isEnglish ? 'Glycerol' : 'Гліцерин'}</span>
            <span>{isEnglish ? 'NaCl solution' : 'Розчин NaCl'}</span>
          </div>
        </div>

        <div
          className="col align-self-center"
          style={{
            backgroundColor: 'white',
            margin: '10px',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <button
            className="btn btn-success btn-lg"
            disabled={tableIsShown}
            onClick={() => {
              setTableIsShown(true);
              setTime(0);
            }}
            variant="success"
            id="start"
          >
            <span>{isEnglish ? 'Start' : 'Старт'}</span>
          </button>

          <div className="timer">
            <Timer
              key={tableIsShown ? 'timer-shown' : 'timer-hidden'}
              time={time}
              active={tableIsShown}
              duration={600000}
            >
              <Timecode format="H:?mm:ss" />
            </Timer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
