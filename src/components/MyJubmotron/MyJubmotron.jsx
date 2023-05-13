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
    <div className="my-jumbotron">
      <Container>
        <MyModal show={isOpen} handleClose={setOpen} />
        <Button
          className="info-button"
          variant="secondary"
          size="lg"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          onClick={() => setOpen(true)}
        >
          {isEnglish ? 'Info' : 'Довідка'}
        </Button>

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
                {isEnglish ? 'Electric UHF field' : 'Електричне поле УВЧ'}
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
                {isEnglish ? 'Magnetic UHF field' : 'Магнітне поле УВЧ'} <br />
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
