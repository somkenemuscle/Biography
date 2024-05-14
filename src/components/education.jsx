import React from 'react'
import einstein_wife from '../image/EINSTEIN_WIFE.png';
import education_einstein_school from '../image/eisteins-catholic-schl.png';
import polyimg from '../image/polytechnic.jpg';
import '../styles/education.css';

function education() {
    return (
        <div id='education-container'>
            <img src={education_einstein_school} className="edu_school_pic" alt="..." />

            <p className="education-text">
                Albert attended Petersschule on Blumenstrasse, a Catholic elementary school in Munich from the age of five. When he was eight, he was transferred to the Luitpold Gymnasium, where he received advanced primary and then secondary school education.
                In 1894, Hermann and Jakob's company tendered for a contract to install electric lighting in Munich, but without success—they lacked the capital that would have been required to update their technology from direct current to the more efficient, alternating current alternative.
            </p>
            <p className="education-text">
                In 1880, the family moved to Munich's borough of Ludwigsvorstadt-Isarvorstadt, where Einstein's father and his uncle Jakob founded Elektrotechnische Fabrik J. Einstein & Cie,
                a company that manufactured electrical equipment based on direct current.
            </p>
            <p className='education-text'>
                A family tutor, Max Talmud, said that only a short time after he had given the twelve year old Einstein a geometry textbook, the boy "had worked through the whole book. He thereupon devoted himself to higher mathematics ... Soon the flight of his mathematical genius was so high I could not follow."
                Einstein recorded that he had "mastered integral and differential calculus" while still just fourteen.His love of algebra and geometry was so great that at twelve, he was already confident that nature could be understood as a "mathematical structure".At thirteen, when his range of enthusiasms had broadened to include music and philosophy,Einstein was introduced to Kant's Critique of Pure Reason. Kant became his favorite philosopher.
            </p>

            <div id='edu2-container'>
                <img src={polyimg} className="poly_pic" alt="..." />
                <p className="education-text">
                    In 1895, at the age of sixteen, Einstein sat the entrance examination for the federal polytechnic school (later the Eidgenössische Technische Hochschule, ETH) in Zürich, Switzerland.
                    He failed to reach the required standard in the general part of the test,but performed with distinction in physics and mathematics.On the advice of the polytechnic's principal, he completed his secondary education at the Argovian cantonal school (a gymnasium) in Aarau, Switzerland, graduating in 1896.
                    While lodging in Aarau with the family of Jost Winteler, he fell in love with Winteler's daughter, Marie. (His sister, Maja, later married Winteler's son Paul).
                    In January 1896, with his father's approval, Einstein renounced his citizenship of the German Kingdom of Württemberg in order to avoid conscription into military service.
                </p>
                <p className='education-text'>
                    The Matura (graduation for the successful completion of higher secondary schooling) awarded to him in the September of that year acknowledged him to have performed well across most of the curriculum, allotting him a top grade of 6 for history, physics, algebra, geometry, and descriptive geometry.
                    At seventeen, he enrolled in the four-year mathematics and physics teaching diploma program at the federal polytechnic school. Marie Winteler, a year older than him, took up a teaching post in Olsberg, Switzerland.
                </p>
            </div>

            <div id='edu3-container'>
                <img src={einstein_wife} className="wife_pic" alt="..." />
                <p className='education-text'>
                    The five other polytechnic school freshmen following the same course as Einstein included just one woman, a twenty year old Serbian, Mileva Marić.
                    Over the next few years, the pair spent many hours discussing their shared interests and learning about topics in physics that the polytechnic school's lectures did not cover.
                    In his letters to Marić, Einstein confessed that exploring science with her by his side was much more enjoyable than reading a textbook in solitude. Eventually the two students became not only friends but also lovers.
                    Einstein married Mileva Maric,a colleague he met at the federal polytechnic school he enrolled in,  in January 1903. Their children, Hans Albert and Eduard, were born in 1904 and 1910.
                    (The fate of a child born to them in 1902 before their marriage, Lieserl, is unknown).
                    When Marić learned of his infidelity soon after moving to Berlin with him in April 1914.
                </p>
                <p className='education-text'>
                    She returned to Zürich, taking Hans Albert and Eduard with her
                    Einstein and Marić were granted a divorce on 14 February 1919 on the grounds of having lived apart for five years.
                    As part of the divorce settlement, Einstein agreed that if he were to win a Nobel Prize, he would give the money that he received to Marić. He won the prize two years later
                    Einstein divorced Maric in 1919 and soon after married Elsa Löwenthal. Löwenthal died in 1933.
                </p>
            </div>

        </div>
    )
}

export default education