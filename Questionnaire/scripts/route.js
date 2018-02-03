var route = function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/welcome').when('/', '/welcome');

    $stateProvider.state('questionnaire', {
        url: '/',
        views: {
            'header': {
                templateUrl: 'scripts/views/view_header.html?v=' + window.version
            },
            '': {
                template: '<div class="container" ui-view></div>'
            }
        }
    });

    $stateProvider.state('questionnaire.welcome', {
        url: 'welcome',
        templateUrl: 'scripts/views/view_welcome.html?v=' + window.version,
        controller: WelcomeController
    });

    $stateProvider.state('questionnaire.login', {
        url: 'login',
        templateUrl: 'scripts/views/view_login.html?v=' + window.version
    });

    $stateProvider.state('questionnaire.questions', {
        url: 'questions',
        templateUrl: 'scripts/views/view_questions.html?v=' + window.version
    });
    $stateProvider.state('questionnaire.addQuestion', {
        url: 'add_question',
        templateUrl: 'scripts/views/view_add_question.html?v=' + window.version
    });
    $stateProvider.state('questionnaire.editQuestion', {
        url: 'edit_question',
        templateUrl: 'scripts/views/view_edit_question.html?v=' + window.version
    });

    $stateProvider.state('questionnaire.addQuestionnaire', {
        url: 'add_questionnaire',
        templateUrl: 'scripts/views/view_add_questionnaire.html?v=' + window.version
    });
    $stateProvider.state('questionnaire.editQuestionnaireIsPublished', {
        url: 'edit_questionnaire_ispublished',
        templateUrl: 'scripts/views/view_edit_questionnaire_ispublished.html?v=' + window.version
    });
    $stateProvider.state('questionnaire.editQuestionnaireNotPublished', {
        url: 'edit_questionnaire_notpublished',
        templateUrl: 'scripts/views/view_edit_questionnaire_notpublished.html?v=' + window.version
    });
}