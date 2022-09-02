
//--------------------------------------------------------------------//
//------------------------ SERIES & SUBSERIES ------------------------//
//--------------------------------------------------------------------//

export const SERIES_DOCS = {
    'GENERIC': {
        'DOCUMENTOS GENERALES': [700, 803, 511, 512, 514, 513, 516, 517, 900,
            519, 535, 520, 536, 521, 522, 537, 523, 524, 538, 525, 526, 539, 527, 528, 540, 529, 530, 541, 531, 532, 542, 533, 534, // PROF DOCS
            653, 6610, 6614, 906, 911, 820, 921, 912, 3222, 999],
        'DOCUMENTOS EXPEDIDOS': [996, 842, 400, 920, 854, 856, 855, 823, 824, 819, 821, 831, 827, 828],
        'SOPORTE DE PAGO DE IMPUESTOS Y EXPENSAS': [701, 702, 703, 705, 706, 707],
        'LICENCIA': [835, 837, 838, 844, 845, 857, 915],
        'ANEXOS TECNICOS': [997, 6601, 652, 6604, 6615, 686, 602, 6608, 916, 917, 6605, 918, 919, 998, 999]
    },
    '1100-40.01': false,
    '1100-40.02': false,
    '1100-40.03': false,
    '1100-40.04': false,
    '1100-40.05': false,
    '1100-40.06': false,
    '1100-40.07': false,

    '1100-190.01': false,
    '1100-190.02': false,
    '1100-190.03': false,
    '1100-190.04': false,
    '1100-190.05': false,
    '1100-190.06': false,
    '1100-190.07': false,
    '1100-190.08': false,
    '1100-190.09': false,
    '1100-190.10': false,
    '1100-190.11': false,
    '1100-190.12': false,
    '1100-190.13': false,
    '1100-190.14': false,
    '1100-190.15': false,
    '1100-190.16': false,
    '1100-190.17': false,
    '1100-190.18': false,
    '1100-190.19': false,
    '1100-190.20': false,
    '1100-190.21': false,
    '1100-190.22': false,
    '1100-190.23': false,
    '1100-190.24': false,
    '1100-190.25': false,
    '1100-190.26': false,
    '1100-190.27': false,
    '1100-190.28': false,
    '1100-190.29': false,
    '1100-190.30': false,

    '1100-200': {
        'DOCUMENTOS GENERALES': [701, 803, 511, 512, 514, 513, 516, 517, 900, 519, 520, 6610, 6614, 906, 911, 820, 999],
        'DOCUMENTOS EXPEDIDOS': [819, 811, 812, 821, 823, 824, 831, 826, 835, 837, 838, 844, 845, 857, 915],
        'ANEXOS TECNICOS': [997, 916, 6605, 998, 996, 700, 842, 400]

    },

    '1100-250.01': false,
    '1100-250.02': false,

    '1100-260.01': false,
    '1100-260.02': false,
    '1100-260.03': false,
    '1100-260.04': false,
    '1100-260.05': false,
    '1100-260.06': false,
    '1100-260.07': false,
    '1100-260.08': false,
    '1100-260.09': false,
    '1100-260.10': false,
    '1100-260.11': false,
    '1100-260.12': false,
    '1100-260.13': false,
    '1100-260.14': false,
    '1100-260.15': false,

    '1100-270': false,
}
export const WORKER_NEEDED_FOR_MODULE = {
    '1:A': ['URBANIZADOR O CONSTRUCTOR RESPONSABLE', 'ARQUITECTO PROYECTISTA', 'INGENIERO TOPOGRAFO Y/O TOPÓGRAFO', 'REVISOR INDEPENDIENTE DE LOS DISEÑOS ESTRUCTURALES'],
    '1:B': ['URBANIZADOR O CONSTRUCTOR RESPONSABLE', 'ARQUITECTO PROYECTISTA', 'INGENIERO TOPOGRAFO Y/O TOPÓGRAFO'],
    '1:C': ['ARQUITECTO PROYECTISTA', 'INGENIERO TOPOGRAFO Y/O TOPÓGRAFO'],
    '1:D': ['URBANIZADOR O CONSTRUCTOR RESPONSABLE', 'ARQUITECTO PROYECTISTA', 'INGENIERO CIVIL DISEÑADOR ESTRUCTURAL', 'REVISOR INDEPENDIENTE DE LOS DISEÑOS ESTRUCTURALES'],
    '5:A': ['DISEÑADOR DE ELEMENTOS NO ESTRUCTURALES', 'INGENIERO CIVIL GEOTECNISTA'],
    '5:B': ['DISEÑADOR DE ELEMENTOS NO ESTRUCTURALES'],
    '7:B': ['REVISOR INDEPENDIENTE DE LOS DISEÑOS ESTRUCTURALES'],
    '7:C': ['REVISOR INDEPENDIENTE DE LOS DISEÑOS ESTRUCTURALES'],
    '1:F': ['ARQUITECTO PROYECTISTA', 'INGENIERO CIVIL DISEÑADOR ESTRUCTURAL'],
    '2:B': ['URBANIZADOR O CONSTRUCTOR RESPONSABLE'],
    '2:D': ['URBANIZADOR O CONSTRUCTOR RESPONSABLE'],
    '2:PH': ['ARQUITECTO PROYECTISTA'],
    '2:TIERRA': ['INGENIERO CIVIL DISEÑADOR ESTRUCTURAL'],
    '2:PISCINA': ['ARQUITECTO PROYECTISTA', 'INGENIERO CIVIL DISEÑADOR ESTRUCTURAL'],
}
export const SERIES_MODULES_RELATION = {
    '1100-40': ['1:G,2:OA'],

    //'1100-70': [''],

    '1100-190': ['1:A', '1:B', '1:C', '1:D', '1:E',],

    '1100-200': ['1:G,2:C'],

    '1100-250': ['1:G,2:B'],

    '1100-260': ['1:D,1:F', '1:F'],

    '1100-270': ['1:G,2:D'],
}
export const SUBSERIES_MODULES_RELATION = {
    '1100-40.01': ['1:G', '2:OA', '2:COTAS'],
    '1100-40.02': ['1:G', '2:OA', '2:PH'],
    '1100-40.03': ['1:G', '2:OA', '2:TIERRA'],
    '1100-40.04': ['1:G', '2:OA', '2:PISCINA'],
    '1100-40.05': ['1:G', '2:OA', '2:PLANOS'],
    '1100-40.06': ['1:G', '2:OA', '2:BIENES'],
    '1100-40.07': ['1:G', '2:OA', '2:ESTRUCTURAL'],

    //'1100-70.01': [''],
    //'1100-70.02': [''],
    //'1100-70.03': [''],
    //'1100-70.04': [''],

    '1100-190.01': ['1:D', '5:A'],
    '1100-190.02': ['1:D', '5:A', '5:G'],
    '1100-190.03': ['1:D', '5:I', '5:G'],
    '1100-190.04': ['1:D', '5:B'],
    '1100-190.05': ['1:D', '5:D'],
    '1100-190.06': ['1:D', '5:C'],
    '1100-190.07': ['1:D', '5:F'],
    '1100-190.08': ['1:D', '5:E'],
    '1100-190.09': ['1:D', '5:H'],
    '1100-190.10': ['1:D', '5:I'],
    '1100-190.11': ['1:D', '5:B', '5:D'],
    '1100-190.12': ['1:D', '5:C', '5:D'],
    '1100-190.13': ['1:D', '5:B', '5:C'],
    '1100-190.14': ['1:D', '5:B', '5:F'],
    '1100-190.15': ['1:D', '5:C', '5:D', '5:F'],
    '1100-190.16': ['1:D', '5:B', '5:C', '5:F'],
    '1100-190.17': ['1:D', '5:B', '5:G'],
    '1100-190.18': ['1:D', '5:C', '5:D', '5:G'],
    '1100-190.19': ['1:D', '5:B', '5:C', '5:G'],
    '1100-190.20': ['1:D', '5:B', '5:F', '5:G'],
    '1100-190.21': ['1:D', '5:C', '5:D', '5:F', '5:G'],
    '1100-190.22': ['1:D', '5:B', '5:C', '5:F', '5:G'],
    '1100-190.23': ['1:C', '4:B'],
    '1100-190.24': ['1:C', '4:A'],
    '1100-190.25': ['1:C', '4:C:'],
    '1100-190.26': ['1:A', '3:A:'],
    '1100-190.27': ['1:A', '3:B:'],
    '1100-190.28': ['1:A', '3:C'],
    '1100-190.29': ['1:B'],
    '1100-190.30': ['1:E'],
    '1100-190.31': ['1:D', '5:B', '5:C', '5:D'],
    '1100-190.32': ['1:D', '5:D', '5:F', '5:G'],
    '1100-190.33': ['1:D', '5:B', '5:C', '5:D', '5:F'],
    '1100-190.34': ['1:D', '5:B', '5:C', '5:D', '5:g'],
    '1100-190.35': ['1:D', '5:B', '5:D', '5:F'],
    '1100-190.36': ['1:D', '5:B', '5:D', '5:F', '5:g'],
    '1100-190.37': ['1:D', '5:B', '5:D', '5:g'],

    '1100-250.01': ['1:G', '2:B'],
    //'1100-250.02': ['1:G', '2:B'],

    '1100-260.00': ['1:F'],
    '1100-260.01': ['1:D', '1:F', '5:D'],
    '1100-260.02': ['1:D', '1:F', '5:B'],
    '1100-260.03': ['1:D', '1:F', '5:C'],
    '1100-260.04': ['1:D', '1:F', '5:F'],
    '1100-260.05': ['1:D', '1:F', '5:g'],
    '1100-260.06': ['1:D', '1:F', '5:D', '5:g'],
    '1100-260.07': ['1:D', '1:F', '5:B', '5:C', '5:D', '5:F', '5:g'],
    '1100-260.08': ['1:D', '1:F', '5:B', '5:F'],
    '1100-260.09': ['1:D', '1:F', '5:D', '5:F'],
    '1100-260.10': ['1:D', '1:F', '5:C', '5:F'],
    '1100-260.11': ['1:D', '1:F', '5:B', '5:g'],
    '1100-260.12': ['1:D', '1:F', '5:C', '5:g'],
    '1100-260.13': ['1:D', '1:F', '5:B', '5:D'],
    '1100-260.14': ['1:D', '1:F', '5:C', '5:D'],
    '1100-260.15': ['1:D', '1:F', '5:B', '5:C'],
    '1100-260.16': ['1:D', '1:F', '5:B', '5:D', '5:F'],
    '1100-260.17': ['1:D', '1:F', '5:D', '5:F', '5:g'],
    '1100-260.18': ['1:D', '1:F', '5:B', '5:C', '5:D'],
    '1100-260.19': ['1:D', '1:F', '5:B', '5:C', '5:D', '5:g'],
    '1100-260.20': ['1:D', '1:F', '5:C', '5:D', '5:F', '5:g'],
    '1100-260.21': ['1:D', '1:F', '5:B', '5:D', '5:g'],
    '1100-260.22': ['1:D', '1:F', '5:B', '5:D', '5:F', '5:g'],
    '1100-260.23': ['1:D', '1:F', '5:C', '5:D', '5:G'],
}

export function _IDENTIFY_SERIES(_CHILD_1, select = [1, 1, 1, 1, 1], isOA) {
    let _CONDITONS = [];
    let _CHILD = _CHILD_1;
    if ([_CHILD.item_1, _CHILD.item_2, _CHILD.item_3, _CHILD.item_4, _CHILD.item_5].some(ch => ch == null || ch == undefined)) return _CONDITONS;
    if (select[0]) {
        if (_CHILD.item_1.includes('A')) _CONDITONS.push('1:A');
        if (_CHILD.item_1.includes('B')) _CONDITONS.push('1:B');
        if (_CHILD.item_1.includes('C')) _CONDITONS.push('1:C');
        if (_CHILD.item_1.includes('D')) _CONDITONS.push('1:D');
        if (_CHILD.item_1.includes('E')) _CONDITONS.push('1:E');
        if (_CHILD.item_1.includes('F')) _CONDITONS.push('1:F');
        if (_CHILD.item_1.includes('G')) _CONDITONS.push('1:G');
    }

    if (select[1]) {
        if (_CHILD.item_2 == 'A') _CONDITONS.push('2:A');
        if (_CHILD.item_2 == 'B') _CONDITONS.push('2:B');
        if (_CHILD.item_2 == 'C') _CONDITONS.push('2:C');
        if (_CHILD.item_2 == 'D') _CONDITONS.push('2:D');
        if (REGEX_MATCH_1100_40_01(_CHILD.item_2) ||
            REGEX_MATCH_1100_40_02(_CHILD.item_2) ||
            REGEX_MATCH_1100_40_03(_CHILD.item_2) ||
            REGEX_MATCH_1100_40_04(_CHILD.item_2) ||
            REGEX_MATCH_1100_40_05(_CHILD.item_2) ||
            REGEX_MATCH_1100_40_06(_CHILD.item_2) ||
            REGEX_MATCH_1100_40_07(_CHILD.item_2)) _CONDITONS.push('2:OA');
        if (REGEX_MATCH_1100_40_01(_CHILD.item_2) && isOA) _CONDITONS.push('2:COTAS');
        if (REGEX_MATCH_1100_40_02(_CHILD.item_2) && isOA) _CONDITONS.push('2:PH');
        if (REGEX_MATCH_1100_40_03(_CHILD.item_2) && isOA) _CONDITONS.push('2:TIERRA');
        if (REGEX_MATCH_1100_40_04(_CHILD.item_2) && isOA) _CONDITONS.push('2:PISCINA');
        if (REGEX_MATCH_1100_40_05(_CHILD.item_2) && isOA) _CONDITONS.push('2:PLANOS');
        if (REGEX_MATCH_1100_40_06(_CHILD.item_2) && isOA) _CONDITONS.push('2:BIENES');
        if (REGEX_MATCH_1100_40_07(_CHILD.item_2) && isOA) _CONDITONS.push('2:ESTRUCTURAL');
    }
    if (select[2]) {
        if (_CHILD.item_3 == 'A') _CONDITONS.push('3:A');
        if (_CHILD.item_3 == 'B') _CONDITONS.push('3:B');
        if (_CHILD.item_3 == 'C') _CONDITONS.push('3:C');
    }
    if (select[3]) {
        if (_CHILD.item_4 == 'A') _CONDITONS.push('4:A');
        if (_CHILD.item_4 == 'B') _CONDITONS.push('4:B');
        if (_CHILD.item_4 == 'C') _CONDITONS.push('4:C');
    }
    if (select[4]) {
        if (_CHILD.item_5.includes('A')) _CONDITONS.push('5:A');
        if (_CHILD.item_5.includes('B')) _CONDITONS.push('5:B');
        if (_CHILD.item_5.includes('C')) _CONDITONS.push('5:C');
        if (_CHILD.item_5.includes('D')) _CONDITONS.push('5:D');
        if (_CHILD.item_5.includes('E')) _CONDITONS.push('5:E');
        if (_CHILD.item_5.includes('F')) _CONDITONS.push('5:F');
        if (_CHILD.item_5.includes('G')) _CONDITONS.push('5:G');
        if (_CHILD.item_5.includes('g')) _CONDITONS.push('5:g');
        if (_CHILD.item_5.includes('H')) _CONDITONS.push('5:H');
        if (_CHILD.item_5.includes('I')) _CONDITONS.push('5:I');
    }
    return _CONDITONS;

}

export function _GET_SERIE_COD(_CHILD) {
    let _CONDITONS = _IDENTIFY_SERIES(_CHILD, [1, 0, 0, 0, 0]);
    let _SERIES = [];
    for (var ITEM in SERIES_MODULES_RELATION) {
        let isFounded = false;
        if (SERIES_MODULES_RELATION[ITEM].includes(_CONDITONS.join(','))) isFounded = true;
        if (isFounded) _SERIES.push(ITEM)
    }
    return _SERIES;
}
export function _GET_SERIE_STR(_CHILD) {
    let _SERIES = _GET_SERIE_COD(_CHILD);
    var COD_SERIES = require('../../jsons/funCodes.json');
    let _SERIES_STR = [];
    for (var i = 0; i < _SERIES.length; i++) {
        _SERIES_STR.push(COD_SERIES[_SERIES[i]])
    }
    return _SERIES_STR;
}
export function _GET_SUBSERIE_COD(_CHILD) {
    let _CONDITONS = _IDENTIFY_SERIES(_CHILD, [1, 0, 1, 1, 1], true);
    let _SUBSERIES = [];
    for (var ITEM in SUBSERIES_MODULES_RELATION) {
        let isFounded = false;
        if (SUBSERIES_MODULES_RELATION[ITEM].join('') === _CONDITONS.join('')) isFounded = true;
        if (isFounded) _SUBSERIES.push(ITEM)
    }
    return _SUBSERIES;
    // 1100-70.01 1100-70.02 1100-70.03 1100-70.04
}
export function _GET_SUBSERIE_STR(_CHILD) {
    let _SERIES = _GET_SUBSERIE_COD(_CHILD);
    var COD_SERIES = require('../../jsons/funCodes.json');
    let _SERIES_STR = [];
    for (var i = 0; i < _SERIES.length; i++) {
        _SERIES_STR.push(COD_SERIES[_SERIES[i]])
    }
    return _SERIES_STR;
}

//--------------------------------------------------------------------//
//--------------------------------------------------------------------//
//--------------------------------------------------------------------//
const _FUN_1_1_HELPER = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const _FUN_1_2_HELPER = ['A', 'B', 'C', 'D'];
const _FUN_1_3_HELPER = ['A', 'B', 'C'];
const _FUN_1_4_HELPER = ['A', 'B', 'C'];
const _FUN_1_5_HELPER = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'g', 'H', 'I'];
const _FUN_1_6_HELPER = ['A', 'B', 'C', 'D'];
const _FUN_1_7_HELPER = ['A', 'B', 'C'];
const _FUN_1_8_HELPER = ['A', 'B', 'C'];
const _FUN_1_9_HELPER = ['A', 'B'];
const _FUN_1_101_HELPER = ['A', 'B', 'C'];
const _FUN_1_102_HELPER = ['A', 'B', 'C', 'D'];
const _FUN_2_4_HELPER = ['A', 'B', 'C'];
const _FUN_2_5_HELPER = ['A', 'B'];

const _FUN_1_1 = (useLeter, lang) => {
    let letters = _FUN_1_1_HELPER
    let trn = {
        en: ['URBAN LICENSE',
            'PARCELLING LICENSE',
            'SUBDIVISION LICENSE',
            'CONSTRUCTION LICENSE',
            'PUBLIC SPACE INTERVENTION AND OCUPATION',
            'BUILDING ACKNOWLEDGEMENT',
            'OTHER PROCESS'],
        es: ['LICENCIA DE URBANIZACION',
            'LICENCIA DE PARCELACION',
            'LICENCIA DE SUBDIVISION',
            'LICENCIA DE CONSTRUCCION',
            'INTERVENCION Y OCUPACION DEL ESPACIO PUBLICO',
            'RECONOCIMIENTO DE LA EXISTENCIA DE UNA EDIFICACION',
            'OTRAS ACTUACIONES']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

const _FUN_1_2 = (useLeter, lang) => {
    let letters = _FUN_1_2_HELPER
    let trn = {
        en: ['INITIAL',
            'EXTENSION',
            'VALID LICENSE MODIFICATION',
            'REVALIDATION'],
        es: ['INICIAL',
            'PRORROGA',
            'MODIFICACION DE LICENCIA VIGENTE',
            'REVALIDACION']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

const _FUN_1_3 = (useLeter, lang) => {
    let letters = _FUN_1_3_HELPER
    let trn = {
        en: ['DEVELOPMENT',
            'SANITATION',
            'RECLAMATION'],
        es: ['DESARROLLO',
            'SANEAMIENTO',
            'RECUPERACION']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

const _FUN_1_4 = (useLeter, lang) => {
    let letters = _FUN_1_4_HELPER
    let trn = {
        en: ['RURAL SUBDIVISION',
            'URBAN SUBDIVISION',
            'REBATCHING'],
        es: ['SUBDIVISION RURAL',
            'SUBDIVISION URBANA',
            'RELOTEO']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

const _FUN_1_5 = (useLeter, lang) => {
    let letters = _FUN_1_5_HELPER
    let trn = {
        en: ['NEW CONSTRUCTION',
            'AMPLIATION',
            'ADEQUACY',
            'MODIFICATION',
            'RESTORATION',
            'STRUCTURAL REINFORCEMENT',
            'TOTAL DEMOLITION',
            'PARTIAL DEMOLITION',
            'RECONSTRUCTION',
            'ENCLOSURE'],
        es: ['OBRA NUEVA',
            'AMPLIACION',
            'ADECUACION',
            'MODIFICACION',
            'RESTAURACION',
            'REFORZAMIENTO ESTRUCTURAL',
            'DEMOLICION TOTAL',
            'DEMOLICION PARCIAL',
            'RECONSTRUCCION',
            'CERRAMIENTO']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

const _FUN_1_6 = (useLeter, lang) => {
    let letters = _FUN_1_6_HELPER
    let trn = {
        en: ['RESIDENCE',
            'TRADE AND/OR SERVICES',
            'INSTITUTIONAL',
            'INDUSTRIAL'],
        es: ['VIVIENDA',
            'COMERCIO Y/O SERVICIOS',
            'INSTITUCIONAL',
            'INDUSTRIAL']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

const _FUN_1_7 = (useLeter, lang) => {
    let letters = _FUN_1_7_HELPER
    let trn = {
        en: ['LESS THAN 2000 m2',
            'EQUAL OR MORE THAN 2000 m2',
            'REACHES OR SURPASSES THE AREA OF 2000 m2 THROUGH AMPLIATION'],
        es: ['MENOR A 2000 m2',
            'IGUAL O MAYOR A 2000 m2',
            'ALCANZA O SUPERA MEDIANTE AMPLIACION LOS 2000 m2']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

const _FUN_1_8 = (useLeter, lang) => {
    let letters = _FUN_1_8_HELPER
    let trn = {
        en: ['PIR',
            'SIR',
            'NO SIR'],
        es: ['VIP',
            'VIS',
            'NO VIS']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

const _FUN_1_9 = (useLeter, lang) => {
    let letters = _FUN_1_9_HELPER
    let trn = {
        en: ['YES',
            'NO'],
        es: ['SI',
            'NO']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

const _FUN_1_101 = (useLeter, lang) => {
    let letters = _FUN_1_101_HELPER
    let trn = {
        en: ['PASSIVE MEASURES',
            'ACTIVE MEASURES',
            'PASSIVE AND ACTIVE MEASURES'],
        es: ['MEDIDAS PASIVAS',
            'MEDIDAS ACTIVAS',
            'MEDIDAS ACTIVAS Y PASIVAS']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

const _FUN_1_102 = (useLeter, lang) => {
    let letters = _FUN_1_102_HELPER
    let trn = {
        en: ['COLD',
            'TEMPERATE',
            'WARM DRY',
            'WARM HUMID'],
        es: ['FRIO',
            'TEMPLADO',
            'CALIDO SECO',
            'CALIDO HUMEDO']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

const _FUN_2_4 = (useLeter, lang) => {
    let letters = _FUN_2_4_HELPER
    let trn = {
        en: ['URBAN',
            'RURAL',
            'EXPANTION'],
        es: ['URBANO',
            'RURAL',
            'DE EXPANSION']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};


const _FUN_2_5 = (useLeter, lang) => {
    let letters = _FUN_2_5_HELPER
    let trn = {
        en: ['LOT PLAN',
            'TOPOGRAPHIC MAP'],
        es: ['LANO DE LOTEO',
            'PLANO TOPOGRAFICO']
    }
    if (useLeter) {
        let array = trn[lang || 'en'];
        array = array.map((a, i) => `${letters[i]}. ${a}`)
        return array;
    }
    else return trn[lang || 'en']
};

// 1.1 CAN BE MULTIPLE
export const _FUN_1_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY) return ""
    var _defaultValue = _ARRAY
    var _finalArray = []
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_1_1_HELPER.length; j++) {
            if (_FUN_1_1_HELPER[j] == _defaultValue[i]) {
                _finalArray.push(_FUN_1_1(useLetter, lang)[j]);
            }
        }
    }
    return _finalArray.join();
}

// 1.2 CAN BE OPTIONS && CAN BE EMPTY STRING
export const _FUN_2_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY) return ""
    var _defaultValue = _ARRAY
    var _finalStr = _defaultValue;
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_1_2_HELPER.length; j++) {
            if (_FUN_1_2_HELPER[j] == _defaultValue) {
                _finalStr = _FUN_1_2(useLetter, lang)[j];
                break;
            }
        }
    }
    return _finalStr;
}

//  1.3 CAN BE EMPTY STRING
export const _FUN_3_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY) return ""
    var _defaultValue = _ARRAY
    var _finalStr = _defaultValue;
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_1_3_HELPER.length; j++) {
            if (_FUN_1_3_HELPER[j] == _defaultValue[i]) {
                _finalStr = _FUN_1_3(useLetter, lang)[j];
                break;
            }
        }
    }
    return _finalStr;
}

// 1.4 CAN BE EMPTY STRING
export const _FUN_4_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY) return ""
    var _defaultValue = _ARRAY
    var _finalStr = _defaultValue;
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_1_4_HELPER.length; j++) {
            if (_FUN_1_4_HELPER[j] == _defaultValue[i]) {
                _finalStr = _FUN_1_4(useLetter, lang)[j];
                break;
            }
        }
    }
    return _finalStr;
}

// 1.5 CAN BE EMPTY STRING && CAN BE MULTILPLE
export const _FUN_5_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY) return ""
    var _defaultValue = _ARRAY
    var _finalArray = []
    var _finalStr = ""
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_1_5_HELPER.length; j++) {
            if (_FUN_1_5_HELPER[j] == _defaultValue[i]) {
                _finalArray.push(_FUN_1_5(useLetter, lang)[j]);
            }
        }
    }
    return _finalStr = _finalArray.join(', ');
}

// 1.6 CAN BE MULTILPLE && CAN BE OTHERS && CAN BE EMPTY STRING
export const _FUN_6_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY) return ""
    var _defaultValue = _ARRAY
    var _finalArray = []
    var flag = false;
    var _finalStr = ""
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_1_6_HELPER.length; j++) {
            if (_FUN_1_6_HELPER[j] == _defaultValue[i]) {
                _finalArray.push(_FUN_1_6(useLetter, lang)[j]);
                flag = true;
            }
        }
    }
    if (!flag) {
        _finalArray.push(_defaultValue)
    }
    return _finalStr = _finalArray.join(', ');
}

// 1.7 CAN BE EMPTY STRING
export const _FUN_7_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY) return ""
    var _defaultValue = _ARRAY
    var _finalStr = _defaultValue;
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_1_7_HELPER.length; j++) {
            if (_FUN_1_7_HELPER[j] == _defaultValue[i]) {
                _finalStr = _FUN_1_7(useLetter, lang)[j];
                break;
            }
        }
    }
    return _finalStr;
}

// 1.8 CAN BE EMPTY STRING
export const _FUN_8_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY) return ""
    var _defaultValue = _ARRAY
    var _finalStr = _defaultValue;
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_1_8_HELPER.length; j++) {
            if (_FUN_1_8_HELPER[j] == _defaultValue[i]) {
                _finalStr = _FUN_1_8(useLetter, lang)[j];
                break;
            }
        }
    }
    return _finalStr;
}

// 1.9 CAN BE EMPTY STRING
export const _FUN_9_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY) return ""
    var _defaultValue = _ARRAY
    var _finalStr = _defaultValue;
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_1_9_HELPER.length; j++) {
            if (_FUN_1_9_HELPER[j] == _defaultValue[i]) {
                _finalStr = _FUN_1_9(useLetter, lang)[j];
                break;
            }
        }
    }
    return _finalStr;
}

// 1.101 CAN BE EMPTY STRING
export const _FUN_101_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY) return ""
    var _defaultValue = _ARRAY
    var _finalStr = _defaultValue;
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_1_101_HELPER.length; j++) {
            if (_FUN_1_101_HELPER[j] == _defaultValue[i]) {
                _finalStr = _FUN_1_101(useLetter, lang)[j];
                break;
            }
        }
    }
    return _finalStr;
}

// 1.102 CAN BE EMPTY STRING && CAN BE OTHERS
export const _FUN_102_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY) return ""
    var _defaultValue = _ARRAY
    var _finalStr = _defaultValue;
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_1_102_HELPER.length; j++) {
            if (_FUN_1_102_HELPER[j] == _defaultValue[i]) {
                _finalStr = _FUN_1_102(useLetter, lang)[j];
                break;
            }
        }
    }
    return _finalStr;
}

// 2.4 CAN BE EMPTY STRING && CAN BE OTHERS
export const _FUN_24_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY || _ARRAY == 'null') return ""
    var _defaultValue = _ARRAY
    var _finalStr = _defaultValue;
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_2_4_HELPER.length; j++) {
            if (_FUN_2_4_HELPER[j] == _defaultValue[i]) {
                _finalStr = _FUN_2_4(useLetter, lang)[j];
                break;
            }
        }
    }
    return _finalStr;
}

// 2.5 CAN HAVE OTHER OPTIONS
export const _FUN_25_PARSER = (_ARRAY, useLetter, lang) => {
    if (!_ARRAY || _ARRAY == 'null') return ""
    var _defaultValue = _ARRAY
    var _finalStr = _defaultValue;
    for (var i = 0; i < _defaultValue.length; i++) {
        for (var j = 0; j < _FUN_2_5_HELPER.length; j++) {
            if (_FUN_2_5_HELPER[j] == _defaultValue[i]) {
                _finalStr = _FUN_2_5(useLetter, lang)[j];
                break;
            }
        }
    }
    return _finalStr;
}

//--------------------------------------------------------------------//
//--------------------------------------------------------------------//
//--------------------------------------------------------------------//



// RECIEVES AN OBJECT FUN 1 ONLY CARING ABOUT 5 OF ITS PROPERTIES
// RETURNS A STRING TRANSFORMING ALL THE INPUT VALUE INTO CONTEXTUALIZED INFORMATION
// IE A -> LICENCIA X

export function formsParser1(object, lang) {
    if (!object) return "";
    let f_11 = object.tipo ? object.tipo : "";
    let f_12 = object.tramite ? object.tramite : "";
    let f_13 = object.m_urb ? object.m_urb : "";
    let f_14 = object.m_sub ? object.m_sub : "";
    let f_15 = object.m_lic ? object.m_lic : "";

    let textToParse = [];
    let arrayHelper = null;
    let arrayHelper2 = null;
    let defaultValue = null;

    // 1.1 CAN BE MULTIPLE
    defaultValue = f_11
    arrayHelper = _FUN_1_1(false, lang);
    arrayHelper2 = _FUN_1_1_HELPER;
    for (var i = 0; i < defaultValue.length; i++) {
        for (var j = 0; j < arrayHelper2.length; j++) {
            if (arrayHelper2[j] == defaultValue[i]) {
                textToParse.push(arrayHelper[j]);
            }
        }
    }

    // 1.2 CAN HAVE OTHER OPTIONS
    arrayHelper = _FUN_1_2(false, lang);
    arrayHelper2 = _FUN_1_2_HELPER;
    defaultValue = f_12;
    for (var i = 0; i < arrayHelper2.length; i++) {
        if (arrayHelper2[i] == defaultValue) {
            defaultValue = arrayHelper[i];
            break;
        }
    }
    if (defaultValue) {
        textToParse.push(defaultValue);
    }


    // 1.3 CAN BE NULL
    defaultValue = f_13
    if (defaultValue != "" && defaultValue != null) {
        arrayHelper = _FUN_1_3(false, lang);
        arrayHelper2 = _FUN_1_3_HELPER;
        for (var i = 0; i < arrayHelper2.length; i++) {
            if (arrayHelper2[i] == defaultValue) {
                textToParse.push(arrayHelper[j]);
                break;
            }
        }
    }

    // 1.4 CAN BE NULL
    defaultValue = f_14
    if (defaultValue != "" && defaultValue != null) {
        arrayHelper = _FUN_1_4(false, lang);
        arrayHelper2 = _FUN_1_4_HELPER;
        for (var i = 0; i < arrayHelper2.length; i++) {
            if (arrayHelper2[i] == defaultValue) {
                textToParse.push(arrayHelper[j]);
                break;
            }
        }
    }

    // 1.5 CAN BE NULL && CAN BE MULTILPLE
    defaultValue = f_15
    if (defaultValue != "" && defaultValue != null) {
        arrayHelper = _FUN_1_5(false, lang);
        arrayHelper2 = _FUN_1_5_HELPER;
        for (var i = 0; i < defaultValue.length; i++) {
            for (var j = 0; j < arrayHelper2.length; j++) {
                if (arrayHelper2[j] == defaultValue[i]) {
                    textToParse.push(arrayHelper[j]);
                }
            }
        }
    }
    var striing = textToParse.join()
    return striing.replace(/,/g, ", ");
}

export function formsParser1_exlucde2(object, lang) {
    if (!object) return "";
    let f_11 = object.tipo ? object.tipo : "";
    let f_12 = object.tramite ? object.tramite : "";
    let f_13 = object.m_urb ? object.m_urb : "";
    let f_14 = object.m_sub ? object.m_sub : "";
    let f_15 = object.m_lic ? object.m_lic : "";

    let textToParse = [];
    let arrayHelper = null;
    let arrayHelper2 = null;
    let defaultValue = null;

    // 1.1 CAN BE MULTIPLE
    defaultValue = f_11
    arrayHelper = _FUN_1_1(false, lang);
    arrayHelper2 = _FUN_1_1_HELPER;
    for (var i = 0; i < defaultValue.length; i++) {
        for (var j = 0; j < arrayHelper2.length; j++) {
            if (arrayHelper2[j] == defaultValue[i]) {
                textToParse.push(arrayHelper[j]);
            }
        }
    }


    // 1.3 CAN BE NULL
    defaultValue = f_13
    if (defaultValue != "" && defaultValue != null) {
        arrayHelper = _FUN_1_3(false, lang);
        arrayHelper2 = _FUN_1_3_HELPER;
        for (var i = 0; i < arrayHelper2.length; i++) {
            if (arrayHelper2[i] == defaultValue) {
                textToParse.push(arrayHelper[j]);
                break;
            }
        }
    }

    // 1.4 CAN BE NULL
    defaultValue = f_14
    if (defaultValue != "" && defaultValue != null) {
        arrayHelper = _FUN_1_4(false, lang);
        arrayHelper2 = _FUN_1_4_HELPER;
        for (var i = 0; i < arrayHelper2.length; i++) {
            if (arrayHelper2[i] == defaultValue) {
                textToParse.push(arrayHelper[j]);
                break;
            }
        }
    }

    // 1.5 CAN BE NULL && CAN BE MULTILPLE
    defaultValue = f_15
    if (defaultValue != "" && defaultValue != null) {
        arrayHelper = _FUN_1_5(false, lang);
        arrayHelper2 = _FUN_1_5_HELPER;
        for (var i = 0; i < defaultValue.length; i++) {
            for (var j = 0; j < arrayHelper2.length; j++) {
                if (arrayHelper2[j] == defaultValue[i]) {
                    textToParse.push(arrayHelper[j]);
                }
            }
        }
    }

    var striing = textToParse.join()
    return striing.replace(/,/g, ", ");
}

// REGEX GROUP
export function regexChecker_isPh(input, parser) {
    if (!input) return false;
    if (parser) return REGEX_MATCH_1100_40_02(formsParser1(input))
    return REGEX_MATCH_1100_40_02(input)
}
export function regexChecker_isOA(input) {
    if (!input) return false;
    let modalidad = input.tramite;
    let tipo = input.tipo;
    if (!modalidad) return false;
    let isPro =  modalidad.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == 'prorroga';
    if (!tipo) tipo = "";
    if (modalidad == 'B' || modalidad == 'D' || tipo.includes('G') || isPro) return true;
    return false;
}
export function regexChecker_isOA_2(input) {
    if (!input) return false;
    let modalidad = input.tramite;
    if (!modalidad) return false;
    let isPro =  modalidad.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == 'prorroga';
    let tipo = input.tipo;
    if (!tipo) tipo = "";
    if (modalidad == 'B' || isPro) return true;
    return false;
}
export function regexChecker_isOA_3(input) {
    if (!input) return false;
    let modalidad = input.tramite;
    let tipo = input.tipo;
    if (!modalidad) return false;
    let isPro =  modalidad.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == 'prorroga';
    if (!tipo) tipo = "";
    if (modalidad == 'B' || modalidad == 'D' || isPro) return true;
    return false;
}
export function regexChecker_movTierra(input) {
    return REGEX_MATCH_1100_40_03(input)
}

// REGEXES... REGI?
function REGEX_MATCH_1100_40_01(input) {
    let regex = /ajuste.*cota/i;
    return regex.test(input);
}
function REGEX_MATCH_1100_40_02(_string) {
    let regex0 = /p\.\s+h/i;
    let regex1 = /p\.h/i;
    let regex2 = /PROPIEDAD\s+HORIZONTAL/i;
    let regex3 = /p\s+h/i;
    if (regex0.test(_string) || regex2.test(_string) || regex1.test(_string) || regex3.test(_string)) return true;
    return false
}
function REGEX_MATCH_1100_40_03(input) {
    let regex = /movimiento.*tierra/i;
    return regex.test(input);
}
function REGEX_MATCH_1100_40_04(input) {
    let regex = /piscina/i;
    return regex.test(input);
}
function REGEX_MATCH_1100_40_05(input) {
    let regex = /modificacion.*plano.*urbanistico/i;
    return regex.test(input);
}
function REGEX_MATCH_1100_40_06(input) {
    let regex = /bien.*destin.*publico/i;
    return regex.test(input);
}
function REGEX_MATCH_1100_40_07(input) {
    let regex = /revision.*independiente.*estructural/i;
    return regex.test(input);
}

// EXPORT VARS

export const CATEGORY = { '0': 'SIN CATEGORIZAR', 'i': 'CATEGORIA I', 'ii': "CATEGORIA II", 'iii': "CATEGORIA III", 'iv': "CATEGORIA IV", 'oa': "OTRAS ACTUACIONES" }
export let STATE = _state => {
    if (_state < -100) return <label className="fw-b text-danger">DISISTIMIENTO</label>;
    if (_state == -1) return <label className="text-danger">INCOMPLETO</label>
    if (_state == 1) return <label className="fw-b">SIN DEFINIR</label>
    if (_state == 5) return 'LYDF'
    if (_state == 50) return 'EXPEDICION'
    if (_state == 100) return 'ARCHIVADO'
    return '';
}
export const CATEGORY_DAYS_ASIGN = { 'i': 4, 'ii': 6, 'iii': 8, 'iv': 10, 'oa': 2 };
export const CATEGORY_DAYS_REVIEW = { 'i': 20, 'ii': 25, 'iii': 35, 'iv': 45, 'oa': 15 };