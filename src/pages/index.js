import Image from 'next/image'

export default function Home() {
  return (
    <>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="font-medium text-heading text-3xl md:text-5xl lg:text-6xl leading-[2.5rem] md:leading-[4rem] lg:leading-[5rem] order-last md:order-first mt-8 md:mt-0">
          Hi, I&apos;m Riley. <br />
          I build websites.
        </h1>
        <Image
          src="/images/profile-image.jpg"
          alt="Profile picture"
          className="h-32 w-32 rounded-full"
          width={128}
          height={128}
        />
      </div>

      <article className="prose max-w-none mt-8 lg:mt-20">
        <p>Aussie software developer with over 4 years experience. I&apos;m a big fan of building mobile and web applications that focus on simplicity &amp; accessibility.</p>

        <p>I&apos;m currently a full-stack developer at <a href="https://www.airteam.com.au/" target="_blank" rel="noreferrer" title="Opens in a new window">Airteam</a>.</p>

        <p>
          <a href="https://github.com/rilrom" target="_blank" rel="noreferrer" title="Opens in a new window" className="inline-block icon">
            <span className="sr-only">Github</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/riley-pearce-8374b5211/" target="_blank" rel="noreferrer" title="Opens in a new window" className="ml-4 inline-block icon">
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </a>
          <a href="mailto:rilrom2@hotmail.com" className="ml-4 inline-block icon">
            <span className="sr-only">Email</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </a>
        </p>

      </article>
    </>
  )
}
