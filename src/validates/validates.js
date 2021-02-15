class Validators {

    static isOnlyText = (value) => {
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(value)
    }

    static notBlank = (value) => {
        const patt = new RegExp(/([A-Za-z0-9-]+)/);
        return patt.test(value);
    }
    static phone = (value) => {
        const patt = new RegExp(/^\(?\d{2}\)?[\s-]?\d{4}-?\d{4}$/);
        return patt.test(value);
    }

    static cep = (value) => {
        const patt = new RegExp(/^\d{5}-\d{3}$/);
        return patt.test(value);
    }

    static validate = (value) => {
        const patt = new RegExp(/^\d{2}-\d{4}$/);
        return patt.test(value);
    }


    static cvv = (value) => {
        const patt = new RegExp(/^\d{3}/);
        return patt.test(value);
    }

    static cellphone = (value) => {
        const patt = new RegExp(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/);
        return patt.test(value);
    }

    static cpf = (value) => {
        const patt = new RegExp(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/);
        return patt.test(value);
    }

    static email = (value) => {
        const patt = new RegExp(/^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/);
        return patt.test(value);
    }

    static emailcompare = (emailConfirm, email) => {

        const patt = new RegExp(/^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/);
        let test = patt.test(emailConfirm);

        if (test && emailConfirm === email) {
            return true
        } else {
            return false
        }
    }

}

export default Validators;