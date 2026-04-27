export function ProofCard({ title, description, ...props }) {
  return (
    <div className='p-6 pb-4 bg-near-black rounded-3xl mt-1' {...props}>
      <h3 className='xl:text-xl font-semibold text-near-black bg-mint rounded-3xl -ml-6 -mr-6 -mt-7 mb-4 px-6 py-3'>
        {title}
      </h3>
      <p className='text-white'>{description}</p>
    </div>
  )
}
