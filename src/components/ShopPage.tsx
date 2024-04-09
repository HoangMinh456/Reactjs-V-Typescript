import React from 'react'

const ShopPage = () => {
    return (
        <>
            <div className="banner banner--shop">
                <img src="/images/banner1.jpg" />
                <div className="text1">
                    <p>Shop</p>
                </div>
                <div className="text2">
                    <p>Home &gt; <span>Shop</span></p>
                </div>
            </div>
            <section className="fillter">
                <div className="container">
                    <div className="fillter-left">
                        <div className="fillter-left__action">
                            <div>
                                <svg width={21} height={18} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.0238 3.14292H6.92858M4.54763 3.14292H0.976196M20.0238 15.0477H6.92858M4.54763 15.0477H0.976196M14.0714 9.0953H0.976196M20.0238 9.0953H16.4524M5.7381 0.761963C6.05384 0.761963 6.35664 0.887388 6.5799 1.11065C6.80315 1.3339 6.92858 1.63671 6.92858 1.95244V4.33339C6.92858 4.64913 6.80315 4.95193 6.5799 5.17518C6.35664 5.39844 6.05384 5.52387 5.7381 5.52387C5.42237 5.52387 5.11957 5.39844 4.89631 5.17518C4.67305 4.95193 4.54763 4.64913 4.54763 4.33339V1.95244C4.54763 1.63671 4.67305 1.3339 4.89631 1.11065C5.11957 0.887388 5.42237 0.761963 5.7381 0.761963V0.761963ZM5.7381 12.6667C6.05384 12.6667 6.35664 12.7921 6.5799 13.0154C6.80315 13.2387 6.92858 13.5415 6.92858 13.8572V16.2382C6.92858 16.5539 6.80315 16.8567 6.5799 17.0799C6.35664 17.3032 6.05384 17.4286 5.7381 17.4286C5.42237 17.4286 5.11957 17.3032 4.89631 17.0799C4.67305 16.8567 4.54763 16.5539 4.54763 16.2382V13.8572C4.54763 13.5415 4.67305 13.2387 4.89631 13.0154C5.11957 12.7921 5.42237 12.6667 5.7381 12.6667ZM15.2619 6.71434C15.5776 6.71434 15.8804 6.83977 16.1037 7.06303C16.327 7.28628 16.4524 7.58909 16.4524 7.90482V10.2858C16.4524 10.6015 16.327 10.9043 16.1037 11.1276C15.8804 11.3508 15.5776 11.4762 15.2619 11.4762C14.9462 11.4762 14.6434 11.3508 14.4201 11.1276C14.1969 10.9043 14.0714 10.6015 14.0714 10.2858V7.90482C14.0714 7.58909 14.1969 7.28628 14.4201 7.06303C14.6434 6.83977 14.9462 6.71434 15.2619 6.71434V6.71434Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>Filter</p>
                            </div>
                            <div>
                                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6667 17.1667C12.7385 17.1667 11.8482 16.798 11.1918 16.1416C10.5355 15.4852 10.1667 14.595 10.1667 13.6667C10.1667 12.7385 10.5355 11.8482 11.1918 11.1918C11.8482 10.5355 12.7385 10.1667 13.6667 10.1667C14.595 10.1667 15.4852 10.5355 16.1416 11.1918C16.798 11.8482 17.1667 12.7385 17.1667 13.6667C17.1667 14.595 16.798 15.4852 16.1416 16.1416C15.4852 16.798 14.595 17.1667 13.6667 17.1667ZM4.33337 17.1667C3.40512 17.1667 2.51488 16.798 1.8585 16.1416C1.20212 15.4852 0.833374 14.595 0.833374 13.6667C0.833374 12.7385 1.20212 11.8482 1.8585 11.1918C2.51488 10.5355 3.40512 10.1667 4.33337 10.1667C5.26163 10.1667 6.15187 10.5355 6.80825 11.1918C7.46463 11.8482 7.83337 12.7385 7.83337 13.6667C7.83337 14.595 7.46463 15.4852 6.80825 16.1416C6.15187 16.798 5.26163 17.1667 4.33337 17.1667ZM13.6667 7.83337C12.7385 7.83337 11.8482 7.46463 11.1918 6.80825C10.5355 6.15187 10.1667 5.26163 10.1667 4.33337C10.1667 3.40512 10.5355 2.51488 11.1918 1.8585C11.8482 1.20212 12.7385 0.833374 13.6667 0.833374C14.595 0.833374 15.4852 1.20212 16.1416 1.8585C16.798 2.51488 17.1667 3.40512 17.1667 4.33337C17.1667 5.26163 16.798 6.15187 16.1416 6.80825C15.4852 7.46463 14.595 7.83337 13.6667 7.83337ZM4.33337 7.83337C3.40512 7.83337 2.51488 7.46463 1.8585 6.80825C1.20212 6.15187 0.833374 5.26163 0.833374 4.33337C0.833374 3.40512 1.20212 2.51488 1.8585 1.8585C2.51488 1.20212 3.40512 0.833374 4.33337 0.833374C5.26163 0.833374 6.15187 1.20212 6.80825 1.8585C7.46463 2.51488 7.83337 3.40512 7.83337 4.33337C7.83337 5.26163 7.46463 6.15187 6.80825 6.80825C6.15187 7.46463 5.26163 7.83337 4.33337 7.83337Z" fill="black" />
                                </svg>
                            </div>
                            <div>
                                <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 4.75H18.5C19.2956 4.75 20.0587 5.06607 20.6213 5.62868C21.1839 6.19129 21.5 6.95435 21.5 7.75V12.25C21.5 13.0456 21.1839 13.8087 20.6213 14.3713C20.0587 14.9339 19.2956 15.25 18.5 15.25H3.5C2.70435 15.25 1.94129 14.9339 1.37868 14.3713C0.816071 13.8087 0.5 13.0456 0.5 12.25V7.75C0.5 6.95435 0.816071 6.19129 1.37868 5.62868C1.94129 5.06607 2.70435 4.75 3.5 4.75ZM3.5 6.25C3.10218 6.25 2.72064 6.40804 2.43934 6.68934C2.15804 6.97064 2 7.35218 2 7.75V12.25C2 12.6478 2.15804 13.0294 2.43934 13.3107C2.72064 13.592 3.10218 13.75 3.5 13.75H18.5C18.8978 13.75 19.2794 13.592 19.5607 13.3107C19.842 13.0294 20 12.6478 20 12.25V7.75C20 7.35218 19.842 6.97064 19.5607 6.68934C19.2794 6.40804 18.8978 6.25 18.5 6.25H3.5ZM0.5 1C0.5 0.801088 0.579018 0.610322 0.71967 0.46967C0.860322 0.329018 1.05109 0.25 1.25 0.25H20.75C20.9489 0.25 21.1397 0.329018 21.2803 0.46967C21.421 0.610322 21.5 0.801088 21.5 1C21.5 1.19891 21.421 1.38968 21.2803 1.53033C21.1397 1.67098 20.9489 1.75 20.75 1.75H1.25C1.05109 1.75 0.860322 1.67098 0.71967 1.53033C0.579018 1.38968 0.5 1.19891 0.5 1ZM0.5 19C0.5 18.8011 0.579018 18.6103 0.71967 18.4697C0.860322 18.329 1.05109 18.25 1.25 18.25H20.75C20.9489 18.25 21.1397 18.329 21.2803 18.4697C21.421 18.6103 21.5 18.8011 21.5 19C21.5 19.1989 21.421 19.3897 21.2803 19.5303C21.1397 19.671 20.9489 19.75 20.75 19.75H1.25C1.05109 19.75 0.860322 19.671 0.71967 19.5303C0.579018 19.3897 0.5 19.1989 0.5 19Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                        <div className="fillter-left__show">
                            <p>Showing 1–16 of 32 results</p>
                        </div>
                    </div>
                    <div className="fillter-right">
                        <div className="fillter-right__action">
                            <form >
                                <div className="show">
                                    <label >Show</label>
                                    <input type="text" defaultValue={16} readOnly />
                                </div>
                                <div className="short">
                                    <label >Short by</label>
                                    <select >
                                        <option >Default</option>
                                        <option >1</option>
                                        <option >2</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="all-products">
                <div className="new-products">
                    {/* Product  */}
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal">
                            <p>-30%</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product1.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        {/* <div class="deal">
                <p>-30%</p>
            </div> */}
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product2.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal">
                            <p>-50%</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product3.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal deal-new">
                            <p>New</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product4.jpg" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal">
                            <p>-30%</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product1.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        {/* <div class="deal">
                <p>-30%</p>
            </div> */}
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product2.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal">
                            <p>-50%</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product3.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal deal-new">
                            <p>New</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product4.jpg" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal">
                            <p>-30%</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product1.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        {/* <div class="deal">
                <p>-30%</p>
            </div> */}
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product2.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal">
                            <p>-50%</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product3.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal deal-new">
                            <p>New</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product4.jpg" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal">
                            <p>-30%</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product1.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        {/* <div class="deal">
                <p>-30%</p>
            </div> */}
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product2.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal">
                            <p>-50%</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product3.png" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    <div className="new-product">
                        {/* Deal  */}
                        <div className="deal deal-new">
                            <p>New</p>
                        </div>
                        {/* Product Image  */}
                        <div className="img-product">
                            <img src="/images/products/new-product4.jpg" />
                        </div>
                        {/* Product Info  */}
                        <div className="info-product">
                            {/* Product Name  */}
                            <div className="name-product">
                                <p>Syltherine</p>
                            </div>
                            {/* Product Desc  */}
                            <div className="desc-product">
                                <p>Stylish cafe chair</p>
                            </div>
                            {/* Product Price  */}
                            <div className="price-product">
                                <div className="price1">
                                    <p>2.500.000<span>đ</span></p>
                                </div>
                                <div className="price2">
                                    <p>3.500.000<span>đ</span></p>
                                </div>
                            </div>
                        </div>
                        {/* End Product Info  */}
                        {/* Product-Hover */}
                        <div className="product-hover">
                            <div className="view-product">
                                <p>View product</p>
                            </div>
                            <div className="add-to-card">
                                <p>Add to card</p>
                            </div>
                            <div className="social">
                                <div className="share">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46665C5.97333 8.31331 6 8.15998 6 7.99998C6 7.83998 5.97333 7.68665 5.94 7.53331L10.64 4.79331C11 5.12665 11.4733 5.33331 12 5.33331C13.1067 5.33331 14 4.43998 14 3.33331C14 2.22665 13.1067 1.33331 12 1.33331C10.8933 1.33331 10 2.22665 10 3.33331C10 3.49331 10.0267 3.64665 10.06 3.79998L5.36 6.53998C5 6.20665 4.52667 5.99998 4 5.99998C2.89333 5.99998 2 6.89331 2 7.99998C2 9.10665 2.89333 9.99998 4 9.99998C4.52667 9.99998 5 9.79331 5.36 9.45998L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6666C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.551 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="white" />
                                        </svg>
                                        <p>Share</p>
                                    </a>
                                </div>
                                <div className="compare">
                                    <a href="#">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="white" />
                                        </svg>
                                        <p>Compare</p>
                                    </a>
                                </div>
                                <div className="like">
                                    <a href="#">
                                        <svg width={16} height={15} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                                        </svg>
                                        <p>Like</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Product-Hover  */}
                    </div>
                    {/* End Product  */}
                </div>
                <div className="pagination">
                    {/* <a href="#">&laquo;</a> */}
                    <a href="#" className="active">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">Next</a>
                </div>
            </section>
        </>

    )
}

export default ShopPage
