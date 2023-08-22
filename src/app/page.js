import Image from 'next/image'
import styles from './page.module.css'
import Conditions from './conditions/page'
import Stepper from './components/Stepper/Stepper'
import Info from './info/page'



export default function Home() {
  return (
    <>
    <Info/>
    <Stepper/>

    </>
  )
}
