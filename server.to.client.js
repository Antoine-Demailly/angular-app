var serverToClient = {
  routing: {
    otherwise: {
      redirectTo: '/error/404',
    },
    routes: {
      home: {
        path: '/',

        // Angular
        templateUrl: 'templates/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm',
      },
      chat: {
        path: '/chat',

        // Angular
        templateUrl: 'templates/chat.view.html',
        controller: 'ChatController',
        controllerAs: 'vm',
      },
      user: {
        path: '/user/:user',

        // Angular
        templateUrl: 'templates/user.view.html',
        controller: 'UserController',
        controllerAs: 'vm',
      },
      error: {
        path: '/error/404',

        // Angular
        templateUrl: 'templates/404.view.html',
        controller: 'ErrorController',
        controllerAs: 'vm',
      },
    },
  },
};
