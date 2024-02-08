import { Rnd } from 'react-rnd';
import { useDraggable } from "./DraggableContext.jsx"

function AllergyContent() {
    const { toggleAllergyVisibility } = useDraggable();
    return (
        <div>
            <header className='drag-handle'><button onClick={toggleAllergyVisibility}>X</button></header>
        </div>
    );
}

function DraggableAllergy() {

  return (
    <Rnd
      default={{
        x: window.innerWidth/2.5,
        y: window.scrollY+100,
        width: window.innerWidth/2,
        height: window.innerHeight/2,
      }}
      minWidth={100}
      minHeight={100}
      bounds="window"
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
      dragHandleClassName='drag-handle'
    >
      <div className="allergy-container">
        <AllergyContent />
      </div>
    </Rnd>
  );
}

export default DraggableAllergy;
