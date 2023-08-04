import Image from 'next/image'
import styles from './page.module.css'
import Button from './components/button'
import Input from './components/input'
import CopyButton from './components/copyButton'
import logo from '../../public/logo.svg'

export default function Home() {

  return (
    <div className={styles.grid_container}>

      <div className={styles.container}>
          <header className={styles.header}>
          
            <div className={styles.logo}>
                <Image src={logo} alt='logo'/><h1>Youtube<span>Transcription</span></h1>
                </div>

              <div className={styles.urlWrapper}>
              <Input
              placeholder="Cole a URL do YouTube aqui"
              />
              <Button title="Transcrever"/>
            </div>
        </header>
    </div>

    <div className={styles.container}>
    <main className={styles.content}>
      
      <div className={styles.youtube_player}>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tMWpm_GOLaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    
      <div className={styles.timestamp_content}>
        <CopyButton/>

        <div className={styles.description}>

        <div> <span >00:00</span> <p>Consciousness is perhaps the biggest riddle in nature.</p></div>
        <div> <span>00:00</span> <p>Stripped to its core meaning,</p></div>
        <div> <span>00:00</span> <p>consciousness is what allows us to be aware both of our surroundings</p></div>
        <div> <span>00:00</span> <p>and of our own inner state.</p></div>
        <div> <span>00:00</span> <p>But thinking about consciousness has this habit of taking us round in circles.</p></div>
        <div> <span>00:00</span> <p>We all intuitively know what consciousness is.</p></div>
        <div> <span>00:00</span> <p>It&apos;s this.</p></div>
        <div> <span>00:00</span> <p>It&apos;s what you&apos;re experiencing here, right now.</p></div>
        <div> <span>00:00</span> <p>But once we try to pinpoint just what exactly it is, it leaves us grasping at thin air.</p></div>
        <div> <span>00:00</span> <p>And not just us. Philosophers and scientists struggle to define consciousness.</p></div>
        <div> <span>00:00</span> <p>sripped to ist core meaning,</p></div>
        </div>
      </div>
    </main>
    </div>
    </div>
  )
}
