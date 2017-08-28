/**
 * Created by BALASUBRAMANIAM on 28/08/2017.
 */
savingsModule.controller('SavingsCtlr',['$scope',function($scope)
{
    $scope.account={
        accountId:0,
        balance:0,
        type:'savings'
    }

    $scope.accountSubmit=function()
    {
        console.log($scope.account);
    }

}]);

savingsModule.controller('CustomerCtrl',['$scope','$http',
    function ($scope,$http)
{
    $http({

        method:'GET',
        datatype:"json",
        headers:{
        'Content-Type':'application/json'
         },
        url:'http://localhost:3000/getCustomers'

    }).then(function(response)

    {
        console.log(response);
    })


}])

