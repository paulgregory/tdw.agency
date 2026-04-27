import { ProfileCard } from '../ProfileCard/ProfileCard'
import classNames from 'classnames'

export function TeamProfiles({ title, body, profiles }) {
  return (
    <div className='bg-white py-20 md:py-28'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          <div className='flex flex-col gap-6'>
            {title && (
              <h2 className='text-3xl lg:text-4xl leading-[1.4] font-bold text-navy w-full lg:max-w-[calc(100%-100px)] 2xl:max-w-[calc(100%-200px)]'>
                {title}
              </h2>
            )}
            {body && (
              <div className={classNames('prose w-full lg:max-w-[calc(100%-100px)] 2xl:max-w-[calc(100%-200px)]')}>
                {body}
              </div>
            )}
          </div>
          <div className='flex flex-col gap-8 lg:gap-12'>
            {profiles.map((profile) => {
              return (
                <ProfileCard
                  key={profile.name}
                  name={profile.name}
                  description={profile.description}
                  image={profile.image}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
