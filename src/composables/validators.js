
export const validatorName = (val) => /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(val)
export const validatorPhone = (val) => /^[0-9]{9}$/.test(val)
export const validatorEmail = (val) =>/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)
export const validatorPostCode = (val) => /[0-9]{2}-[0-9]{3}$/.test(val)
export const validatorAddress = (val) => /^[#.0-9a-zA-Z\s,-]+$/.test(val)
export const validatorNIP = (val) => /^[0-9]{10}$/.test(val)

export const validatorData = (val) => /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(val)
export const validatorCVV = (val) => /^[0-9]{3,4}$/.test(val)
export const validatorCard = (val) => /^[0-9]{12}$/.test(val)