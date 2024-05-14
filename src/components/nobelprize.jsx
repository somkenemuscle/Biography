import React from 'react'
import '../styles/nobelprize.css'
import award from "../image/download.png";

function nobelprize() {
    return (
        <div id='nobelprize-container'>
            <h2>Nobel Prize</h2>
            <div className="row">
                <div className="col-xl-6 col-md-12 col-sm-12">
                    <img className="einstein_award_png" src={award} alt="award" />
                </div>
                <div className="col-xl-6 col-md-12 col-sm-12">
                    <div className="achievement-txt1">
                        In 1922 Albert Einstein was awarded the 1921 Nobel Prize in Physics,
                        "for his services to Theoretical Physics, and especially for his
                        discovery of the law of the photoelectric effect". This refers to
                        his 1905 paper on the photoelectric effect, "On a Heuristic
                        Viewpoint Concerning the Production and Transformation of Light",
                        which was well supported by the experimental evidence by that time.
                        The presentation speech began by mentioning "his theory of
                        relativity [which had] been the subject of lively debate in
                        philosophical circles [and] also has astrophysical implications
                        which are being rigorously examined at the present time".
                    </div>
                    <div className="achievement-txt2">
                        It was long reported that in accord with the divorce settlement,
                        the Nobel Prize money had been deposited in a Swiss bank account for
                        his wife Mileva Marić to invest for herself and their two sons, while
                        she could only use the capital by agreement with Einstein. However,
                        personal correspondence made public in 2006 shows that he invested
                        much of it in the United States, and saw much of it wiped out in the
                        Great Depression. Ultimately, however, he paid Marić more money than
                        he received with the prize.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default nobelprize