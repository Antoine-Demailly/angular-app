<!DOCTYPE html>
<html lang="fr" ng-app="angularapp">
<head>
  <meta charset="UTF-8">
  <title translate>title</title>
  <base href="/">

  <!-- Load Compiled CSS -->
  <link rel="stylesheet" href="assets/css/master.css" media="screen" title="no title" charset="utf-8">

  <!-- Bower Dependencies -->
  <script src="bower_components/angular/angular.min.js"></script>
  <script src="bower_components/angular-route/angular-route.min.js"></script>
  <script src="bower_components/angular-local-storage/dist/angular-local-storage.min.js"></script>
  <script src="bower_components/angular-translate/angular-translate.min.js"></script>
  <script src="bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js"></script>

  <!-- Module & Config -->
  <script src="app/app.module.js"></script>
  <script src="app/config/app.routes.js"></script>
  <script src="app/config/app.translate.js"></script>

  <!-- Components -->
  <script src="app/components/chat/chat.controller.js"></script>

  <script src="app/components/error/error.controller.js"></script>

  <script src="app/components/home/home.controller.js"></script>

  <script src="app/components/layout/layout.service.js"></script>
  <script src="app/components/layout/layout.controller.js"></script>

  <script src="app/components/user/user.controller.js"></script>
</head>
<body ng-controller="LayoutController as vm" ng-init="vm.init()">
  
  <!-- Layout -->
  <h1 translate>title</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/chat">Chat</a></li>
      <li><a href="/user/Antoine">User</a></li>
      <li><a href="/test">Test</a></li>
    </ul>
  </nav>

  <ul>
    <li><span ng-click="vm.switchLanguage('fr');">Français</span></li>
    <li><span ng-click="vm.switchLanguage('en');">Anglais</span></li>
  </ul>

  <!-- ng-view container -->
  <div ng-view>

  </div>
</body>
</html>
