import IsEmail from "isemail";

export async function proceedValidation({ name, email, password, country, phoneNumber, locale }){
    let success = false
    const msgs = (await import(`@/public/locales/${locale}/auth/authValidation.json`)).default;
    if (name.length < 6 || name.length > 20){
        return {
            message: msgs.name,
            success
        }
    }
    if (!IsEmail.validate(email)){
        return {
            message: msgs.email,
            success
        }
    }
    if (password.length < 8 || name.length > 32){
        return {
            message: msgs.password,
            success
        }
    }
    if (phoneNumber.length < 4 || phoneNumber.length > 15){
        return {
            message: msgs.phoneNumber,
            success
        }
    }
    if (country.length < 1){
        return {
            message: msgs.country,
            success
        }
    }
    return {
        success: true
    }
}