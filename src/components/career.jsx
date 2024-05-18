import React from 'react'
import '../styles/career.css'
import career_graph1 from '../image/Mask group (1).png';
import career_img2 from '../image/Einstein-with-habicht-and-solovine.jpg';
import career_img7 from '../image/MillikanLemaitreEinstein.jpg';
import career_img9 from '../image/440px-Photoelectric_effect_in_a_solid_-_diagram.svg.png';
import career_img11 from '../image/anothernews.jpg';
import career_img12 from '../image/Niels_Bohr_Albert_Einstein4_by_Ehrenfest_cr.jpg';
import career_img13 from '../image/Solvay_conference_1927.jpg';
import { Popover } from 'bootstrap';
import { useEffect } from 'react';


function Career() {
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl));

    return () => {
      // Cleanup if needed
      popoverList.forEach(popover => popover.dispose());
    };
  }, []); // empty dependency array to mimic componentDidMount
  return (
    <div>
      <section>
        <h3>Early academic career (1908-1933): </h3>
        <p className='career-text'>
          Einstein's career sent him to multiple countries.He earned his doctorate from the University of Zurich in 1905 and subsequently took on professor positions in Zurich (1909), Prague (1911) and Zurich again (1912).
          Einstein's sabbatical as a civil servant approached its end in 1908, when he secured a junior teaching position at the University of Bern.
        </p>
        <p className='career-text'>
          In 1909, a lecture on relativistic
          <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="In physics,electromagnetism is an interaction that occurs between particles with electric charge via electromagnetic fields. The electromagnetic force is one of the four fundamental forces of nature. It is the dominant force in the interactions of atoms and molecules. ">
            <span id="popover">electrodynamics</span>
          </span>
          that he gave at the University of Zurich, much admired by Alfred Kleiner, led to Zürich's luring him away from Bern with a newly created associate professorship.Promotion to a full professorship followed in April 1911, when he accepted a chair at the German Charles-Ferdinand University in Prague, a move which required him to become an Austrian citizen of the
          <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Austria-Hungary, often referred to as the Austro-Hungarian Empire or the Dual Monarchy, was a multi-national constitutional monarchy in Central Europe[c] between 1867 and 1918. Austria-Hungary was a military and diplomatic alliance of two sovereign states with a single monarch who was titled both emperor of Austria and King of Hungary.[7] Austria-Hungary constituted the last phase in the constitutional evolution of the Habsburg monarchy: it was formed with the Austro-Hungarian Compromise of 1867 in the aftermath of the Austro-Prussian War and was dissolved shortly after Hungary terminated the union with Austria on 31 October 1918. ">
            <span id="popover">Austro-Hungarian Empire</span>
          </span>
          .His time in Prague saw him producing eleven research papers.Einstein's sabbatical as a civil servant approached its end in 1908, when he secured a junior teaching position at the University of Bern.
          In 1909, a lecture on relativistic electrodynamics that he gave at the University of Zurich, much admired by Alfred Kleiner, led to Zürich's luring him away from Bern with a newly created associate professorship. Promotion to a full professorship followed in April 1911, when he accepted a chair at the German Charles-Ferdinand University in Prague, a move which required him to become an Austrian citizen of the Austro-Hungarian Empire.
          His time in Prague saw him producing eleven research papers.
        </p>


        <div className='row'>
          <div className='col-xl-12 col-lg-12'>
            <img src={career_img2} className="career_img_2" alt="..." />
          </div>
          <div className='col-xl-12 col-lg-12'>
            <span className='career-text'>
              In July 1912, he returned to his alma mater, the ETH Zurich, to take up a chair in theoretical physics. His
              teaching activities there centered on
              <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Thermodynamics is a branch of physics that deals with heat, work, and temperature, and their relation to energy, entropy, and the physical properties of matter and radiation. The behavior of these quantities is governed by the four laws of thermodynamics, which convey a quantitative description using measurable macroscopic physical quantities, but may be explained in terms of microscopic constituents by statistical mechanics.">
                <span id="popover">thermodynamics</span>
              </span>
              and analytical mechanics, and his research interests
              included the molecular theory of heat,
              <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Continuum mechanics is a branch of mechanics that deals with the deformation of and transmission of forces through materials modeled as a continuous medium (also called a continuum) rather than as discrete particles. The French mathematician Augustin-Louis Cauchy was the first to formulate such models in the 19th century. ">
                <span id="popover">continuum mechanics</span>
              </span>
              and the development of a relativistic theory of
              gravitation. In his work and contribution on the latter topic, he was assisted by his friend, Marcel Grossmann, whose
              knowledge of the kind of mathematics required was greater than his own. In the spring of 1913, two German visitors, Max Planck
              and Walther Nernst, called upon Einstein in Zürich in the hope of persuading him to relocate to Berlin. They offered him membership of the Prussian Academy of Sciences, the directorship of the planned Kaiser Wilhelm Institute
              for Physics and a chair at the Humboldt University of Berlin that would allow him to pursue his research supported by a professorial salary but with no actual and enormous teaching and learning duties to put unto him a heavy  burden. Their invitation was all the more appealing to him because Berlinhappened to be the
              home of his latest
            </span>
          </div>
        </div>
        <p className='career-text'>girlfriend, Elsa Löwenthal. He duly joined the Academy on 24 July 1913, and moved into an apartment in the Berlin district
          of Dahlem on 1 April 1914. He was installed in his Humboldt University position shortly thereafter.The outbreak of the First World War in July 1914 marked the beginning of Einstein's gradual estrangement from the nation of his birth.
        </p>
        <p> When the
          <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=" The ″Manifesto to the Europeans″ was a pacifistic proclamation written in response to the Manifesto of the Ninety-Three that included as its authors, German astronomer, Wilhelm Julius Foerster, and German physiologist, Georg Friedrich Nicolai.">
            <span id="popover"> "Manifesto of the Ninety-Three"</span>
          </span>
          was published in October 1914—a document signed by a host of prominent German thinkers that justified Germany's belligerence—Einstein was one of the few German intellectuals to distance himself from it and sign the alternative, eirenic "Manifesto to the Europeans" instead. But this expression of his doubts about German policy did not prevent him from being elected to a two-year term as president of the German Physical Society in 1916. And when the Kaiser Wilhelm Institute for Physics opened its doors the following year—its foundation
          delayed because of the war—Einstein was appointed its first director, just as Planck and Nernst had promised. Einstein resigned from the Prussian Academy in March 1933. His accomplishments in Berlin had included the completion of the general theory of relativity, proving the
          <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=" The Einstein–de Haas effect is a physical phenomenon in which a change in the magnetic moment of a free body causes this body to rotate. The effect is a consequence of the conservation of angular momentum. It is strong enough to be observable in ferromagnetic materials.  ">
            <span id="popover"> Einstein–de Haas effect</span>
          </span>
          , contributing to the quantum theory of radiation, and the development of Bose-Einstein statistics.

        </p>


        <h3>1919: Putting general relativity to the test </h3>
        <p className='career-text'>
          In 1907, Einstein reached a milestone on his long journey from his special theory of relativity to a new idea of gravitation with the formulation of his equivalence principle, which asserts that an observer in an infinitesimally small box falling freely in a gravitational field would be unable to find any evidence that the field exists. In 1911, he used the principle to estimate the amount by which a ray of light from a distant star would be bent by the gravitational pull of the Sun as it passed close to the Sun's photosphere (that is, the Sun's apparent surface). He reworked his calculation in 1913, having now found a way to model gravitation with the Riemann curvature tensor of a non-Euclidean four-dimensional spacetime.
        </p>
        <p className='career-text'>
          By the fall of 1915, his reimagining of the mathematics of gravitation in terms of Riemannian geometry was complete, and he applied his new theory not just to the behavior of the Sun as a gravitational lens but also to another astronomical phenomenon, the precession of the perihelion of Mercury (a slow drift in the point in Mercury's elliptical orbit at which it approaches the Sun most closely)
        </p>
        <p className='career-text'>
          A
          <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=" The May 29, 1919, total solar eclipse occurred because the Moon aligned between the Sun and the Earth in which they appeared overlapped to a certain population of observers on the Earth. The Moon covered the Sun's light, which led to an absence of light for a small period of time. The solar eclipse of May 29, 1919, was the longest solar eclipse that had been observed and recorded up until June 8, 1937. This eclipse was visible through locations like southeastern Peru and northern Chile. ">
            <span id="popover">total eclipse of the Sun that took place on 29 May 1919 </span>
          </span>
          provided an opportunity to put his theory of gravitational lensing to the test, and observations performed by Sir Arthur Eddington yielded results that were consistent with his calculations. Eddington's work was reported at length in newspapers around the world. On 7 November 1919, for example, the leading British newspaper, The Times, printed a banner headline that read: "Revolution in Science – New Theory of the Universe – Newtonian Ideas Overthrown".
        </p>


        <h3>1921–1923: Coming to terms with fame</h3>
        <p className='career-text'>
          With Eddington's eclipse observations widely reported not just in academic journals but by the popular press as well, Einstein became "perhaps the world's first celebrity scientist", a genius who had shattered a paradigm that had been basic to physicists' understanding of the universe since the seventeenth century.[102]

          Einstein began his new life as an intellectual icon in America, where he arrived on 2 April 1921. He was welcomed to New York City by Mayor John Francis Hylan, and then spent three weeks giving lectures and attending receptions. He spoke several times at Columbia University and Princeton, and in Washington, he visited the White House with representatives of the National Academy of Sciences.
        </p>
        <p className='career-text'>
          He used his time in the British capital to meet several people prominent in British scientific, political or intellectual life, and to deliver a lecture at King's College.In July 1921, he published an essay, "My First Impression of the U.S.A.", in which he sought to sketch the American character, much as had Alexis de Tocqueville in Democracy in America (1835)
          He wrote of his transatlantic hosts in highly approving terms: "What strikes a visitor is the joyous, positive attitude to life ... The American is friendly, self-confident, optimistic, and without envy."

          In 1922, Einstein's travels were to the old world rather than the new. He devoted six months to a tour of Asia that saw him speaking in Japan, Singapore and Sri Lanka (then known as Ceylon).
        </p>
        <p className='career-text'>
          After his first public lecture in Tokyo, he met Emperor Yoshihito and his wife at the
          <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=" The Tokyo Imperial Palace (皇居, Kōkyo, literally 'Imperial Residence') is the main residence of the Emperor of Japan. It is a large park-like area located in the Chiyoda district of the Chiyoda ward of Tokyo and contains several buildings including the Fukiage Palace (吹上御所, Fukiage gosho) where the Emperor has his living quarters, the main palace (宮殿, Kyūden) where various ceremonies and receptions take place, some residences of the Imperial Family, an archive, museums and administrative offices.The 1.15-square-kilometer (0.44 sq mi) palace grounds and gardens are built on the site of the old Edo Castle. ">
            <span id="popover"> Imperial Palace</span>
          </span>
          , with thousands of spectators thronging the streets in the hope of catching a glimpse of him. In a letter to his sons, he wrote that Japanese people seemed to him to be generally modest, intelligent and considerate, and to have a true appreciation of art. But his picture of them in his diary was less flattering: "[the] intellectual needs of this nation seem to be weaker than their artistic ones – natural disposition?" His journal also contains views of China and India which were uncomplimentary. Of Chinese people, he wrote that "even the children are spiritless and look obtuse... It would be a pity if these Chinese supplant all other races.
        </p>
        <p className='career-text'>
          Einstein's decision to tour the eastern hemisphere in 1922 meant that he was unable to go to Stockholm in the December of that year to participate in the Nobel prize ceremony. His place at the traditional Nobel banquet was taken by a German diplomat, who gave a speech praising him not only as a physicist but also as a campaigner for peace. A two week visit to Spain that he undertook in 1923 saw him collecting another award, a membership of the Spanish Academy of Sciences signified by a diploma handed to him by King Alfonso XIII. (His Spanish trip also gave him a chance to meet a fellow Nobel laureate, the neuroanatomist Santiago Ramón y Cajal.)
        </p>

        <h3>1922–1932: Serving the League of Nations</h3>
        <p> From 1922 until 1932, with the exception of a few months in 1923 and 1924, Einstein was a member of the Geneva-based International Committee on
          Intellectual Cooperation of the
          <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=" The League of Nations (French: Société des Nations [sɔsjete de nɑsjɔ̃]) was the first worldwide intergovernmental organisation whose principal mission was to maintain world peace.[1] It was founded on 10 January 1920 by the Paris Peace Conference that ended the First World War. The main organization ceased operations on 18 April 1946 when many of its components were relocated into the new United Nations. As the template for modern global governance, the League profoundly shaped the modern world. ">
            <span id="popover"> League of Nations</span>
          </span>
          , a group set up by the League to encourage scientists, artists, scholars, teachers and other people engaged in the life
          of the mind to work more closely with their counterparts in other countries.</p>
        <p className='career-text'>
          He was appointed as a German delegate rather than as a representative of Switzerland
          because of the machinations of two Catholic activists,
          <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=" Oskar Halecki was a Polish historian, social and Catholic activist. Doctor Honoris Causa of the Polish University Abroad (1973). ">
            <span id="popover">  Oskar Halecki</span>
          </span>
          and Giuseppe Motta
          .By persuading Secretary General Eric Drummond to deny Einstein the place on the committee
          reserved for a Swiss thinker, they created an opening for Gonzague de Reynold, who used his League of Nations position as a platform from which to promote traditional Catholic doctrine. Einstein's former physics professor Hendrik Lorentz and the Polish chemist Marie Curie were also members of the committee.
        </p>

        <h3>1905 – Annus Mirabilis papers (Scientific Career)</h3>
        <p className='career-text'>
          Throughout his life, Einstein published hundreds of books and articles. He published more than 300 scientific papers and 150 non-scientific ones. On 5 December 2014, universities and archives announced the release of Einstein's papers, comprising more than 30,000 unique documents. Einstein's intellectual achievements and originality have made the word "Einstein" synonymous with "genius”. In addition to the work he did by himself he also collaborated with other scientists on additional projects including the Bose–Einstein statistics, the Einstein refrigerator and others.
        </p>
        <p className='career-text'>
          The Annus Mirabilis papers are four articles pertaining to the photoelectric effect (which gave rise to quantum theory),
          <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=" Brownian motion is the random motion of particles suspended in a medium.">
            <span id="popover"> Brownian motion</span>
          </span>
          , the special theory of relativity, and
          <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=" In physics, mass–energy equivalence is the relationship between mass and energy in a system's rest frame, where the two quantities differ only by a multiplicative constant and the units of measurement. The principle is described by the physicist Albert Einstein's formula: 𝐸=𝑚𝑐2 {\displaystyle E=mc^{2}}.[3] In a reference frame where the system is moving, its relativistic energy and relativistic mass (instead of rest mass) obey the same formula.">
            <span id="popover">E = mc^2</span>
          </span>
          that Einstein published in the Annalen der Physik scientific journal in 1905. These four works contributed substantially to the foundation of modern physics and changed views on space, time, and matter. The four papers are:
        </p>
      </section>


      <div className="table-responsive">
        <div className="table">
          <table className="table table-bordered table-condensed">
            <thead>
              <tr>

                <th classscope="col">Title (translated)</th>
                <th scope="col">Area of Focus</th>
                <th scope="col">Received</th>
                <th scope="col">Published</th>
                <th scope="col">Significance</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td>"On a Heuristic Viewpoint Concerning the Production and Transformation of Light"</td>
                <td>Photoelectric effect</td>
                <td>18 March</td>
                <td>9 June</td>
                <td>Resolved an unsolved puzzle by suggesting that energy is exchanged only in discrete amounts (quanta).[220] This idea was pivotal to the early development of quantum theory.</td>
              </tr>
              <tr>

                <td>"On the Motion of Small Particles Suspended in a Stationary Liquid, as Required by the Molecular Kinetic Theory of Hea</td>
                <td>Brownian motion</td>
                <td>11 May</td>
                <td>18 June</td>
                <td>Explained empirical evidence for the
                  <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=" Atomic theory is the scientific theory that matter is composed of particles called atoms. The definition of the word atom has changed over the years in response to scientific discoveries. Initially, it referred to a hypothetical concept of there being some fundamental particle of matter, too small to be seen by the naked eye, that could not be divided. ">
                    <span id="popover">atomic theory</span>
                  </span>
                  , supporting the application of statistical physics.</td>
              </tr>
              <tr>
                <td>"On the Electrodynamics of Moving Bodies"</td>
                <td>Special relativity</td>
                <td>30 June</td>
                <td>26 September</td>
                <td>Reconciled Maxwell's equations for electricity and magnetism with the laws of mechanics by introducing changes to mechanics, resulting from analysis based on empirical evidence that the speed of light is independent of the motion of the observer.[224] Discredited the concept of a "luminiferous ether".</td>
              </tr>
              <tr>

                <td>"Does the Inertia of a Body Depend Upon Its Energy Content?"</td>
                <td>Matter–energy equivalence</td>
                <td>27 September</td>
                <td>21 November</td>
                <td>Equivalence of matter and energy, E = mc2, the existence of "rest energy", and the basis of nuclear energy.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>Statistical mechanics</h3>
      <h6>Thermodynamic fluctuations and statistical physics</h6>
      <p className='career-text'>
        Einstein's first paper submitted in 1900 to Annalen der Physik was on
        <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content=" Capillary action is the process of a liquid flowing in a narrow space in opposition to or at least without the assistance of any external forces like gravity.">
          <span id="popover">capillary attraction</span>
        </span>
        . It was published in 1901 with the title "Folgerungen aus den Capillaritätserscheinungen", which translates as "Conclusions from the capillarity phenomena". Two papers he published in 1902–1903 (thermodynamics) attempted to interpret atomic phenomena from a statistical point of view. These papers were the foundation for the 1905 paper on Brownian motion, which showed that Brownian movement can be construed as firm evidence that molecules exist. His research in 1903 and 1904 was mainly concerned with the effect of finite atomic size on diffusion phenomena.
      </p>

      <h6>Theory of critical opalescence</h6>
      <p className='career-text'>
        Einstein returned to the problem of thermodynamic fluctuations, giving a treatment of the density variations in a fluid at its critical point. Ordinarily the density fluctuations are controlled by the second derivative of the free energy with respect to the density. At the critical point, this derivative is zero, leading to large fluctuations. The effect of density fluctuations is that light of all wavelengths is scattered, making the fluid look milky white. Einstein relates this to Rayleigh scattering, which is what happens when the fluctuation size is much smaller than the wavelength, and which explains why the sky is blue. Einstein quantitatively derived critical opalescence from a treatment of density fluctuations, and demonstrated how both the effect and
        <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Rayleigh scattering (/ˈreɪli/ RAY-lee), named after the 19th-century British physicist Lord Rayleigh (John William Strutt),[1] is the predominantly elastic scattering of light, or other electromagnetic radiation, by particles with a size much smaller than the wavelength of the radiation. ">
          <span id="popover">Rayleigh scattering</span>
        </span>
        originate from the atomistic constitution of matter.
      </p>

      <h6>Special relativity</h6>
      <p className='career-text'>
        General relativity (GR) is a theory of gravitation that was developed by Einstein between 1907 and 1915. According to it, the observed gravitational attraction between masses results from the warping of spacetime by those masses. General relativity has developed into an essential tool in modern astrophysics; it provides the foundation for the current understanding of black holes, regions of space where gravitational attraction is so strong that not even light can escape.
      </p>
      <p className='career-text'>
        As Einstein later said, the reason for the development of general relativity was that the preference of inertial motions within special relativity was unsatisfactory, while a theory which from the outset prefers no state of motion (even accelerated ones) should appear more satisfactory.Consequently, in 1907 he published an article on acceleration under special relativity. In that article titled "On the Relativity Principle and the Conclusions Drawn from It", he argued that free fall is really inertial motion, and that for a free-falling observer the rules of special relativity must apply. This argument is called the equivalence principle. In the same article, Einstein also predicted the phenomena of gravitational time dilation, gravitational redshift and gravitational lensing.
      </p>
      <p className='career-text'>
        In 1911, Einstein published another article "On the Influence of Gravitation on the Propagation of Light" expanding on the 1907 article, in which he estimated the amount of deflection of light by massive bodies. Thus, the theoretical prediction of general relativity could for the first time be tested experimentally
      </p>

      <h6>Gravitational waves</h6>
      <p className='career-text'>
        In 1916, Einstein predicted gravitational waves, ripples in the curvature of spacetime which propagate as waves, traveling outward from the source, transporting energy as gravitational radiation. The existence of gravitational waves is possible under general relativity due to its Lorentz invariance which brings the concept of a finite speed of propagation of the physical interactions of gravity with it. By contrast, gravitational waves cannot exist in the Newtonian theory of gravitation, which postulates that the physical interactions of gravity propagate at infinite speed.
      </p>
      <p className='career-text'>
        The first, indirect, detection of gravitational waves came in the 1970s through observation of a pair of closely orbiting neutron stars, PSR B1913+16.The explanation for the decay in their orbital period was that they were emitting gravitational waves.Einstein's prediction was confirmed on 11 February 2016, when researchers at LIGO published the first observation of gravitational waves,detected on Earth on 14 September 2015, nearly one hundred years after the prediction
      </p>


      <h6>Hole argument and Entwurf theory</h6>
      <p className='career-text'>
        While developing general relativity, Einstein became confused about the gauge invariance in the theory. He formulated an argument that led him to conclude that a general relativistic field theory is impossible. He gave up looking for fully generally covariant tensor equations and searched for equations that would be invariant under general linear transformations only
      </p>
      <p className='career-text'>
        In June 1913, the Entwurf ('draft') theory was the result of these investigations. As its name suggests, it was a sketch of a theory, less elegant and more difficult than general relativity, with the equations of motion supplemented by additional gauge fixing conditions. After more than two years of intensive work, Einstein realized that the hole argument was mistaken[249] and abandoned the theory in November 1915.
      </p>

      <h6>Physical cosmology</h6>
      <p className='career-text'>
        In 1917, Einstein applied the general theory of relativity to the structure of the universe as a whole. He discovered that the general field equations predicted a universe that was dynamic, either contracting or expanding. As observational evidence for a dynamic universe was lacking at the time, Einstein introduced a new term, the cosmological constant, into the field equations, in order to allow the theory to predict a static universe. The modified field equations predicted a static universe of closed curvature, in accordance with Einstein's understanding of Mach's principle in these years. This model became known as the Einstein World or Einstein's static universe
      </p>
      <p className='career-text'>
        Following the discovery of the recession of the galaxies by Edwin Hubble in 1929, Einstein abandoned his static model of the universe, and proposed two dynamic models of the cosmos, the Friedmann–Einstein universe of 1931 and the
        <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="The Einstein–de Sitter universe is a model of the universe proposed by Albert Einstein and Willem de Sitter in 1932.On first learning of Edwin Hubble's discovery of a linear relation between the redshift of the galaxies and their distance,Einstein set the cosmological constant to zero in the Friedmann equations, resulting in a model of the expanding universe known as the Friedmann–Einstein universe. ">
          <span id="popover">Einstein–de Sitter universe</span>
        </span>
        of 1932.In each of these models, Einstein discarded the cosmological constant, claiming that it was "in any case theoretically unsatisfactory".
      </p>
      <div className='col-xl-12 col-lg-12'>
        <img src={career_img7} className="career_img_2" alt="..." />
      </div>
      <p className='career-text'>
        In many Einstein biographies, it is claimed that Einstein referred to the cosmological constant in later years as his "biggest blunder", based on a letter George Gamow claimed to have received from him. The astrophysicist Mario Livio has cast doubt on this claim
      </p>
      <p className='career-text'>
        In late 2013, a team led by the Irish physicist
        <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Cormac O'Raifeartaigh (Cormac O'Rafferty) is an Irish physicist based at Waterford Institute of Technology in Ireland. A solid-state physicist by training, he is best known for several contributions to the study of the history and philosophy of 20th century science, including the discovery that Albert Einstein once attempted a steady-state model of the expanding universe, many years before Fred Hoyle. ">
          <span id="popover">Cormac O'Raifeartaigh</span>
        </span>
        discovered evidence that, shortly after learning of Hubble's observations of the recession of the galaxies, Einstein considered a steady-state model of the universe. In a hitherto overlooked manuscript, apparently written in early 1931, Einstein explored a model of the expanding universe in which the density of matter remains constant due to a continuous creation of matter, a process that he associated with the cosmological constant.As he stated in the paper, "In what follows, I would like to draw attention to a solution to equation (1) that can account for Hubbel's [sic] facts, and in which the density is constant over time" ... "If one considers a physically bounded volume, particles of matter will be continually leaving it. For the density to remain constant, new particles of matter must be continually formed in the volume from space."
      </p>
      <p className='career-text'>
        It thus appears that Einstein considered a steady-state model of the expanding universe many years before Hoyle, Bondi and Gold.However, Einstein's steady-state model contained a fundamental flaw and he quickly abandoned the idea.
      </p>

      <h6>Energy momentum pseudotensor</h6>
      <p className='career-text'>
        General relativity includes a dynamical spacetime, so it is difficult to see how to identify the conserved energy and momentum. Noether's theorem allows these quantities to be determined from a Lagrangian with translation invariance, but general covariance makes translation invariance into something of a gauge symmetry. The energy and momentum derived within general relativity by Noether's prescriptions do not make a real tensor for this reason.
      </p>
      <p className='career-text'>
        Einstein argued that this is true for a fundamental reason: the gravitational field could be made to vanish by a choice of coordinates. He maintained that the non-covariant energy momentum pseudotensor was, in fact, the best description of the energy momentum distribution in a gravitational field. While the use of non-covariant objects like pseudotensors was criticized by Erwin Schrödinger and others, Einstein's approach has been echoed by physicists including Lev Landau and Evgeny Lifshitz
      </p>


      <h6>Wormholes</h6>
      <p className='career-text'>
        In 1935, Einstein collaborated with Nathan Rosen to produce a model of a wormhole, often called Einstein–Rosen bridges.His motivation was to model elementary particles with charge as a solution of gravitational field equations, in line with the program outlined in the paper "Do Gravitational Fields play an Important Role in the Constitution of the Elementary Particles?". These solutions cut and pasted Schwarzschild black holes to make a bridge between two patches. Because these solutions included spacetime curvature without the presence of a physical body, Einstein and Rosen suggested that they could provide the beginnings of a theory that avoided the notion of point particles. However, it was later found that Einstein–Rosen bridges are not stable
      </p>





      <h6>Einstein–Cartan theory</h6>
      <p className='career-text'>
        In order to incorporate spinning point particles into general relativity, the affine connection needed to be generalized to include an antisymmetric part, called the torsion. This modification was made by Einstein and Cartan in the 1920s.
      </p>


      <h6>Equations of motion</h6>
      <p className='career-text'>
        In general relativity, gravitational force is reimagined as curvature of spacetime. A curved path like an orbit is not the result of a force deflecting a body from an ideal straight-line path, but rather the body's attempt to fall freely through a background that is itself curved by the presence of other masses. A remark by John Archibald Wheeler that has become proverbial among physicists summarizes the theory: "Spacetime tells matter how to move; matter tells spacetime how to curve."
      </p>
      <p className='career-text'>
        The Einstein field equations cover the latter aspect of the theory, relating the curvature of spacetime to the distribution of matter and energy. The geodesic equation covers the former aspect, stating that freely falling bodies follow lines that are as straight as possible in a curved spacetime. Einstein regarded this as an "independent fundamental assumption" that had to be postulated in addition to the field equations in order to complete the theory. Believing this to be a shortcoming in how general relativity was originally presented, he wished to derive it from the field equations themselves.
      </p>
      <p className='career-text'>
        Since the equations of general relativity are non-linear, a lump of energy made out of pure gravitational fields, like a black hole, would move on a trajectory which is determined by the Einstein field equations themselves, not by a new law. Accordingly, Einstein proposed that the field equations would determine the path of a singular solution, like a black hole, to be a geodesic.
      </p>
      <p className='career-text'>
        Both physicists and philosophers have often repeated the assertion that the geodesic equation can be obtained from applying the field equations to the motion of a gravitational singularity, but this claim remains disputed.
      </p>


      <h4>Old quantum theory</h4>
      <h6>Photons and energy quanta</h6>
      <p className='career-text'>
        n a 1905 paper,Einstein postulated that light itself consists of localized particles (
        <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="In physics, a quantum (pl.: quanta) is the minimum amount of any physical entity (physical property) involved in an interaction. Quantum is a discrete quantity of energy proportional in magnitude to the frequency of the radiation it represents.">
          <span id="popover">quanta</span>
        </span>
        ). Einstein's light quanta were nearly universally rejected by all physicists, including Max Planck and Niels Bohr. This idea only became universally accepted in 1919, with Robert Millikan's detailed experiments on the photoelectric effect, and with the measurement of Compton scattering.
      </p>
      <div className='col-xl-12 col-lg-12'>
        <img src={career_img9} className="career_img_2" alt="..." />
      </div>
      <p className='career-text'>
        Einstein concluded that each wave of frequency f is associated with a collection of photons with energy hf each, where h is the Planck constant. He did not say much more, because he was not sure how the particles were related to the wave. But he did suggest that this idea would explain certain experimental results, notably the photoelectric effect
      </p>

      <h6>Quantized atomic vibrations</h6>
      <p className='career-text'>
        In 1907, Einstein proposed a model of matter where each atom in a lattice structure is an independent harmonic oscillator. In the Einstein model, each atom oscillates independently—a series of equally spaced quantized states for each oscillator. Einstein was aware that getting the frequency of the actual oscillations would be difficult, but he nevertheless proposed this theory because it was a particularly clear demonstration that quantum mechanics could solve the specific heat problem in classical mechanics. Peter Debye refined this model
      </p>

      <h6>Bose–Einstein statistics</h6>
      <p className='career-text'>
        In 1924, Einstein received a description of a statistical model from Indian physicist Satyendra Nath Bose, based on a counting method that assumed that light could be understood as a gas of indistinguishable particles. Einstein noted that Bose's statistics applied to some atoms as well as to the proposed light particles, and submitted his translation of Bose's paper to the Zeitschrift für Physik. Einstein also published his own articles describing the model and its implications, among them the Bose–Einstein condensate phenomenon that some particulates should appear at very low temperatures.
      </p>
      <p className='career-text'>
        It was not until 1995 that the first such condensate was produced experimentally by Eric Allin Cornell and Carl Wieman using ultra-cooling equipment built at the NIST–JILA laboratory at the University of Colorado at Boulder.Bose–Einstein statistics are now used to describe the behaviors of any assembly of bosons. Einstein's sketches for this project may be seen in the Einstein Archive in the library of the Leiden University
      </p>

      <h6>Wave–particle duality</h6>
      <p className='career-text'>
        Although the patent office promoted Einstein to Technical Examiner Second Class in 1906, he had not given up on academia. In 1908, he became a Privatdozent at the University of Bern. In "Über die Entwicklung unserer Anschauungen über das Wesen und die Konstitution der Strahlung" ("The Development of our Views on the Composition and Essence of Radiation"), on the quantization of light, and in an earlier 1909 paper, Einstein showed that Max Planck's energy quanta must have well-defined momenta and act in some respects as independent, point-like particles.
      </p>
      <p className='career-text'>
        This paper introduced the photon concept (although the name photon was introduced later by Gilbert N. Lewis in 1926) and inspired the notion of wave–particle duality in quantum mechanics. Einstein saw this wave–particle duality in radiation as concrete evidence for his conviction that physics needed a new, unified foundation.
      </p>

      <h6>Zero-point energy</h6>
      <p className='career-text'>
        In a series of works completed from 1911 to 1913, Planck reformulated his 1900 quantum theory and introduced the idea of zero-point energy in his "second quantum theory". Soon, this idea attracted the attention of Einstein and his assistant Otto Stern. Assuming the energy of rotating diatomic molecules contains zero-point energy, they then compared the theoretical specific heat of hydrogen gas with the experimental data. The numbers matched nicely. However, after publishing the findings, they promptly withdrew their support, because they no longer had confidence in the correctness of the idea of zero-point energy
      </p>

      <h6>Stimulated emission</h6>
      <p className='career-text'>
        In 1917, at the height of his work on relativity, Einstein published an article in
        <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Physikalische Zeitschrift (English: Physical Journal) was a German scientific journal of physics published from 1899 to 1945 by S. Hirzel Verlag. In 1924, it merged with Jahrbuch der Radioaktivität und Elektronik. From 1944 onwards, the journal published the Reichsberichte für Physik (English: Reich Reports for Physics).">
          <span id="popover">Physikalische Zeitschrift</span>
        </span>
        that proposed the possibility of stimulated emission, the physical process that makes possible the maser and the laser.This article showed that the statistics of absorption and emission of light would only be consistent with Planck's distribution law if the emission of light into a mode with n photons would be enhanced statistically compared to the emission of light into an empty mode. This paper was enormously influential in the later development of quantum mechanics, because it was the first paper to show that the statistics of atomic transitions had simple laws
      </p>

      <h6>Matter waves</h6>
      <p className='career-text'>
        Einstein discovered Louis de Broglie's work and supported his ideas, which were received skeptically at first. In another major paper from this era, Einstein observed that de Broglie waves could explain the quantization rules of Bohr and Sommerfeld. This paper would inspire
        <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Erwin Rudolf Josef Alexander Schrödinger (UK: /ˈʃrɜːdɪŋə, ˈʃroʊdɪŋə/, US: /ˈʃroʊdɪŋər/;[2] German: [ˈɛɐ̯vɪn ˈʃʁøːdɪŋɐ]; 12 August 1887 – 4 January 1961), sometimes written as Schroedinger or Schrodinger, was a Nobel Prize–winning Austrian and naturalized Irish physicist who developed fundamental results in quantum theory.">
          <span id="popover">Schrödinger's</span>
        </span>
        work of 1926
      </p>

      <h4>Quantum mechanics</h4>
      <h6>Einstein's objections to quantum mechanics</h6>
      <p className='career-text'>
        Einstein played a major role in developing quantum theory, beginning with his 1905 paper on the photoelectric effect. However, he became displeased with modern quantum mechanics as it had evolved after 1925, despite its acceptance by other physicists. He was skeptical that the randomness of quantum mechanics was fundamental rather than the result of determinism, stating that God "is not playing at dice".Until the end of his life, he continued to maintain that
        <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Quantum mechanics is a fundamental theory in physics that describes the behavior of nature at and below the scale of atoms. It is the foundation of all quantum physics, which includes quantum chemistry, quantum field theory, quantum technology, and quantum information science.">
          <span id="popover">quantum mechanics </span>
        </span>
        was incomplete
      </p>
      <div className='col-xl-12 col-lg-12'>
        <img src={career_img11} className="career_img_2" alt="..." />
      </div>

      <h6>Bohr versus Einstein</h6>
      <p className='career-text'>
        The Bohr–Einstein debates were a series of public disputes about quantum mechanics between Einstein and Niels Bohr, who were two of its founders. Their debates are remembered because of their importance to the philosophy of science.Their debates would influence later interpretations of quantum mechanics.
      </p>

      <div className='col-xl-12 col-lg-12'>
        <img src={career_img12} className="career_img_2" alt="..." />
      </div>

      <h6>Einstein–Podolsky–Rosen paradox</h6>
      <p className='career-text'>Einstein never fully accepted quantum mechanics. While he recognized that it made correct predictions, he believed a more fundamental description of nature must be possible. Over the years he presented multiple arguments to this effect, but the one he preferred most dated to a debate with Bohr in 1930. Einstein suggested a thought experiment in which two objects are allowed to interact and then moved apart a great distance from each other.</p>
      <p className='career-text'>The quantum-mechanical description of the two objects is a mathematical entity known as a wavefunction. If the wavefunction that describes the two objects before their interaction is given, then the Schrödinger equation provides the wavefunction that describes them after their interaction. But because of what would later be called quantum entanglement, measuring one object would lead to an instantaneous change of the wavefunction describing the other object, no matter how far away it is.</p>
      <p className='career-text'>Moreover, the choice of which measurement to perform upon the first object would affect what wavefunction could result for the second object. Einstein reasoned that no influence could propagate from the first object to the second instantaneously fast. Indeed, he argued, physics depends on being able to tell one thing apart from another, and such instantaneous influences would call that into question. Because the true "physical condition" of the second object could not be immediately altered by an action done to the first, Einstein concluded, the wavefunction could not be that true physical condition, only an incomplete description of it.</p>
      <p className='career-text'>
        A more famous version of this argument came in 1935, when Einstein published a paper with Boris Podolsky and Nathan Rosen that laid out what would become known as the EPR paradox. In this thought experiment, two particles interact in such a way that the wavefunction describing them is entangled. Then, no matter how far the two particles were separated, a precise position measurement on one particle would imply the ability to predict, perfectly, the result of measuring the position of the other particle. Likewise, a precise momentum measurement of one particle would result in an equally precise prediction for of the momentum of the other particle, without needing to disturb the other particle in any way.
      </p>
      <p className='career-text'>
        They argued that no action taken on the first particle could instantaneously affect the other, since this would involve information being transmitted faster than light, which is forbidden by the theory of relativity. They invoked a principle, later known as the "EPR criterion of reality", positing that: "If, without in any way disturbing a system, we can predict with certainty (i.e., with probability equal to unity) the value of a physical quantity, then there exists an element of reality corresponding to that quantity." From this, they inferred that the second particle must have a definite value of both position and of momentum prior to either quantity being measured. But quantum mechanics considers these two observables incompatible and thus does not associate simultaneous values for both to any system. Einstein, Podolsky, and Rosen therefore concluded that quantum theory does not provide a complete description of reality.
      </p>
      <p className='career-text'>
        In 1964, John Stewart Bell carried the analysis of quantum entanglement much further. He deduced that if measurements are performed independently on the two separated particles of an entangled pair, then the assumption that the outcomes depend upon hidden variables within each half implies a mathematical constraint on how the outcomes on the two measurements are correlated. This constraint would later be called a Bell inequality. Bell then showed that quantum physics predicts correlations that violate this inequality.
      </p>
      <p className='career-text'>
        Consequently, the only way that hidden variables could explain the predictions of quantum physics is if they are "nonlocal", which is to say that somehow the two particles are able to interact instantaneously no matter how widely they ever become separated. Bell argued that because an explanation of quantum phenomena in terms of hidden variables would require nonlocality, the EPR paradox "is resolved in the way which Einstein would have liked least"
        Despite this, and although Einstein personally found the argument in the EPR paper overly complicated,that paper became among the most influential papers published in Physical Review. It is considered a centerpiece of the development of quantum information theory.
      </p>

      <h4>Unified field theory</h4>
      <p className='career-text'>
        Encouraged by his success with general relativity, Einstein sought an even more ambitious geometrical theory that would treat gravitation and electromagnetism as aspects of a single entity. In 1950, he described his unified field theory in a Scientific American article titled "On the Generalized Theory of Gravitation".His attempt to find the most fundamental laws of nature won him praise but not success: a particularly conspicuous blemish of his model was that it did not accommodate the strong and weak nuclear forces, neither of which was well understood until many years after his death. Although most researchers now believe that Einstein's approach to unifying physics was mistaken, his goal of a theory of everything is one to which his successors still aspire.
      </p>

      <h4>Other investigations</h4>
      <p className='career-text'>
        Einstein conducted other investigations that were unsuccessful and abandoned. These pertain to force, superconductivity, and other research.
      </p>

      <h4>Collaboration with other scientists</h4>
      <p className='career-text'>
        In addition to longtime collaborators Leopold Infeld, Nathan Rosen, Peter Bergmann and others, Einstein also had some one-shot collaborations with various scientists.
      </p>

      <h6>Einstein–de Haas experiment</h6>
      <p className='career-text'>
        In 1908, Owen Willans Richardson predicted that a change in the magnetic moment of a free body will cause this body to rotate. This effect is a consequence of the conservation of angular momentum and is strong enough to be observable in ferromagnetic materials.Einstein and Wander Johannes de Haas published two papers in 1915 claiming the first experimental observation of the effect
        Measurements of this kind demonstrate that the phenomenon of magnetization is caused by the alignment (polarization) of the angular momenta of the electrons in the material along the axis of magnetization. These measurements also allow the separation of the two contributions to the magnetization: that which is associated with the spin and with the orbital motion of the electrons.
      </p>
      <div className='col-xl-12 col-lg-12'>
        <img src={career_img13} className="career_img_2" alt="..." />
      </div>
      <p className='career-text'>
        The Einstein-de Haas experiment is the only experiment concived, realized and published by Albert Einstein himself.
        A complete original version of the Einstein-de Haas experimental equipment was donated by
        <span tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Geertruida Luberta de Haas-Lorentz was a Dutch physicist and professor of the Technical University of Delft. She was the first to theoretically study thermal fluctuations in electric circuits, treating electrons as Brownian particles.">
          <span id="popover">Geertruida de Haas-Lorentz</span>
        </span>
        , wife of de Haas and daughter of Lorentz, to the Ampère Museum in Lyon France in 1961 where it is currently on display. It was lost among the museum's holdings and was rediscovered in 2023
      </p>
      <h6>Einstein as an inventor</h6>
      <p className='career-text'>
        In 1926, Einstein and his former student Leó Szilárd co-invented (and in 1930, patented) the Einstein refrigerator. This absorption refrigerator was then revolutionary for having no moving parts and using only heat as an input. On 11 November 1930, U.S. patent 1,781,541 was awarded to Einstein and Leó Szilárd for the refrigerator. Their invention was not immediately put into commercial production, but the most promising of their patents were acquired by the Swedish company Electrolux
        Einstein also invented an electromagnetic pump,sound reproduction device, and several other household devices
      </p>
      <div className='col-xl-12 col-lg-12'>
        <img src={career_graph1} className="career_graph" alt="..." />
      </div>
    </div>
  )
}

export default Career