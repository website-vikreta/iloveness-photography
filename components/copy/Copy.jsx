import React, { useEffect } from 'react';
import styles from '/styles/components/copy.module.scss';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger);

const Copy = () => {
   useEffect(() => {
      const scrollBar = Scrollbar.init(document.body, {
         damping: 0.05,
         delegateTo: document,
         alwaysShowTracks: true,
         speed: 0.2,
      });

      ScrollTrigger.defaults({
         scroller: document.body,
      });
      ScrollTrigger.scrollerProxy(document.body, {
         scrollTop(value) {
            if (arguments.length) {
               scrollBar.scrollTop = value;
            }
            return scrollBar.scrollTop;
         },
      });

      scrollBar.addListener(ScrollTrigger.update);

      const matches = document.querySelectorAll('.textWrapper .text');
      matches.forEach((target) => {
         console.log(target);
         gsap.to(target, {
            backgroundPositionX: '0%',
            stagger: true,
            scrollTrigger: {
               trigger: target,
               scrub: true,
               start: 'top center',
               end: 'bottom center',
            },
         });
      });

      return () => {};
   }, []);

   return (
      <section className={`container ${styles.container}`}>
         <div className={`${styles.textWrapper} textWrapper`}>
            <p className={`${styles.text} text`}>
               I am <b>Moment-Driven</b>, seeking out all
            </p>
            <p className={`${styles.text} text`}>
               the things that make it your day. I am{' '}
            </p>
            <p className={`${styles.text} text`}>
               not <b>Every-Moment-Driven</b>. I don&apos;t{' '}
            </p>
            <p className={`${styles.text} text`}>
               want to snap the shutter without{' '}
            </p>
            <p className={`${styles.text} text`}>
               cause, just handing over a wedding{' '}
            </p>
            <p className={`${styles.text} text`}>
               gallery as if it&apos;s a children&apos;s flip-book.
            </p>
            <p className={`${styles.text} text`}>
               {' '}
               I&apos;d rather give you 100 moments that
            </p>
            <p className={`${styles.text} text`}>
               {' '}
               make the hair on your arms stand{' '}
            </p>
            <p className={`${styles.text} text`}>
               straight up rather than 1000
            </p>
            <p className={`${styles.text} text`}> mundane moments.</p>
         </div>
      </section>
   );
};

export default Copy;
