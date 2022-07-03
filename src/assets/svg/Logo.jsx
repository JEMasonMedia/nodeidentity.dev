const Logo = (props, { fill, fontSize }) => {
  return (
    <svg viewBox='0 0 205.481 128.588' xmlns='http://www.w3.org/2000/svg' {...props}>
      <text
        style={{
          fontFamily: 'Cinzel',
          InkscapeFontSpecification: "'Cinzel, @wght=700'",
          fontVariantLigatures: 'none',
          fontVariationSettings: "'wght' 700",
          letterSpacing: 0,
          wordSpacing: 0,
          strokeWidth: 0.264583,
        }}
        transform='translate(-5.292 126.118)'>
        <tspan
          style={{
            fontSize,
            fill,
            strokeWidth: 0.264583,
          }}
          x={0}
          y={0}>
          {'NI'}
        </tspan>
      </text>
    </svg>
  )
}

export default Logo
