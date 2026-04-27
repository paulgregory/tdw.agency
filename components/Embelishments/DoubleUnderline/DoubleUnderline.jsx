import classNames from 'classnames'

export function DoubleUnderline({colour = 'mint', children}) {
  const colours = {
    white: '[&_path]:fill-white',
    mint: '[&_path]:fill-mint',
    aqua: '[&_path]:fill-aqua',
    lavender: '[&_path]:fill-lavender',
    orange: '[&_path]:fill-orange',
    peach: '[&_path]:fill-peach',
    steel: '[&_path]:fill-steel',
  }

  return (
    <span className="relative">
      {children}
      <svg
        width="1075"
        height="96"
        viewBox="0 0 1075 96"
        fill="none"
        preserveAspectRatio="none"
        className={classNames('absolute top-full left-[50%] w-full h-[19px] max-w-[280px] -translate-x-1/2', colours[colour])}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.8261 50.776C172.192 26.2247 615.44 -16.8615 1067.27 6.942C1071.68 7.17469 1075.07 10.9393 1074.84 15.3512C1074.61 19.7632 1070.84 23.1517 1066.43 22.9195C615.875 -0.816734 173.716 42.1734 9.1757 66.6022C4.80538 67.251 0.736714 64.2342 0.0878145 59.8639C-0.561039 55.4935 2.45572 51.4248 6.8261 50.776Z" />
        <path d="M1065.01 7.29886C1069.43 7.2866 1073.02 10.8583 1073.03 15.2764C1073.04 19.6946 1069.47 23.2863 1065.05 23.2989C774.25 24.119 470.809 71.3952 355.601 94.9024C351.272 95.7857 347.045 92.9922 346.162 88.6631C345.279 84.3342 348.073 80.109 352.401 79.2256C468.314 55.5748 772.853 8.12277 1065.01 7.29886Z" />
      </svg>

    </span>
  )
}