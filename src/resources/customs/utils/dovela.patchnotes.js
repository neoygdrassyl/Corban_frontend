// PATCH NOTES MODEL
/*
    date => String YYYY-MM-DD
    version => String
    name => String (optiona) a name if they are option

    title => String
    body => String : A small little text
    changes => [text]
    bugfixes => [text]
    footer => String : A final text for the patch notes
*/
const supported_langs = ['en', 'es']
const title = {
    en: 'Patch Notes',
    es: 'Notas de Parche',
}


export function GET_LAST_PATCH_NOTE(_lang) {
    let lang = supported_langs.includes(_lang) ? _lang : 'en';
    return patch_notes(lang)[0]
}

export function GET_PATCH_NOTES(_lang) {
    let lang = supported_langs.includes(_lang) ? _lang : 'en';
    return patch_notes(lang)
}

const patch_notes = (lang) => [
    {
        date: '2022-08-05', version: '0.5.0', name: 'Bedrock',
        title: title[lang],
        body: lang => {
            if (lang == 'es') return 'Primer avance de Dovela, Se completa la parte inicial del modulo de Control.'
            return 'First update of Dovela, the first part of the control module is provided. '
        },
        changes: lang => {
            if (lang == 'es') return [
                'Se puede acceder al módulo de Control a través de la página principal de cada equipo.',
                 'Hay múltiples herramientas provistas por este módulo.',
                 'Invitar Trabajador, envía una invitación a un trabajador para que se una al equipo, siempre y cuando ya esté registrado en el sistema.',
                 'La configuración de roles permite crear varios roles diferentes y establecer sus permisos.',
                 'La administración de trabajadores permite colocar a los trabajadores en el equipo con varios roles.',
                 'Configuración de variables, solo un rol administrativo puede ver estas opciones, este módulo permite configurar los valores de todas las diferentes variables de trabajo del equipo.',
                 'Auditorías, permite ver todas las acciones y eventos que ocurrieron en el equipo, solo un rol de administrador puede ver este módulo.'
            ]
            return [
                'The Control module can be accessed through the main page of each team.',
                'There are multiple tools provided by this module.',
                'Invite Worker, send an invitation to a worker to join the team, as long as they are already registered in the system.',
                'Roles configuration allows creating various different roles and set their permissions.',
                'Workers administrations allows setting the workers on the team with various roles.',
                'Variables Configuration, only an administrative role can see this options, this module allows setting the values of all the different working variables of the team.',
                'Audits, allows seeing all the actions and events that happened on the team, only an admin role can see this module.'
            ]
        },
        bugfixes: lang => {
            if (lang == 'es') return []
            return []
        },
        footer: lang => {
            if (lang == 'es') return ''
            return ''
        }
    },
]