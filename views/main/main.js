angular.module('myApp') 

.controller('MainCtrl', function($scope,$http) {
   console.log("Main")



 $http.get("http://ksnhealth.ddns.net/mra_api/select_discharge.php")
   .then(
       function(response){
         console.log(response.data)
$scope.myData = response.data ;
       }, 
       function(response){
         console.log(response)
       }
    )

 $scope.gridOptions = { data: 'myData',

 columnDefs: [{
        field: 'an',
        displayName: 'AN',
        cellClass: 'grid-align'
     }, {
        field: 'dchdate',
        displayName: 'วันที่จำหน่าย'
    },
    {
        field: 'ddate',
        displayName: 'จำนวนวัน'
    },{
        field: 'name',
        displayName: 'สิทธิ'
    }
    
    
    ]


 };



});