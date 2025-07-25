import IsEmail from "isemail";

export default async function SigninValidation({ email, password }){
    let success = false
    const msgs = (await import(`@/public/locales/${locale}/auth/signupValidation.json`)).default;
    if (!IsEmail.validate(email)){
        return {
            message: msgs.email,
            success
        }
    }
    if (password.length < 8 || password.length > 20){
        return {
            message: msgs.password,
            success
        }
    }
    return {
        success: true
    }
}