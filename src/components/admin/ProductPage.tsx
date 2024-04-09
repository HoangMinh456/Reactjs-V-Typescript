import React from 'react';
import { Link } from 'react-router-dom';

const ProductPage = ({ products, removeProduct }: any) => {
    // console.log(products);
    // const images = []
    // products.map((item, index) => {
    //     item.image && item.image.map((img, index) => (
    //         images.push(img)
    //     ))
    // });
    return (
        <section className="main">
            <div className='container'>
                <h1>Quản lý sản phẩm</h1>
                <Link to={`/admin/products/add`}><button>Thêm sản phẩm</button></Link>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Mô tả</th>
                            <th>Mô tả chi tiết</th>
                            <th>Ảnh</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item: any, index: number) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.desc}</td>
                                <td>{item.descct}</td>
                                {/* <td>
                                        <img src={images[0]} alt={item.name} />
                                    </td> */}
                                {/* <td>
                                {images.map((img, index) => (
                                    <img key={index} src={img} alt={img} width={150} height={100} />
                                ))}
                            </td> */}
                                <td>
                                    <img key={index} src={item.imagemain} alt={item.imagemain} width={150} height={100} />
                                </td>
                                <td>
                                    <Link to={`/admin/products/${item._id}/edit`}>Sửa</Link>
                                    <button onClick={() => removeProduct(item._id)} >Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </section>
    );
}

export default ProductPage;
