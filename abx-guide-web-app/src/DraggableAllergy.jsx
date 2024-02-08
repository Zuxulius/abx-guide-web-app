import { Rnd } from 'react-rnd';

function AllergyContent() {
    return (
        <div>
            <h2>Allergy!</h2>
        </div>
    );
};

function DraggableAllergy() {

  return (
    <Rnd
      default={{
        x: window.innerWidth/3,
        y: window.innerHeight/1.5,
        width: 320,
        height: 200,
      }}
      minWidth={100}
      minHeight={100}
      bounds="window"
    >
      <div className="allergy-container">
        <div className="drag-handle">
          Drag from here
        </div>
        <AllergyContent />
      </div>
    </Rnd>
  );
}

export default DraggableAllergy;
