import { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import MyModal from '../Modal/Modal';

import LanguageContext from '../../providers/LanguageContext';
import TypeContext from '../../providers/TypeContext';
import TemperatureContext from '../../providers/TemperatureContext';
import './MyJubmotron.css';

const MyJumbotron = () => {
  const { isEnglish, setEnglish } = useContext(LanguageContext);
  const { setElectric, setTableIsShown } = useContext(TypeContext);
  const { setGlTemp, setNaclTemp } = useContext(TemperatureContext);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleActive = (num) => {
    if (num === 1) {
      setActive1(true);
      setActive2(false);
    } else if (num === 2) {
      setActive1(false);
      setActive2(true);
    }
  };

  const onClickFunk = (bool) => {
    setTableIsShown(false);
    setElectric(bool);
    setGlTemp(0);
    setNaclTemp(0);
  };

  return (
    <div>
      <Container>
        <MyModal show={isOpen} handleClose={setOpen} />
        <div className="header__language">
          <div className="lg">
            <p>Українська</p>
          </div>
          <div className="form-check form-switch">
            <input
              id="switch-lang"
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={() => setEnglish(!isEnglish)}
            />
          </div>
          <div className="lg">
            <p>English</p>
          </div>
        </div>
        <img
          style={{
            float: 'left',
            margin: '0 20px 20px 0',
            height: '200px',
            borderRadius: '5px',
            padding: '5px',
            fontSize: '20px',
          }}
          src="./media/pic.png"
        />
        <Button
          variant="outline-secondary"
          size="lg"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          onClick={() => setOpen(true)}
        >
          Info
        </Button>
        <h2 className="display-4">
          <span>
            {isEnglish
              ? 'STUDY OF DEVICES AND METHODS OF HF AND UHF THERAPY'
              : 'ВИВЧЕННЯ АПАРАТІВ І МЕТОДІВ УВЧ-ТЕРАПІЇ ЕЛЕКТРИЧНИМ І МАГНІТНИМ ПОЛЯМИ ТА ВЧ-СТРУМОМ'}
          </span>
        </h2>
        <div className="d-flex gap-3">
          <Button
            onClick={() => {
              onClickFunk(true);
              handleActive(1);
            }}
            variant={active1 ? 'success' : 'outline-success'}
            // active={active1}
          >
            <h3>
              <span>
                {isEnglish ? 'Electric UHF field' : 'Електричне поле УВЧ'}{' '}
                <br /> 30 Вт
              </span>
            </h3>
          </Button>
          <Button
            onClick={() => {
              onClickFunk(false);
              handleActive(2);
            }}
            variant="outline-secondary"
            active={active2}
          >
            <h3>
              <span>
                {isEnglish ? 'Magnetic UHF field' : 'Магнітне поле УВЧ'} <br />{' '}
                15 Вт
              </span>
            </h3>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default MyJumbotron;
