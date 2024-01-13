
import userService from '../services/userService';

let handleGetAllUsers = async (req, res) => {
    try {
        let users = await userService.handleGetAllUsers();

        return res.status(200).json({
            errCode: 0,
            data: users
        })



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })



    }




}

let handleCreateAllUsers = async (req, res) => {
    try {
        let users = await userService.handleCreateAllUsers(req.body);
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleDeleteUsers = async (req, res) => {
    try {
        let users = await userService.handleDeleteUsers(req.query.id);
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleEditUsers = async (req, res) => {
    try {
        let users = await userService.handleEditUsers(req.body);
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleLoginUsers = async (req, res) => {
    try {
        let users = await userService.handleLoginUsers(req.body);
        await res.cookie("jwt", users.token1, { httpOnly: true })

        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleCreateAllProduct = async (req, res) => {
    try {
        let users = await userService.handleCreateAllProduct(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetAllProduct = async (req, res) => {
    try {
        let users = await userService.handleGetAllProduct();
        res.cookie("abc", "abc", { httpOnly: true })


        console.log('Cookie: ', req.user);
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })



    }



}

let handleDeleteProduct = async (req, res) => {
    try {
        let users = await userService.handleDeleteProduct(req.query.id);
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleEditProduct = async (req, res) => {
    try {
        let users = await userService.handleEditProduct(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetUser = async (req, res) => {
    try {
        let users = await userService.handleGetUser(req.query.id);
        return res.status(200).json({
            errCode: 0,
            errMessage: 'success',
            data: users
        })



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })



    }
}

let handleGetProduct = async (req, res) => {
    try {
        let users = await userService.handleGetProduct(req.query.id);
        return res.status(200).json({
            errCode: 0,
            errMessage: 'success',
            data: users
        })



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })



    }
}

let handleCreateOrders = async (req, res) => {
    try {
        let users = await userService.handleCreateOrders(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleGetOrders = async (req, res) => {
    try {
        let users = await userService.handleGetOrders(req.query.status);
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })



    }

}

let handleEditOrders = async (req, res) => {
    try {
        let users = await userService.handleEditOrders(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleCreatedk = async (req, res) => {
    try {
        let users = await userService.handleCreatedk(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}


let handleEditdk = async (req, res) => {
    try {
        let users = await userService.handleEditdk(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}

let handleEditOrdersComplete = async (req, res) => {
    try {
        let users = await userService.handleEditOrdersComplete(req.body);
        console.log(req.body)
        return res.status(200).json(users)



    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'server error'
        })


    }
}


module.exports = {
    handleGetAllUsers, handleCreateAllUsers, handleDeleteUsers,
    handleEditUsers, handleLoginUsers, handleCreateAllProduct,
    handleGetAllProduct, handleDeleteProduct, handleEditProduct,
    handleGetUser, handleGetProduct, handleCreateOrders, handleGetOrders,
    handleEditOrders, handleCreatedk, handleEditdk, handleEditOrdersComplete

}