$httpClient.get('https://api64.ipify.org?format=json', function (error, response, data) {
  if (error) {
    console.log('API请求失败:', error);
    $done({
      title: '当前 IP 地址',
      content: '获取 IP 地址失败',
      backgroundColor: '#663399',
      icon: 'network',
    });
  } else {
    var ipData = JSON.parse(data);
    $done({
      title: '当前 IP 地址',
      content: ipData.ip,
      backgroundColor: '#663399',
      icon: 'network',
    });
  }
});
