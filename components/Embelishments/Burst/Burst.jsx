import classNames from 'classnames'

export function Burst({colour = 'mint', children}) {
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
        viewBox="0 0 72 37"
        fill="none"
        preserveAspectRatio="none"
        className={classNames('absolute -top-[0.35em] left-[calc(100%_+_0.2em)] w-[1.9em] aspect-[72/37]', colours[colour])}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M38.9544 32.5013C39.7823 32.4759 40.4738 33.1264 40.4993 33.9544C40.5247 34.7823 39.8742 35.4738 39.0462 35.4993L6.54619 36.4993C5.71826 36.5247 5.02675 35.8742 5.00127 35.0462C4.97592 34.2183 5.62644 33.5267 6.4544 33.5013L38.9544 32.5013ZM69.595 7.05596C70.3926 6.8324 71.2209 7.29758 71.4446 8.09502C71.6682 8.89257 71.203 9.72088 70.4056 9.94463L4.40557 28.4446C3.60802 28.6682 2.77971 28.203 2.55596 27.4056C2.3324 26.608 2.79758 25.7797 3.59502 25.556L69.595 7.05596ZM27.1575 0.259084C27.8428 -0.206212 28.7761 -0.0276957 29.2415 0.657521C29.7068 1.34279 29.5283 2.27608 28.8431 2.74151L2.34307 20.7415C1.6578 21.2068 0.724515 21.0283 0.259084 20.3431C-0.206212 19.6578 -0.0276957 18.7245 0.657521 18.2591L27.1575 0.259084Z" />
      </svg>

    </span>
  )
}