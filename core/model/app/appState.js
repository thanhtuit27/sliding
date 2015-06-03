define(function () {
    var factory = {
        create: create
    };
    return factory;

    function create() {
        return new AppState();

        function AppState() {
            var vm = this;
            vm.config = {};
            vm.authentication = {token:"", expiredAfter:new Date(2000, 01, 01) };
            vm.userInfo = { fullName: "(Anonymous)", photoUrl: "", id: 12, lastLogin: Date.current() };

            vm.setConfig = setConfig;
            vm.setAuthentication = setAuthentication;
            vm.setUserInfo = setUserInfo;
            vm.toJson = toJson;
            vm.fromJson = fromJson;
            return vm;

            function fromJson(state) {
                vm.authentication = System.extend(vm.authentication, state.authentication);
                vm.userInfo = System.extend(vm.userInfo, state.userInfo);
            }
            function setUserInfo(loginUserInfo) {
                vm.userInfo = loginUserInfo;
            }

            function setAuthentication(userAuthentication) {
                vm.authentication = userAuthentication;
            }
            function toJson() {
                return {
                    config: vm.config,
                    authentication: vm.authentication,
                    userInfo: vm.userInfo
                };
            }
            function setConfig(appConfig) {
                vm.config = appConfig;
            }
        }
    }
});