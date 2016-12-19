angular.module('myApp') 

.controller('eclaimCtrl', function($scope,$http) {
   console.log("Eclaim")



 $http.get("http://ksnhealth.ddns.net/mra_api/eclaim_check.php")
   .then(
       function(response){
         console.log(response.data)
$scope.myData = response.data ;
       }, 
       function(response){
         console.log(response)
       }
    )
$scope.search = [];
 /*$scope.gridOptions = { data: 'myData',

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
*/


});