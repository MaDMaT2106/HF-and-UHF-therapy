import LeftTermometr from '../Termometrs/LeftTermometr/LeftTermometr';
import RightTermometr from '../Termometrs/RightTermometr/RightTermometr';
import ImageBlock from '../ImageBlock/ImageBlock';

export default function MainPart() {
  return (
    <div className="row">
      <LeftTermometr />
      <ImageBlock />
      <RightTermometr />
    </div>
  );
}
