import React from 'react';


export function ChartBox({
  children = <></>,
  width = 600,
  height = 270,
  resizable = true,
  style = {},
  className = '',
}) {
  return (
    <div
      style={{
        display: 'inline-block',
        width: '100%',
        height: '100%',
        background: 'white',
        padding: '.5rem',
        borderRadius: '0.5rem',
        paddingBottom: '5px',
        ...style,
      }}
    >
      {resizable ? (
        // <ReactResizableBox axis="x"  width={width} height={height}>
        <div
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
              marginBottom: '10px',
          }}
          className={className}
        >
          {children}
        </div>
      ) : (
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={className}
        >
          {children}
        </div>
      )}
    </div>
  );
}
