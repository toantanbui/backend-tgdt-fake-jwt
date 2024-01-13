import CRUDService from '../services/CRUDService'

let postCRUD = (req, res) => {
    try {
        // res.cookie("test", "test cooki")
        // console.log('Cookie: ', req.cookies);

        return res.render('view1.ejs')

    } catch (e) {
        console.log(e);
    }
}

let actionPostCRUD = async (req, res) => {
    try {
        await CRUDService.createNewUser(req.body);
        res.send('thành công')

    } catch (e) {
        console.log('actionPostCRUD', e)
    }
}


module.exports = { postCRUD, actionPostCRUD }