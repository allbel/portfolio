import React from 'react';
import s from './Main.module.scss'
import sm from '../../common/styles/container.module.scss'
import {Link, NavLink} from "react-router-dom";
import myPhoto from '../../assets/image/i.jpg';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';

const Main = () => {
    return (
        <div id={'main'} className={s.mainBlock}>
            <div className={sm.container}>
                <Fade>
                    <div className={s.text}>
                        <span className={s.subtitle}>Welcome to my world</span>
                        <h1 className={s.title}>
                            Hi, I’m <span className={s.name}>Aleksandr Belozerov</span>
                            <br/>
                            <ReactTypingEffect
                              text={["a Frontend Developer.", "a Professional Coder."]}
                              speed={50}
                              eraseSpeed={50}
                              eraseDelay={3000}
                              typingDelay={2000}
                            />
                        </h1>
                        <div className={s.desc}>
                            <p>I specialize in the development of dynamic SPA applications. Now I am improving my
                                skills in this direction and expanding them with new technologies. I would
                                like to find a project work/full-time job
                                in a creative company with up-to-date
                                task and collaborative team.</p>
                        </div>
                        <div className={s.socialBox}>
                            <span className={s.socialTitle}>To find me</span>
                            <ul className={s.socialList}>
                                <li>
                                    <a href="https://t.me/megagepard">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAEi0lEQVRYhe2YbWyTVRTHf+c+ZVMYCCEqMWJou4IvMbRu6uyLY5i4iBANKiIEQWIwJAgkviXGGIkYE79iNEY/aUxMjImIMIkhiGwLMWztjImLpRsvKvgBhMnY5vo8xw9bZ9t1Xftsbn7gfOl9/vfck1/Puec+L3DVrtr0mkw3QMYOJJOVVT3Wkj7PzFTj0gW9GX3aAY/EUwEjsk2UTcAc4LzlmNh9NYt+BvBMB5SqSnP7yUYxznaQRhSTNT0/bZz1wGtTDnjsWHKOXWFtbEl0bxPD4rEKaJDBzHhKAFvbTlSryLNpkS3AvHEXqPNTZvifAaqqNMe7HjAiWxxYDVilrnU8nnhmPOlNMlRGzyZEtykEirieZyibJk+/FAl654mIwiRmMLeMWryMyj6M3ITq/AKz8QzchAFV1TTHu5YbkR0OPMx4FRH6QV9VJCyqNWM4xbOvXAE2d3bO1v7Kp1oSXTtE5HYdfwkInY7Nk5ZhM/D4WG6q6h4wU0btk+cEnVvqFhbhk8syc+ss07tdkR3FfI3llAdYdhlz7S/QrZGg/9PmeGodyFtFvYX+vy+c6cyVxrBMGVHdKXBbGVBDgVXb08La+pA/2dJxYrk6pgmoKLZG4YdYyHdvtjYqg63Hu29VS5/XPp4WtKpcMEBV2NNT5by8IhAYONp2okYds3c8OAADiXxtBPBAMlk557L1gYNuYPTZVKpdEGRzNOjdC9ByPOlXY/YDJf1R1dwOzgG87rL1osJGl2AALdi6LlLrOw3wfXvyehXrG+DGUgOoxSjAkUypqu0SzAF5e/DiqWXRWv9pgIMd52YZsfYD1WXESVu9nh/zxZEMXuPwfr9hBUKsjKB/ABuiIe+3GeHw4cOeGU7v5yB3lxEHoDMcXtiXL45ksLbWfykS8tajZgXwMdBTLJoKhwYHJRgN+UbgVFVmzL3lQ5CHyoRDZHR5Ia+Lh++BTUDTgWSycvYV60GjPKHKo8DsYTdb0d1nf/G9uWaN5GyLlkT3bpBN5cIBqEp7QfBSFh/sODeryu5b5Yi+LrBg8OKpGxoaGtI5cO2prSrynhs4AEUaYiHvd/l6ScdJ49IFvZG7vJ8Z1T3APM/cRdHs+dZEd6OK7HELB2i6wBlYMmDGxFR8BagRXZmt2+hLlPFAWiByV0PIe3HCgOHgwt+AhCqPZLRjHcmbRVnmHg4ULdgg4OaOIboPqD6aSC0GSNvWM0woeyAU7mBwA+iwb+hXVg1HX++S619TM3mAkZCvDfhdhJXNHV0xYEkBN6ecmI5TuEHABaCIqMDXQBRbdubPK/qOOs49QHdpATl3f+2is5MGCOAM7UMPoquz2RTdFQv5X4nVVLd5BuygoF+OG2yMA3pCgNaVikPAn1mSDWyJhfxvZIS6ukBPOOh7TNFdFCl5sQ52DRgOL+xDeHf4ckCUtdGQ76N8PxFxhqB1FXChIIAWB3T94q6qcjSRCquH0/V3Vp8Zz/9Ix0mv5ThfAKGRGPDrjAH7jrq6wJgPJlP6+a219cy19szBF0SpF+EsaXtXpDaQmkqGq/a/s38Amvy0QHNphKEAAAAASUVORK5CYII="/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://vk.com/gepard09">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAD3klEQVRYhe2WX2hbZRjGf+/JSWmY1Dr/DMG6JmllWLY2XetqkrYogl44hihDVNA5RBARtYKwqlU3RIaIXqgIOsEL0Qv1Qp061NB26VqM66pGZtu0RSfihHUqrG2anNeLrum/8x2b2guFPFc57/s87/fjy+H7DpRUUkkllfSflgCoqiSHxp9B9VaQ8vO9M8B78UjoBbdg72DmaRHr5hUN1ZwIRyv9U/vq6uqyXosnB8c6FXYhYi3KZ2aR+6+LBM8C2AC9JzJRC+vJ87zzCgFNPUMTX7XVVx9fPtwSCanqdreFVdkxmQ2cBN4wwfWemLhF1TkwH1ik7TbaA7wCYAFYKjOmQT7H2etWzzv5DuA3U07RK0y9RCJhC85zpr7A8PxvCyAWCX2jcMp9IW7v6/s5sLze1lj7u6LPmhbxkv+i6r0oWwztwVhD8IslgCKiCB8YAhvzgdl7XTsqyWLhUqnMhah2mR36hIgU/vPCy2k5vG+KCHQkEgl7xSh8s8UCTvvkZeByA9yH8Uj48OJKATAaCR4FyRjmBssqq+8qFma5eofGdgJ3G9p/kOfh5cUCoIg4qvqaabiiz/f3j1SsFS6ZGgmLw5tmhz4Qbwr/ZAQEwPYdAs4ZJmzKl1n7VgsksnBmJYdGL1Of7zPgUlevyqF4JPyOW28JYOu2zZOIvm1aVEUe6RmaaCyErayYvKLSnkql/MnjY5tVrW6gxmAdkGn7QdMca0XF8e/HvItlPsd5d2Dg1MVzELbfNFihfdq38VcVhj2OlAnbZlc0WjVlmuO6A72DYwcEOk0h4GugE+Qe0Ds8fF6aEctpitXXfO9lWrmDgH8mfxA47ZFrBo78CziAs5X2zPA/mVwBW1pq/wTdA6hbf520aTIb+CSRTl/gZXIFBIhHwocRfX39uZboBjsb+DKR+vESk8EICGCdK3sUJL3+XAsSuMbvs7u7vxutcmXwCkejVVO2lbsJGF/D2qdRbS7Pl28Q4UbA496Wq305q9cN0niOLdaxwfHqPNoNXLlaOlVebG0MdSw8q5UcGutC5SmP2LBt09ayNVT4jPPcwXldGwlOSD5/PcLJ1QIi+teSRxEn3hDuEuRxj9RVuRwfpdPpsqIAAWJNtRl7Or8DxPVKWvWcSPCgwKseluYz2fL9RQPC3PETjwTvVNGdoD+sFfKXkeBDwDFTX5DH+lLjW4oGnFdrQ/jjWENoq6jeBvopkFvusdQyvg67d0seiz2Yr1QLWyvmYNdB/f0jFbMBX7vlsE3RGoRvY/WhlxZ/Gbupb3A06iD3CbJhvqaKI5Z+HmsIv7UebCWVVFJJ/3f9DTvfSC6W3NHiAAAAAElFTkSuQmCC"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.codewars.com/users/megagepard">
                                        <img
                                            src="data:image/png;base64,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"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/allbel">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAEsElEQVRYhe2XT2xUVRSHv/Nmpu0MbVESSVAobYcSAmo7dQT6F2okmNRExcQYFy5cEVlg4sIAkYVIUBYKmLgxxJ0mxOAGSUhUUttOihmYqpQQ6rS1BcQIUiulhTd9xwUDDG/um2mnKJv+klm83z33nC/v3nveHZjTnB6spNCJPT395XaR1S4izwC1QCXwUHp4FBhS6LVUvtfQjW+aV6z4538B7OxNLrcc6x0VfRUITXPadYQvp1Q/XBcJ9/8ngLHYSFBD9i5VtgL+mRTJkA3ss0dlZ1tb1eR9A+xIJGt8yGHg8QLB3FV7nJS1qTVa+Xv+0DyK9Q5FHHWOAY/cF7i0FM6rQ3vrU9U/54rLCZh+c933G+62FM6nbHm6bXXVJa8Yy2sgFhsJppfVBadngARwowCmXwU6bj8ILA4U6ddH+/uLZwyoIXsXhj1nTVkvN0eq6/1+lqpwANBpgHULuro5Ul3TFKleD9J3txBry8et7V4TjUvc2ZtcLip9GE6rNREINTYumbj93NU78ApKhaAdN21rhPGhy8ULl5UzkVro+FijOFWp0eH329raUnfmJAaOAO0Zaa/ZttSYltrYLtJ9ztxK5hME7gA211UfMkT9lf6dNeZQCSL3vPjSQICdwJtZLG6jp6e/PN2EjZpKpWq8xqYrFV1ucF8/3tdXmhfQLrLayfWFUGdWJzoWGwkKlBmG5gXsULvbzAJMf1vNbPBVS134yGwAb+1f3WIaE9Ws2qZTXOuZXXRH4Wh31VRX/cU9JzktNdQ2AVYZsyq/tNSFz80eD0REET08ndomwHJzVgZmyXWvVJIGd77bMAHaHimDswJySXHmGeyU2zAB/umR8wlVLfiC65YoTxrsy27DBPiHR85FsZ8GN8yKKq2us2fLENmUNSBkXb+yAYUfvRKr6sfxeDJrn8xYk4G9GG5IonrC7WX3QZXvvDPLygmfdTTWO/JYIVzxeDzQlRj8CJXNpnFHfB1uL2tP9fT0l6eKfReArM9Ohq4Ksl/V91lzfcXF/GAXQ5O+iZfA2ga6yiPsb7toYnHbqlXXcgICdCeS+xTZmmGd49aSPOwKVVFNOCInLWV3U331b3eh4oFJ/4J3URqAJvJ0AUH3N0XCb7l9433QwtoH3Mywhm1bVqpyzJ1XReotldOZcADRaNQWcQ4Ba/PBARMpy7ffzGJQQ6RqCJXdGdazgYC+HXRKNgHfusJPNEYqPzHlaapddhphWx44UPasq60cnDYgQIlzZY+onsqwNk+WjvnGSqeet0SeE+RFLFr9fl4QEc9b9biEPgfGPOFETo6VTe31HPacCHTFkxX4pBOoAFB0S0sk/GmuOcY8iYEOoNXtK5wX9a/JddA83yBAczQ8rKIbEC4BCPJBZ2/yjZn2QjE3/2FV38Z8XSAnIEBLXficRSCqSAwoE5WDkz4Z7UoMaFdiYDp/mAzEchL1N7TWLz2TLzQvIEBj3ZILwakr6xF9DxgvCApAmAR2lKSuNEynf96aMkP9EB9aZFnOdoTXgAVNdVVWrkMC0H1q8CCWXtWUHmiOhodnUq/g20lfX1/R6M2SDcVTwePR6KPXc8WqqiUiTqG15jSnB6l/AX7rnCDwL4xNAAAAAElFTkSuQmCC"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Tilt className="Tilt" options={{ max: 35 }} style={{ transition: '.05s' }}>
                        <div className={s.photo}>
                            <img src={myPhoto} alt=""/>
                        </div>
                    </Tilt>
                </Fade>
            </div>
        </div>
    );
};

export default Main;