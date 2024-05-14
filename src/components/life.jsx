import React from 'react';
import '../styles/life.css';
import life_einstein_png from '../image/EINSTEIN.png'

export default function life() {
    return (
        <div id='life-container'>
            <img src={life_einstein_png} className="life_einstein_png" alt="..." />
            <p className="life-text">
                Einstein was born on March 14, 1879, in Ulm, Germany, a town that today has a population of just more than 120,000.
                His parents, secular Ashkenazi Jews, were Hermann Einstein(a salesman and engineer), and Pauline Koch.
            </p>
            <p className="life-text">
                In 1880, the family moved to Munich's borough of Ludwigsvorstadt-Isarvorstadt, where Einstein's father and his uncle Jakob founded Elektrotechnische Fabrik J. Einstein & Cie,
                a company that manufactured electrical equipment based on direct current.
            </p>
            <p className="life-text">
                As a child, Einstein displayed an early curiosity and fascination with mathematics and science. He was a slow learner when it came to speaking and did not start talking until the age of three. This led his parents and teachers to initially worry about his intellectual development.
                At the age of five, Einstein was introduced to a magnetic compass, which sparked his interest in science and set him on a path of inquiry and exploration. His uncle, Jakob Einstein, an engineer, and Max Talmud, a family friend, provided him with books on mathematics and science, fostering his intellectual development.
            </p>

                         
        </div>
    )
}
