import { User } from '../models/user.js'


// this is controllers for my user login and register
export const Login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "Invalid Email or Password"
        })
    }
    const isMatch = user.password === password;
    if (isMatch)
        return res.status(201).json({
            success: true,
            message: "welcome  back"
        });

    res.status(404).json({
        success: false,
        message: "Invalid Email or Password"
    })

}
export const Regitser = async (req, res, next) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user)
        return res.status(404).json({
            success: true, message: 'User Already Exist'
        })

    user = await User.create({ name, email, password });

    res.status(201).json({
        success: true,
        message: "Registered Sucessfully"
    });

}
export const logout = (req, res) => {
 }