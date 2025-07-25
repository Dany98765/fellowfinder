export async function signupValidation({ expertiseFields, otherField, money, selectedButton, desc, locale }){
    let success = false
    const msgs = (await import(`@/public/locales/${locale}/auth/authValidation.json`)).default;
    if (expertiseFields.length < 1 || expertiseFields.length > 5){
        return {
            message: msgs.expertiseFields,
            success
        }
    }
    if ((expertiseFields.includes("Other") || expertiseFields.includes("أخرى")) && otherField.length < 1){
        return {
            message: msgs.otherField,
            success
        }
    }
    if (selectedButton == 'funder' && money < 500){
        return {
            message: msgs.money,
            success
        }
    }
    if (desc.length < 150 || desc.length > 500){
        return {
            message: msgs.desc,
            success
        }
    }
    return {
        success: true
    }
}