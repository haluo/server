domeApp.controller('clusterManageCtr', ['$scope', '$domeCluster', function($scope, $domeCluster) {
	$scope.$emit('pageTitle', {
		title: '集群管理',
		descrition: '在这里您可以查看和管理自己的物理集群，并随时添加主机到集群中。',
		mod: 'cluster'
	});
	$scope.isLoading = true;
	$domeCluster.getClusterList().then(function(res) {
		$scope.clusterList = res.data.result || [];
	}).finally(function() {
		$scope.isLoading = false;
	});
}]);