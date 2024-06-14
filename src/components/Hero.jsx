import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import play_store from '../assets/Google-Play-Store-Button.png';
import app_store from '../assets/App-Store-Button-transparent.png';

const Hero = () => {
  return (
    <section className={`relative flex flex-row w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-start`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#17CE92]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Welcome</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            to the future of Electric Vehicles
          </p>
          <br />
        </div>
      </div>
      <div
        className={`absolute inset-0 top-[120px]  bottom-[20px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-end gap-5 justify-center sm:justify-end sm:items-right`}
      >
        <div
          className={`absolute inset-0  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-end gap-5 justify-center sm:justify-end sm:items-right`}
        >
          <div>
            <img width={200} src={play_store} />
          </div>
          <div>
            <img width={200} src={app_store} />
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 top-[200px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-end gap-5 justify-end`}
      >
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
