import { Rnd } from 'react-rnd';
import { useDraggable } from "./DraggableContext.jsx"

function AllergyContent() {
    const { toggleAllergyVisibility } = useDraggable();
    return (
        <div>
            <header className='drag-handle'><button onClick={toggleAllergyVisibility}>X</button></header>
        </div>
    );
};

function DraggableAllergy() {

  return (
    <Rnd
      default={{
        x: window.innerWidth/2.9,
        y: window.innerHeight/1.4,
        width: window.innerWidth/2,
        height: window.innerHeight/2,
      }}
      minWidth={100}
      minHeight={100}
      bounds="window"
    >
      <div className="allergy-container">
        <AllergyContent />
      </div>
    </Rnd>
  );
}

export default DraggableAllergy;
