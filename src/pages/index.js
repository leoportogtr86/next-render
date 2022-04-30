import Head from 'next/head'
import Image from 'next/image'
import Spa from '../components/Spa'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Forma de Pré Renderização do NextJs</h1>
      <Spa />

    </div>
  )
}
