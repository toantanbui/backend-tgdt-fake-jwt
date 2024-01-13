
import { and } from 'sequelize';
import db from '../models/index';
require('dotenv').config();
import emailService from './emailService';
import { v4 as uuidv4 } from 'uuid';
import { createJWT } from '../middleware/JWTAction';

let handleGetAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Users.findAll({

            })
            resolve(users);

        } catch (e) {
            reject(e)


        }
    })
}

let handleCreateAllUsers = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.password || !data.firstName ||
                !data.lastName || !data.address || !data.gender || !data.roleId
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                await db.Users.create({
                    email: data.email,
                    password: data.password,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    gender: data.gender,
                    roleId: data.roleId,
                    phonenumber: data.phonenumber
                })
                resolve({
                    errCode: 0,
                    errMessage: 'create success',

                });
            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleDeleteUsers = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })

            } else {
                let users = await db.Users.findOne({
                    where: { id: data }
                })
                if (users) {
                    await users.destroy()
                }
                resolve({
                    errCode: 0,
                    errMessage: 'successful delete',

                })
            }




        } catch (e) {
            reject(e)


        }
    })
}

let handleEditUsers = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.firstName || !data.lastName || !data.address
                || !data.password || !data.roleId || !data.gender) {

                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })



            } else {



                let users = await db.Users.findOne({
                    where: { id: data.id }
                })
                if (users) {
                    users.firstName = data.firstName;
                    users.lastName = data.lastName;
                    users.address = data.address;

                    users.password = data.password;

                    users.roleId = data.roleId;
                    users.gender = data.gender;
                    users.image = data.image;
                    users.phonenumber = data.phonenumber;

                    await users.save();

                    resolve({
                        errCode: 0,
                        errMessage: 'edit success',
                    })
                } else (


                    resolve()
                )
            }


        } catch (e) {
            reject(e)


        }
    })

}

let handleLoginUsers = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.password) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })

            } else {

                let users = await db.Users.findOne({
                    where: {
                        email: data.email,
                        password: data.password,
                        status: 'R1'
                    }
                })
                if (users) {
                    let token = createJWT({
                        email: data.email,
                        password: data.password,
                        status: 'R1',
                        expiresIn: '1h'
                    });


                    resolve({
                        errCode: 0,
                        errMessage: 'successful login',
                        data: users,
                        token1: token

                    });
                }
                else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Wrong account or password, the account has not been confirmed',

                    });
                }

            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleCreateAllProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.KeyProduct || !data.NameProduct || !data.Screen ||
                !data.OperatingSystem || !data.RAM || !data.Capacity || !data.Battery ||
                !data.Price || !data.DetailInfor || !data.avatar
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                await db.Product.create({

                    KeyProduct: data.KeyProduct,
                    NameProduct: data.NameProduct,
                    Screen: data.Screen,
                    OperatingSystem: data.OperatingSystem,
                    RAM: data.RAM,
                    Capacity: data.Capacity,
                    Battery: data.Battery,
                    Price: data.Price,
                    DetailInfor: data.DetailInfor,
                    Image: data.avatar
                })
                resolve({
                    errCode: 0,
                    errMessage: 'create success',

                });
            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleGetAllProduct = () => {

    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Product.findAll({

            })
            if (users) {
                resolve({
                    errCode: 0,
                    errMessage: 'success',
                    data: users
                })
            } else {
                resolve({
                    errCode: 3,
                    errMessage: 'Not found',

                })
            }


        } catch (e) {
            reject(e)


        }
    })
}

let handleDeleteProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })

            } else {
                let users = await db.Product.findOne({
                    where: { id: data }
                })
                if (users) {
                    await users.destroy()
                }
                resolve({
                    errCode: 0,
                    errMessage: 'successful delete',

                })
            }




        } catch (e) {
            reject(e)


        }
    })
}

let handleEditProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.KeyProduct || !data.NameProduct
                || !data.Screen || !data.OperatingSystem || !data.RAM ||
                !data.Capacity || !data.Battery || !data.Price ||
                !data.DetailInfor || !data.avatar
            ) {

                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })



            } else {



                let users = await db.Product.findOne({
                    where: { id: data.id }
                })
                if (users) {
                    users.KeyProduct = data.KeyProduct;
                    users.NameProduct = data.NameProduct;
                    users.Screen = data.Screen;

                    users.OperatingSystem = data.OperatingSystem;

                    users.RAM = data.RAM;
                    users.Capacity = data.Capacity;
                    users.Battery = data.Battery;
                    users.Price = data.Price;
                    users.Image = data.avatar;
                    users.DetailInfor = data.DetailInfor;

                    await users.save();

                    resolve({
                        errCode: 0,
                        errMessage: 'edit success',
                    })
                } else (


                    resolve()
                )
            }


        } catch (e) {
            reject(e)


        }
    })

}

let handleGetUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            }
            let users = await db.Users.findOne({
                where: { id: data }
            })
            resolve(users);

        } catch (e) {
            reject(e)


        }
    })
}

let handleGetProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            }
            let users = await db.Product.findOne({
                where: { id: data }
            })
            resolve(users);

        } catch (e) {
            reject(e)


        }
    })
}

let buildUrlEmail = (idUser, token1) => {

    let result = `${process.env.URL_REACT}/order-confirmation-successful?token=${token1}&idUser=${idUser}`
    return result;
}

let handleCreateOrders = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.idUser || !data.idProduct || !data.amount ||
                !data.price || !data.address || !data.email
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                let token1 = uuidv4();
                console.log('token1', token1)

                let users = await db.Orders.findOrCreate({
                    where: {
                        idProduct: data.idProduct
                    },
                    defaults: {
                        idUser: data.idUser,
                        idProduct: data.idProduct,
                        amount: data.amount,
                        price: data.price,
                        address: data.address,
                        email: data.email,
                        status: 'R2',
                        token: token1


                    }


                })
                if (users) {


                    await emailService.handleSendEmail({

                        email: data.email,
                        redirectLink: buildUrlEmail(data.idUser, token1)
                    })



                    resolve({
                        errCode: 0,
                        errMessage: 'Đơn đặt hàng của bạn đã gửi thành công, mời bạn vui lòng kiểm tra email để xác nhận đơn đặt hàng',
                        data: users

                    });

                } else {
                    resolve({
                        errCode: 3,
                        errMessage: 'Not found',
                        data: users

                    });
                }

            }

        } catch (e) {
            reject(e)


        }
    })
}

let handleGetOrders = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Orders.findAll({

                where: { status: data },
                include: [
                    {
                        model: db.Users, as: 'idUserData', attributes: ['firstName', 'lastName', 'email',
                            'phonenumber']
                    },
                    {
                        model: db.Product, as: 'idProductData', attributes: ['KeyProduct', 'NameProduct',
                            'Screen', 'OperatingSystem', 'RAM', 'Capacity', 'Battery',
                        ]
                    }
                ],

                nest: true

            })


            if (users) {
                resolve({
                    errCode: 0,
                    errMessage: 'data fetched successfully',
                    data: users
                });
            } else {
                resolve({
                    errCode: 3,
                    errMessage: 'not found',
                });

            }


        } catch (e) {
            reject(e)


        }
    })
}

let handleEditOrders = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.idUser || !data.token) {

                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })



            } else {



                let users = await db.Orders.findOne({
                    where: {
                        idUser: data.idUser,
                        token: data.token
                    }
                })
                console.log('edit orders', users)
                if (users) {
                    users.status = 'R1';



                    await users.save();

                    resolve({
                        errCode: 0,
                        errMessage: 'edit success',
                    })
                } else (


                    resolve({
                        errCode: 3,
                        errMessage: 'Not found'
                    })
                )
            }


        } catch (e) {
            reject(e)


        }
    })

}


let LoadEmaildk = (data, token) => {

    let result = `${process.env.URL_REACT}/userdk-confirmation-successful?token2=${token}&firstName=${data}`
    return result;
}

let handleCreatedk = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.password || !data.firstName || !data.lastName
                || !data.phonenumber
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing paramater'
                })



            } else {
                let token2 = uuidv4();

                let getData = await db.Users.findOne({
                    where: { email: data.email }

                })
                console.log('getData', getData)

                if (getData) {
                    resolve({
                        errCode: 4,
                        errMessage: 'Email đã tồn tại hoặc đã được đăng kí, vui lòng sử dụng email khác'
                    })

                } else {


                    await db.Users.create({
                        firstName: data.firstName,
                        lastName: data.lastName,

                        email: data.email,
                        password: data.password,
                        phonenumber: data.phonenumber,
                        status: 'R2',
                        token: token2

                    })

                    await emailService.handleSendEmaildk({
                        email: data.email,
                        redirectLink: LoadEmaildk(data.firstName, token2)
                    });



                    resolve({
                        errCode: 0,
                        errMessage: 'Yêu cầu đăng kí tài khoản của bạn đã được gửi thành công, vui lòng check email để xác nhận đăng kí',

                    });
                }

            }




        } catch (e) {
            reject(e)


        }
    })
}

let handleEditdk = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.firstName || !data.token2) {

                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })



            } else {



                let users = await db.Users.findOne({
                    where: {
                        firstName: data.firstName,
                        token: data.token2
                    }
                })
                console.log('edit orders', users)
                if (users) {
                    users.status = 'R1';



                    await users.save();

                    resolve({
                        errCode: 0,
                        errMessage: 'edit success',
                    })
                } else (


                    resolve({
                        errCode: 3,
                        errMessage: 'Not found'
                    })
                )
            }


        } catch (e) {
            reject(e)


        }
    })
}


let handleEditOrdersComplete = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.idOrder) {

                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })



            } else {



                let users = await db.Orders.findOne({
                    where: {
                        id: data.idOrder,

                    }
                })
                console.log('edit orders', users)
                if (users) {
                    users.status = 'R3';



                    await users.save();

                    resolve({
                        errCode: 0,
                        errMessage: 'edit success',
                    })
                } else (


                    resolve({
                        errCode: 3,
                        errMessage: 'Not found'
                    })
                )
            }


        } catch (e) {
            reject(e)


        }
    })
}






module.exports = {
    handleGetAllUsers, handleCreateAllUsers, handleDeleteUsers,
    handleEditUsers, handleLoginUsers, handleCreateAllProduct,
    handleGetAllProduct, handleDeleteProduct, handleEditProduct,
    handleGetUser, handleGetProduct, handleCreateOrders,
    handleGetOrders, handleEditOrders, handleCreatedk, handleEditdk,
    handleEditOrdersComplete
}