import classNames from "classnames"

export function Underline({colour = 'mint', animate = false, children}) {
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
        width="269"
        height="12"
        viewBox="0 0 269 12"
        fill="none"
        preserveAspectRatio="none"
        className={classNames('absolute top-full left-[50%] w-full h-[11px] max-w-[350px] -translate-x-1/2', colours[colour])}
        xmlns="http://www.w3.org/2000/svg"
      >
        {animate && (
          <defs>
            <clipPath id="reveal">
              <rect x="0" y="0" width="0" height="12" className="motion-safe:animate-wipe motion-reduce:w-full" />
            </clipPath>
          </defs>
        )}
        <path clipPath="url(#reveal)" d="M266.133 3.94458e-06C267.238 -0.00216638 268.135 0.89153 268.137 1.9961C268.139 3.10065 267.245 3.99783 266.141 4C153.008 4.22231 42.9806 9.42414 2.12609 11.9961C1.02381 12.0655 0.0735797 11.2282 0.00402007 10.126C-0.0653734 9.0237 0.771904 8.07347 1.87414 8.00391C42.7936 5.42786 152.904 0.222494 266.133 3.94458e-06Z"/>
      </svg>
    </span>
  )
}