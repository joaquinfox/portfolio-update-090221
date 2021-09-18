import Head from "next/head";
import styles from "../../styles/components/blog.module.css";
import cardStyles from "../../styles/components/Home.module.css";
// import Nav from "../components/nav";
import Image from "next/image";
import Link from "next/link";

export default function Accountability() {
  return (
    <div className={cardStyles.container}>
      <Head>
        <title>Simple Sapien</title>
      </Head>
      {/* <Nav></Nav> */}
      <div className={styles.titlebanner}>
        <h2>Simple</h2>
        <Image
          className={styles.simpleSapien}
          src="/images/simple-sapien.png"
          width="150"
          height="100"
          alt="cartoon graphic of Joaquin Fox"
        ></Image>
        <h2 className={styles.fontColor}>Sapien</h2>
      </div>
      <main className={cardStyles.main}>
        <div className={cardStyles.grid}>
          <article>
            <h2>Accountability Teams</h2>

            <p>
              What if there were a way to improve your weekly progress towards
              any goal, that made use of the best knowledge we have on how
              humans learn and attain mastery?
            </p>
            <p>
              Well this isn&apos;t that exaclty. But maybe it&apos;s a step in the right
              direction.
            </p>
            <h3>Less than meets the eye?</h3>
            <p>
              When I first heard the phrase accountability team, it didn&apos;t
              exactly inspire me. The phrase sounds like corporate jargon for
              &quot;here is a new way to badger our employees.&quot; The word
              &quot;accountability" can be taken to mean &quot;who&apos;s fault is it?&quot;, and
              the word &quot;team&quot; sounds vaguely athletic, which doesn&apos;t describe me
              at all. But at it&apos;s root, the idea behind the phrase made sense,
              and so I decided recently to form an accountability team and to
              see what would come of it.
            </p>
            <h3>The Idea</h3>
            <p>
              As typically presented the concept is simple, almost boring. It
              refers to a small group of mentors or peers, to whom you
              periodically report on your progress towards some goal. These wise
              people give you suggestions or commentary, which you then go and
              do your best to apply. Titans of industry, executives, the rich,
              powerful and ambitiious can all use these teams meetings to reach
              ever greater heights. And maybe, so could an aspiring developer
              like me.
            </p>
            <p>
              But some questions come up immediately. Do I know any sage
              developers? And could I get them to dedicate time to me, on a
              regular basis, without having anything to offer in exchange? And
              if I am good at researching and solving problems I come accross,
              and if I am grown up and able to set my own course in life, what
              exactly would I hope to gain from these meetings?
            </p>
            <h3>The Experiment</h3>
            <p>
              With this basic idea in mind I set out to gather a team with the
              following attributes:
            </p>
            <ul>
              <li>
                It would have to be <em>small</em> in order that eveyone would
                have an opportunity to present, and get feedback.
              </li>
              <li>
                The meetups need to be <em>fun</em> and <em>supportive.</em>
              </li>
              <li>
                The meetups would have to occur regularly and consistently in
                order to create the intended sense of commitment
              </li>
            </ul>
            <p>
              I then took these ideas and drafted up a &quot;manifest&quot; which you can
              read here, and posted an invitation to form an accountability team
              on several platforms. At first I had very few interested
              responses, which told me that the idea was either terrible, or
              just too unfamiliar. This also told me that in order to garner
              enough interest the group needed to be as inclusive as possible,
              and open to anyone anywhere, working in any technology, and with
              any level of experience. In the course of a week I had two
              interested people, one developer from Nigeria and a second in
              Mumbai. With that, we were off to the races.
            </p>
            <h3>Nuts and bolts</h3>
            <p>
              I have some experience in Agile project management and so had a
              framework in mind for how to run our standups.
            </p>
            <ul>
              <li>
                We meet twice a month, on Google Meets. Everybody joins with
                video enabled so that we can feel a bit more connected.
              </li>
              <li>
                We have a rotating Scrum Master, who facilitates each standup.
              </li>
              <li>
                Each member presents whatever they happen to be working on,
                discusses any roadblocks they have come across, and sets goal
                they want to accomplish by the following standup (we call this
                interval between meetings a &apos;sprint&apos;)
              </li>
            </ul>
            <p>
              So far the meetups have been motivating and fun. Participants tell
              me they had been hoping for, but not able to find something along
              these lines. These standups seem to meet a need. They are also
              very easy to establish, and so represent a high return on your
              effort. I will post updates on our progress here, but in the
              meantime, if you have a question about, or your own experience
              with accountability teams, I would love to hear about it. You can
              email or tweet me. Thanks for reading!
            </p>
            <p className={styles.datePublished}>September 16, 2021</p>
          </article>
        </div>

        <button>
          <Link href="/">&larr;Back</Link>
        </button>
      </main>
      <footer className={cardStyles.footer}>
        <p>
          Built by
          <a
            href="https://joaquinfox.github.io/profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Joaquin
          </a>
        </p>
      </footer>
      <style jsx>{`
        article {
          line-height: 3;
          padding: 0 15%;
        }
      `}</style>
    </div>
  );
}
