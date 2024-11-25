import { featureGridItemType } from "../types/featureGridType"
import FeatureGridItem from "./FeatureGridItem";
import { FaUsers } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import {  FaGlobe } from 'react-icons/fa'

const featureConfig: featureGridItemType[] = [
  {
    Icon: FaUsers,
    t1: 'Find Compatible Partners',
    t2: 'Match with travelers who share your interests and travel style'
  },
  {
    Icon: SiAdguard,
    t1: 'Safe & Secure',
    t2: 'Verified profiles and secure messaging for peace of mind'
  },
  {
    Icon: FaGlobe,
    t1: 'Global Community',
    t2: 'Connect with travelers from around the world'
  }
]

const FeaturesSection = () => {
  return (
    <>
      <div className="flex flex-col  px-5 py-24 mx-auto">
        <p className="text-center text-[1.5rem] font-bold">Why Choose RouteMate</p>
        <p className="text-center">Discover the benefits of traveling with compatible partners</p>
        <div className="grid grid-cols-1 b2:grid-cols-2 b1:grid-cols-3 gap-10 max-w-screen-xl mx-auto my-3">
          {featureConfig.map(f => {
            return <FeatureGridItem {...f} key={f.t1} />
          })}
        </div>
      </div>
    </>
  )
}

export default FeaturesSection