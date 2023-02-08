import React from 'react';
import ParallaxPage from '../pages/ParallaxPage';

function Main() {
  return (
    <main className='main'>
      {/* wrapper ограничивает весь контент слева и справа */}
      <div className="main__wrapper">
        <ParallaxPage  />
      </div>
    </main>
  );
}

export default Main;
