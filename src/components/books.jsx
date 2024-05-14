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
            <hr className="card-hr" />
            <h4 className="card-sub_heading">These are some books related to Albert Einstein</h4>
            <div className="row">
                {/* Repeat this div for each row */}
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book12} className="card-img-top" alt="book1" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Albert-Einstein-Biography-Sellers-Childrens/dp/1541912381">
                                <h3 className="card-title">
                                    Albert Einstein: The Genius Who Failed School
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book10} className="card-img-top" alt="book1" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Albert-Einstein-Biography-Sellers-Childrens/dp/1541912381">
                                <h3 className="card-title">
                                    Albert Einstein:The World As I see It
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book4} className="card-img-top" alt="book1" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Albert-Einstein-Biography-Sellers-Childrens/dp/1541912381">
                                <h3 className="card-title">
                                    Mathematical Foundation of the General Theory of Relativity
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book4} className="card-img-top" alt="book1" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Albert-Einstein-Biography-Sellers-Childrens/dp/1541912381">
                                <h3 className="card-title">
                                    Albert Einstein: The Meaning of Relativity
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book5} className="card-img-top" alt="book1" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Albert-Einstein-Biography-Sellers-Childrens/dp/1541912381">
                                <h3 className="card-title">
                                    Albert Einstein: Letters on Wave Mechanics
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card">
                        <img src={book6} className="card-img-top" alt="book1" />
                        <div className="card-body">
                            <a href="https://www.amazon.com/Albert-Einstein-Biography-Sellers-Childrens/dp/1541912381">
                                <h3 className="card-title">
                                    Ideas and Opinions by Albert Einstein
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