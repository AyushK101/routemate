import { featureGridItemType } from '../types/featureGridType'

const FeatureGridItem = ({Icon,t1,t2}: featureGridItemType) => {
  return (
    <>
      <div className=' bg-[#f8fafc] rounded-xl  p-8 flex flex-col text-center max-w-full md:min-h-44 hover:-translate-y-2 duration-300 '>
        <Icon className='mx-auto mb-2' size={'40'} />
        <p>{t1}</p>
        <p>{t2}</p>
      </div>
    </>
  )
}

export default FeatureGridItem