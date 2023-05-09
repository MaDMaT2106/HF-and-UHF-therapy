import { LanguageProvider } from './providers/LanguageContext';
import { TypeProvider } from './providers/TypeContext';
import { TemperatureProvider } from './providers/TemperatureContext';
import { TimeProvider } from './providers/TimeContext';

import MyJumbotron from './components/MyJubmotron/MyJubmotron';
import MainPart from './components/MainPart/MainPart';
import Table from './components/Tables/Table';

import './style/style.css';

export default function App() {
  return (
    <LanguageProvider>
      <TypeProvider>
        <TimeProvider>
          <TemperatureProvider>
            <div className="App">
              <div className="container">
                <MyJumbotron />
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
