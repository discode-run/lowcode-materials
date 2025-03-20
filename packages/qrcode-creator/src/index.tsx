import React from 'react';

export const QRCode = ({ size = 420 }) => {
  return (
    <div
      style={{
        width: size + 'px',
        height: size + 'px',
        backgroundColor: '#000',
      }}
    >
      <img
        style={{
          width: size + 'px',
          height: size + 'px',
        }}
        src="https://cdn.appthen.com/editor/assets/qrcode-demo.png"
      />
    </div>
  );
};

export const Barcode = ({ size = 420 }) => {
  return (
    <div
      style={{
        width: size + 'px',
        height: size + 'px',
        backgroundColor: '#000',
      }}
    >
      <img
        style={{
          width: size + 'px',
          height: size + 'px',
        }}
        src="https://cdn.appthen.com/editor/assets/qrcode-demo.png"
      />
    </div>
  );
};
