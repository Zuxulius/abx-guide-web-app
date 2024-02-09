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
        x: window.innerWidth - window.innerWidth/4.9,
        y: window.scrollY+window.innerHeight/5,
        width: window.innerWidth/5,
        height: window.innerHeight/4,
      }}
      style={{position: "fixed"}}
      disableDragging="true"
      minWidth={100}
      minHeight={100}
      bounds="window"
      enableResizing={{
        top: true,
        right: false,
        bottom: true,
        left: true,
        topRight: false,
        bottomRight: false,
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
