$httpClient.get('https://ipinfo.io/json', function (error, response, data) {
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
      title: '当前 IP 和 位置',
      content: `IP: ${ipData.ip}\n城市: ${ipData.city}\n地区: ${ipData.region}\n国家: ${ipData.country}`,
      backgroundColor: '#663399',
      icon: 'network',
    });
  }
});
