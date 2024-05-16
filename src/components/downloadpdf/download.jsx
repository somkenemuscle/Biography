import React from 'react'
import Lifepdf from '../downloadpdf/The Life and Legacy of Albert Einstein.pdf'
import researchpdf from '../downloadpdf/ALBERT EINSTEIN (PHOTO ELCTRIC EFFECT) 1921 NOBEL PRIZE AWARD IN PHYSICS.pdf'
import '../../styles/download.css'

function download() {
  return (
    <div>

      <div className="row  row-cols-auto download-container">
        <div className="col-5">
          <h6 className="download-text">Einstein's pdf</h6>
          <a href={Lifepdf} download className="download-link">
            <button className="download-button">
              <i className="fa fa-download"> Download </i>
            </button>
          </a>
        </div>

        <div className="col-5">
          <h6 className="download-text">Nobel prize pdf</h6>
          <a href={researchpdf} download className="download-link">
            <button className="download-button">
              <i className="fa fa-download"> Download </i>
            </button>
          </a>

        </div>

      </div>

    </div>
  )
}

export default download