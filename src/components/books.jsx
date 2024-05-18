import React from "react";
import "../styles/books.css";
import book1 from "../image/book1.jpg";
import book2 from "../image/book2.jpeg";
import book3 from "../image/book3.jpg";
import book4 from "../image/book4.jpg";
import book5 from "../image/book5.jpg";
import book6 from "../image/book6.jpg";
import book7 from "../image/book7.jpg";
import book8 from "../image/book8.jpg";
import book9 from "../image/book9.jpg";
import book10 from "../image/book10.jpg";
import book11 from "../image/book11.jpg";
import book12 from "../image/book12.jpg";

function book() {
    return (
        <div className="container">
                <h3 className="books-heading">BOOKS</h3>
            <hr className="card-hr" />
            <h5 className="card-sub_heading">These are some books related to Albert Einstein</h5>
            <div className="row">
                {/* Repeat this div for each row */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book1} className="card-img-top" alt="book1" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Albert-Einstein-Biography-Sellers-Childrens/dp/1541912381">
                                <h3 className="card-title">
                                    Einstein: The Genius Who Failed School
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book2} className="card-img-top" alt="book2" />
                        <div className="card-body">
                            <a href="https://books.google.com.ng/books/about/The_World_As_I_See_It.html?id=aNKOo94tO6cC&source=kp_cover&redir_esc=y">
                                <h3 className="card-title">
                                    Albert Einstein:The World As I see It
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book3} className="card-img-top" alt="book3" />
                        <div className="card-body">
                            <a href="https://www.amazon.co.uk/Mathematical-Foundation-General-Theory-Relativity/dp/1006727140/?_encoding=UTF8&pd_rd_w=ankvy&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=258-9728002-4223536&pd_rd_wg=ZhJbP&pd_rd_r=3d683c24-a501-48ac-b10d-69967cfe027c&ref_=aufs_ap_sc_dsk">
                                <h3 className="card-title">
                                    Mathematical Foundation of the General Theory 
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book4} className="card-img-top" alt="book4" />
                        <div className="card-body">
                            <a href="https://www.amazon.co.uk/Meaning-Relativity-Albert-Einstein-ebook/dp/B074G1B55B/?_encoding=UTF8&pd_rd_w=ankvy&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=258-9728002-4223536&pd_rd_wg=ZhJbP&pd_rd_r=3d683c24-a501-48ac-b10d-69967cfe027c&ref_=aufs_ap_sc_dsk">
                                <h3 className="card-title">
                                    Albert Einstein: The Meaning of Relativity
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book5} className="card-img-top" alt="book5" />
                        <div className="card-body">
                            <a href="https://www.amazon.co.uk/Letters-Wave-Mechanics-Correspondence-Schr%C3%B6dinger-ebook/dp/B004Q9U0ME/?_encoding=UTF8&pd_rd_w=ankvy&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=258-9728002-4223536&pd_rd_wg=ZhJbP&pd_rd_r=3d683c24-a501-48ac-b10d-69967cfe027c&ref_=aufs_ap_sc_dsk">
                                <h3 className="card-title">
                                    Albert Einstein: Letters on Wave Mechanics
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book6} className="card-img-top" alt="book6" />
                        <div className="card-body">
                            <a href="https://www.amazon.co.uk/Ideas-Opinions-Albert-Einstein-Philosophy-ebook/dp/B0C37LFY46/?_encoding=UTF8&pd_rd_w=ankvy&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=258-9728002-4223536&pd_rd_wg=ZhJbP&pd_rd_r=3d683c24-a501-48ac-b10d-69967cfe027c&ref_=aufs_ap_sc_dsk">
                                <h3 className="card-title">
                                    Ideas and Opinions by Albert Einstein
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book7} className="card-img-top" alt="book7" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Ordinary-Genius-Trailblazer-Biographies-Paperback/dp/1575050676/ref=pd_sim_d_sccl_2_4/134-1836566-9665620?pd_rd_w=R9SSa&content-id=amzn1.sym.807772be-f817-4c8d-8a9d-04ee37f7ad33&pf_rd_p=807772be-f817-4c8d-8a9d-04ee37f7ad33&pf_rd_r=KBAA1KAXGA9ZRD4T5QNV&pd_rd_wg=M5NpV&pd_rd_r=8da27fbb-6246-4ae2-8cf6-913afa62f856&pd_rd_i=1575050676&psc=1">
                                <h3 className="card-title">
                                Ordinary Genius: The Story of Albert Einstein
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book8} className="card-img-top" alt="book8" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Albert-Einstein-Genius-Jack-Steinberg/dp/1522788352/ref=pd_sim_d_sccl_2_11/134-1836566-9665620?pd_rd_w=R9SSa&content-id=amzn1.sym.807772be-f817-4c8d-8a9d-04ee37f7ad33&pf_rd_p=807772be-f817-4c8d-8a9d-04ee37f7ad33&pf_rd_r=KBAA1KAXGA9ZRD4T5QNV&pd_rd_wg=M5NpV&pd_rd_r=8da27fbb-6246-4ae2-8cf6-913afa62f856&pd_rd_i=1522788352&psc=1">
                                <h3 className="card-title">
                                Albert Einstein: The Life of a Genius
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book9} className="card-img-top" alt="book9" />
                        <div className="card-body">
                            <a href="https://www.damianibooks.com/en/products/6208784">
                                <h3 className="card-title">
                                Albert Einstein: The Man and His Mind
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book10} className="card-img-top" alt="book10" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Einstein-Cosmic-Religion-Opinions-Aphorisms/dp/0486470105/ref=sr_1_26?dib=eyJ2IjoiMSJ9.mTOWdav6oWdyioly7I7i4pA636JG4qEiLnEnZ1U6TLNIcsnzY49pGDmTVNytF71QARcbeNozMUBRsYh8UtpNwQtUEzloYxmYGEY97nftOjBsVNgQTbPFA9Y2ca_bIrzYGLYHEiw_J0rz-pCm7dZt9bGd6QdXV0FvU7rO8MPmrTCgrD8NsJN56acCcyAePwiGWNMlfAMnT24P-udBdqCHKSRgUWRdHbsg-_PF99iUxDs.9f4SYAYWMfNoi_LVYFYECxKKenoO51TqyF7oDzSZZrI&dib_tag=se&keywords=albert+einstein&qid=1715526232&s=books&sr=1-26&xpid=fz9vUD8M0mzb7">
                                <h3 className="card-title">
                                Einstein on Cosmic Religion 
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book11} className="card-img-top" alt="book11" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Einsteins-Relativity-Quantum-Revolution-Non-Scientists/dp/B00DTNWGP2/ref=sr_1_31?dib=eyJ2IjoiMSJ9.mTOWdav6oWdyioly7I7i4pA636JG4qEiLnEnZ1U6TLNIcsnzY49pGDmTVNytF71QARcbeNozMUBRsYh8UtpNwQtUEzloYxmYGEY97nftOjBsVNgQTbPFA9Y2ca_bIrzYGLYHEiw_J0rz-pCm7dZt9bGd6QdXV0FvU7rO8MPmrTCgrD8NsJN56acCcyAePwiGWNMlfAMnT24P-udBdqCHKSRgUWRdHbsg-_PF99iUxDs.9f4SYAYWMfNoi_LVYFYECxKKenoO51TqyF7oDzSZZrI&dib_tag=se&keywords=albert+einstein&qid=1715526232&s=books&sr=1-31&xpid=fz9vUD8M0mzb7">
                                <h3 className="card-title">
                                Einstein's Relativity and the Quantum Revolution
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book12} className="card-img-top" alt="book12" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Inspirational-Quotes-Albert-Einstein-Success/dp/B09L3PG1LC/ref=sr_1_9?dib=eyJ2IjoiMSJ9.1chQHC1iTNsKfHBQqL6Sq9gUPZtnz9ocfGhxHY8Rm56irrAki1Nl5aRrAW1T4B8THjdaFsqX8HoRbtmtpyM_1rifYHJiYV9kWOODHCHuDKTsrtzpXhuZOUQyWrGPukWPklQvjarqS__QhR7CiudNTg9gRrTnbM6zaNz8x8Uq5in47y72AE4decb9ARsXPg8KzKLnYFVtH44BCsR3MzZPW5pwJ5Plob_kU0irNeSDLcI.ipEDDrblwHN_SsZoukd4l6HS4wTUtXGo5SLZl-E98R4&dib_tag=se&keywords=albert+einstein&qid=1715526063&s=books&sr=1-9">
                                <h3 className="card-title">
                                100 Inspirational Quotes By Albert Einstein
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>




                {/* Repeat for each book */}
            </div>
            {/* End of row */}
        </div>
    )
}

export default book;