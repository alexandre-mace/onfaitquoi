import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const data = [
    {
      "icon": "🚄",
      "iconSizeCorrection": 6,
      "title": "Se déplacer en train et non en avion",
      "description": "La plupart des trajets en avion ne passent pas dans le budget cible pour respecter l'accord de Paris. Paris-New York = 1.6 tonne CO₂e, le budget entier d'une personne pour se loger etc : 2 tonnes."
    },
    {
      "icon": "🥗",
      "title": "Diviser par 3 sa consommation de viande",
      "description": "La viande pour un Français en 2019 compte en moyenne pour 920kgCO₂e. Il faut diviser ce budget par au moins 3 pour respecter le budget de 2 tonnes par personne et par an."
    },
    {
      "icon": "⚡️",
      "title": "Ne plus se chauffer à l'énergie fossile",
      "description": "Pompe à chaleur, électrique ou chauffage au bois, il est possible d'économiser 1180kgCO₂e."
    },
    {
      "icon": "🚲",
      "iconSizeCorrection": 6,
      "title": "Privilégier le vélo pour les petits trajets",
      "description": "La voiture compte pour 2030kgCO₂e, à elle seule elle consomme plus que le budget cible total par personne et par an."
    },
    {
      "icon": "🚗",
      "iconSizeCorrection": 6,
      "title": "Pour une voiture : il faut qu'elle soit petite et électrique",
      "description": "La littérature scientifique est claire, il faut privilégier l'électrique à la voiture thermique. Cependant, le second paramètre important à prendre en compte est le poids de la voiture. Remplacer le parc actuel par des SUV électriques n'est pas soutenable."
    },
  ]

  return (
    <>
      <Head>
        <title>On fait quoi ?</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/sparkles_2728.png" />
      </Head>
      <main className="container mx-auto mt-3 md:mt-6 px-7 pb-16 md:pb-36">
        <header className="flex justify-between">
          <div></div>
          <div className="">
            <a
              href="https://climatelab.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              par Climate Lab ⚗️
            </a>
          </div>
        </header>

        <section className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            50° en France, c'est pas cool.<br/>
            Alors on fait quoi ?
          </h1>

        </section>

        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
          La sécurité en eau, la sécurité alimentaire et notre santé sont menacées. Des pertes de biodiversité et d'écosystèmes sont annoncées.
        </p>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
          Les faits sont clairs, c'est le moment d'agir. <br/>
          L'enjeu est de taille : <b>assurer un futur vivable</b>.
        </p>

        <div className={"flex justify-center gap-4 mt-6 md:mt-8"}>
          <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
             href="#solutions">Au travail 💪</a>

          <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-50 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/0 hover:ring-slate-900/15" href="https://threadreaderapp.com/thread/1522175136388067334.html" target="_blank" rel="noopener noreferrer">
            Résumé des faits 📖</a>
        </div>

        <div className="max-w-6xl mx-auto mt-28">
          <h2 className="mt-4 text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">Diviser sa consommation par 5, c'est possible ! ✨</h2>
          <p className="text-slate-500 max-w-3xl mt-2">L'empreinte carbone moyenne d'un Français se situe autour de 10 tonnes CO₂e, le budget maximum cible par personne pour respecter l'accord de Paris est de 2 tonnes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-28" id="solutions">
          {data.map((solution, index) => (
              <div key={index} className="text-center md:text-start">
                <div className="inline-flex text-5xl h-20 w-20 p-4 items-center justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10">
                  <div className={solution.iconSizeCorrection ? '-translate-y-1' : ''}>
                    {solution.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mt-4">
                  {solution.title}
                </h2>
                <p className="mt-2 col-span-2 text-sm leading-6 font-light text-slate-500">
                  {solution.description}
                </p>
              </div>
          ))}
        </div>

        <div className="mt-28 text-center">
          <h2 className="mt-4 text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight mb-3">Pour aller plus loin..</h2>
          <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
             href="https://nosgestesclimat.fr/" target="_blank" rel="noreferrer noopener">Calculer mon empreinte carbone 🔬</a>
        </div>
      </main>
    </>
  )
}
