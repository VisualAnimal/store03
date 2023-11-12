import React, { useState, useEffect } from 'react';

const App = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 本地 JSON 文件路径或远程 JSON URL
        const jsonUrl = 'data.json';

        // 使用 fetch 获取 JSON 数据
        const response = await fetch(jsonUrl);
        const data = await response.json();

        // 更新组件状态
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    // 调用数据获取函数
    fetchData();
  }, []); // 依赖数组为空表示只在组件加载时调用 useEffect

  return (
    <div>
      <h1>JSON Data</h1>
      <ul>
        {jsonData.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
