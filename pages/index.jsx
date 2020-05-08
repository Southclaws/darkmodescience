import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import 'tachyons/css/tachyons.min.css';

const theme = {
  bg: ['#f4f4f4', '#111'],
  text: ['#111', '#f4f4f4']
};

const Section = ({ children, title }) => (
  <section>
    <h3 className="mt4">{title}</h3>
    {children}
  </section>
);

const Details = ({ children }) => (
  <>
    <details className="ba">
      <summary className="tc ma2 pointer dim">More Information</summary>
      <p className="ma3">{children}</p>
    </details>
  </>
);

const Content = () => (
  <main className="pa4 measure center">
    <article>
      <Section title="Dark Mode Is Better! ...Right?">
        <p>It&apos;s not quite that simple!</p>
        <p>
          This info page aims to break down some of the myths around{' '}
          <em>dark modes</em> and help you look after your eyes!
        </p>
      </Section>

      <Section title="It's Healthier!">
        <p>
          Not necessarily. Much of the research out there claims otherwise.
          Using dark mode in a dark room is likely better than light mode{' '}
          <em>however</em> using it in a light environment is actually more
          likely to put more strain on your eyes. In general, you&apos;re best
          to just turn a light on and work in a light environment.
        </p>
        <Details>
          Your iris sphincter muscle must work harder to allow more light in when
          you&apos;re focusing on a dark screen. However if your environment is
          bright then too much light from the surroundings will bleed in. This
          results in both your cillary muscle working extra hard to allow more
          light from the screen and then your retina suffering from overexposure
          from ambient light.
        </Details>
      </Section>

      <Section title="It's Better for reading and productivity">
        <p>
          Generally it is more productive for working, concentration and reading
          speed to use{' '}
          <cite>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/23654206">
              dark text on a lighter background.
            </a>
          </cite>
        </p>
        <Details>
          This is known as &quot;Positive Polarity&quot; as in, dark text on a
          light background. It also has implications for font size too. It can{' '}
          <cite>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/25141597">
              improve perception of detail
            </a>
          </cite>{' '}
          resulting in an increased information density for constrained
          interface sizes.
        </Details>
      </Section>

      <Section title="It's Better for Battery Life">
        <p>
          This myth is easy. If your screen is OLED, darker pixels will use less
          energy. If your screen is not OLED, then it makes no difference.
        </p>
        <Details>
          OLED and AMOLED displays contain an individual light source for each
          pixel. Other common display types such as LCD use a single (or a few,
          large) light sources for the entire screen. This is important because
          (AM)OLED displays will use more or less energy depending on the sum
          total of energy output by the pixels. This means lots of dark pixels
          means lower energy usage!
        </Details>
      </Section>

      <Section title="In Conclusion">
        <p>
          <ul>
            <li>Dark mode isn&apos;t a magical solution to eye strain.</li>
            <li>Match the ambient light of the surroundings.</li>
          </ul>
        </p>
      </Section>
    </article>
  </main>
);

const ModeSwitch = ({ dark }) => {
  return dark === '1' ? (
    <Link href="/">
      <a>Light mode</a>
    </Link>
  ) : (
    <Link href="/?dark=1">
      <a>Dark mode</a>
    </Link>
  );
};

const Header = ({ dark }) => (
  <header className="pt5 tc">
    <h1 className="ma0">Dark Mode Science!</h1>
    <p>
      <ModeSwitch dark={dark} />
    </p>
  </header>
);

const Footer = () => (
  <footer className="pa3 tc f7">
    <p>
      Made by <a href="https://www.southcla.ws">Southclaws</a>
    </p>
  </footer>
);

const Home = ({ dark = 0 }) => (
  <>
    <Head>
      <title>Dark Mode Science!</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="sans-serif">
      <Header dark={dark} />
      <Content />
      <Footer />

      <style jsx global>{`
        body {
          background-color: ${theme.bg[dark]};
        }
        p,
        h1,
        h2,
        h3,
        details {
          color: ${theme.text[dark]};
        }
        a {
          color: ${theme.text[dark]};
        }
        a:hover {
          color: ${theme.text[dark ^ 1]};
          background-color: ${theme.bg[dark ^ 1]};
        }
      `}</style>
    </div>
  </>
);

Home.getInitialProps = ({ query: { dark } }) => ({ dark });

export default Home;
