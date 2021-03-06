module.exports = {
    accepted: ':attribute deve está presente.',
    acceptedIf: ':attribute deveria está presente se o campo :arg0 é :arg1.',
    acceptedNotIf: ':attribute não pode está presente se o campo :arg0 é :arg1.',
    activeUrl: ':attribute não é uma url válida.',
    after: ':attribute deve ser uma data depois :arg0.',
    afterOrEqual: ':attribute deve ser uma data depois ou igual :arg0.',
    alpha: ':attribute pode conter apenas letras.',
    alphaDash: ':attribute pode conter apenas letras, números, e traços.',
    alphaNum: ':attribute pode conter apenas letras and números.',
    alphaNumeric: ':attribute pode conter apenas letras and números.',
    array: ':attribute deve ser uma lista.',
    arrayUnique: ':attribute deve ser uma lista de valores únicos.',
    arrayUniqueObjects: ':attribute deve ser uma lista de objetos :args únicos.',
    ascii: ':attribute pode conter apenas ascii caracteres válidos.',
    base64: ':attribute deve ser um base64 válido.',
    before: ':attribute deve ser uma data antes de :arg0.',
    beforeOrEqual: ':attribute deve ser uma data antes de ou igual a:date.',
    between: ':attribute deve ser entre :arg0 e :arg1',
    boolean: ':attribute deve ser boleano.',
    confirmed: ':attribute confirmação não corresponde.',
    contains: ':attribute deve conter :arg0.',
    creditCard: ':attribute deve ser um número de cartão de crédito válido.',
    date: ':attribute deve ser uma data válida.',
    dateAfter: ':attribute deve ser uma data depois :arg0.',
    dateAfterToday: ':attribute deve ser uma data depois :arg0 :arg1.',
    dateDaysAfterToday: ':attribute deve ser uma data depois :arg0 days.',
    dateYearsAfterToday: ':attribute deve ser uma data depois :arg0 years.',
    dateDaysBeforeToday: ':attribute deve ser uma data antes de :arg0 days.',
    dateYearsBeforeToday: ':attribute deve ser uma data antes de :arg0 years.',
    dateBefore: ':attribute deve ser uma data antes de :arg0.',
    dateBeforeToday: ':attribute deve ser uma data antes de :arg0 :arg1.',
    dateFormat: ':attribute não corresponde ao formato :arg0.',
    datetime: ':attribute deve ser um datetime(YYYY-MM-DD HH:mm:ss) válido.',
    dateiso: ':attribute deve ser uma data ISO-8601 válida.',
    decimal: ':attribute deve ser um valor décimal válido.',
    different: ':attribute e :arg0 deve ser diferente.',
    digits: ':attribute deve ser de :arg0 digitos.',
    digitsBetween: ':attribute deve ser entre :arg0 e :arg1.',
    dimensions: ':attribute deve atender às restrições de dimensão :args.',
    domain: ':attribute deve ser um domínio válido.',
    email: ':attribute deve ser um endereço de email válido.',
    equals: ':attribute deve ser igual a :arg0.',
    gt: ':attribute deve ser maior que :args.',
    gte: ':attribute deve ser maior que ou igual a :args.',
    length: ':attribute comprimento não é aceitável.',
    lt: ':attribute deve ser menor que :args',
    lte: ':attribute deve ser menor que ou iguals :args',
    hash: ':attribute deve ser um hash :arg0 válido.',
    hex: ':attribute deve ser um hexadecimal válido.',
    hexColor: ':attribute deve ser uma cor hexadecimal válida.',
    in: ':attribute selecionado é inválido.',
    integer: ':attribute deve ser um inteiro.',
    ip: ':attribute deve ser um IP válido.',
    ipv4: ':attribute deve ser um IPv4 válido.',
    ipv6: ':attribute deve ser um IPv6 válido.',
    iso8601: ':attribute deve ser um texto ISO8601 válido.',
    json: ':attribute deve ser um JSON válido.',
    latLong: ':attribute deve ser separados por vírgula, lat e long sem espaços.',
    lengthBetween: ':attribute tamanho deve ser entre :arg0 - :arg1.',
    macAddress: ':attribute deve ser um MAC válido.',
    max: ':attribute não pode ser maio que :arg0.',
    maxLength: ':attribute não pode ser maio que :arg0.',
    mime: ':attribute deve ser um arquivo do tipo: :args.',
    min: ':attribute deve ser pelo menos :arg0.',
    minLength: ':attribute não pode ser menor que :arg0.',
    mongoId: ':attribute deve ser um mongo id válido.',
    notContains: ':attribute não pode conter :arg0.',
    notIn: ':attribute selecionado é inválido.',
    nullable: ':attribute é necessário.',
    numeric: ':attribute deve ser um número.',
    object: ':attribute deve ser um objeto.',
    phoneNumber: ':attribute deve ser um telefone válido.',
    regex: ':attribute tem o formato é inválido.',
    required: ':attribute é obrigatório.',
    requiredIf: ':attribute é obrigatório.',
    requiredNotIf: ':attribute é obrigatório.',
    requiredWith: ':attribute é obrigatório.',
    requiredWithout: ':attribute é obrigatório.',
    same: ':attribute e :arg0 precisam ser iguais.',
    size: ':attribute deve ser :arg0.',
    sometimes: ':attribute é obrigatório.',
    string: ':attribute deve ser um texto.',
    timezone: ':attribute deve ser um timezone válido.',
    unique: ':attribute já foi encontrado, deve ser único.',
    url: ':attribute possui um formato inválido.',
    any: 'Pelo menos um :attribute deve ser informado',
    $niceNames: {},
    $custom: {
      custom_attribute: 'Mensagem vai aqui.',
      'custom_attribute.rule': 'Mensagem vai aqui.',
    },
    $default: ':attribute com valor mal formado.',
  };
  