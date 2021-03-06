import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import { useRef } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import NavBar from "/components/NavBar";
import Language from "/components/Language";

import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export default function App() {
  const router = useRouter()
  if (!Cookies.get('lang')){
    return (<Content />)
  } else {
    router.replace("/" + Cookies.get('lang'))
    return (undefined)
  }
}

export function Content() {
  const contentRef = useRef(null);
  return (
    <div>
      <Head>
        <title>Minecraft RipeNote</title>
      </Head>

      <>
        <div className="hero min-h-screen w-full bg-gradient-to-r from-orange-900/20 to-green-100">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Minecraft RipeNote</h1>
              <p className="py-3">
                Minecraft Wiki which easy-to-understand than others
                <br />
                Writing with beginner person
              </p>
              <label htmlFor="language" className="btn modal-button">
                Select language
              </label>
              <div className="py-8 w-full">
                <button
                  className="btn btn-block btn-outline hover:motion-safe:animate-pulse"
                  onClick={() =>
                    contentRef.current.scrollIntoView({
                      block: "start",
                      behavior: "smooth"
                    })
                  }
                >
                  Let&apos;s explore
                </button>
                <p
                  onClick={() =>
                    contentRef.current.scrollIntoView({
                      block: "start",
                      behavior: "smooth"
                    })
                  }
                  className="text-5xl motion-safe:animate-pulse motion-safe:animate-bounce text-gray-900 hover:text-gray-600 pt-7 flex justify-center"
                >
                  <BsChevronDoubleDown />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={contentRef} style={{ height: 0 }} />
        <NavBar />
        <div className="min-h-[80vh]">
          <div className="divider py-4">Contents</div>
          <div className="flex flex-wrap justify-center gap-4 px-3">
            <div>
              <Link href="/en/Adventure" passHref>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Adventure</h2>
                    <p>
                      Adventure Minecraft world!
                      <br />
                      Tips & HowTo
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        Let&apos;s go!
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/en/Create" passHref>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Create</h2>
                    <p>
                      Let&apos;s build/enchant/make redstone circuit
                      <br />
                      Only few pages here...
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        Let&apos;s go!
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/en/Commands" passHref>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Command</h2>
                    <p>
                      Make something cool
                      <br />
                      Easy-to-understand refference
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        Let&apos;s go!
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/en/Server" passHref>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Server</h2>
                    <p>
                      How to manage/run server?
                      <br />
                      Server maintainer wrote!
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        Let&apos;s go!
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>

      <div className="pt-8" />
      <footer className={styles.footer}>
        Powered by{" "}
        <span className={styles.logo}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </span>
      </footer>
      <Language />
    </div>
  );
}
