import { parsePhoneNumberFromString } from 'libphonenumber-js'

export const getStatus = status => {
    return status === 'added' ? 'ДОБАВЛЕН' : 'Undefined status'
}

export const formatPhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    return phoneNumber.format('INTERNATIONAL')
}
