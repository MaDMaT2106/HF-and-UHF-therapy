import { LanguageProvider } from './providers/LanguageContext';
import { TypeProvider } from './providers/TypeContext';
import { TemperatureProvider } from './providers/TemperatureContext';
import { TimeProvider } from './providers/TimeContext';

import Header from './components/Header/Header';
import LanguageButton from './components/LanguageButton/LanguageButton';
import MainPart from './components/MainPart/MainPart';
import Table from './components/Tables/Table';

import './index.css';

export default function App() {
  return (
    <LanguageProvider>
      <TypeProvider>
        <TimeProvider>
          <TemperatureProvider>
            <div className="App">
              <div className="container">
                <Header />
                <LanguageButton />
                <MainPart />
                <Table />
              </div>
            </div>
          </TemperatureProvider>
        </TimeProvider>
      </TypeProvider>
    </LanguageProvider>
  );
}
